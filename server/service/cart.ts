import User from "./../models/User";
import Product from "../models/Product";
import { Request, Response } from "express";
import Cart from "../models/Cart";

export async function getCart(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send("user not found");
		}
		const product = await Cart.find({ user: user?._id }).populate("product");
		return res.send(
			product.map((v) => ({
				...v.product?.toJSON(),
				quantity: v.quantity,
				addedOn: v.createdAt,
				type: v.type,
			})),
		);
	} catch (err: any) {
		return res.status(404).send({ error: err.message });
	}
}

export async function removeProduct(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send("User not found");
		}
		const { sku, type } = req.body;
		const product = await Product.findOne({ sku });
		if (!product) {
			return res.status(404).send("Product not found");
		}
		await Cart.deleteOne({
			user: user._id,
			product: product._id,
			type,
		});
		return res.send({
			message: "Product removed successfully",
		});
	} catch (err: any) {
		return res.status(500).send({
			error: err.message,
		});
	}
}

export async function addProduct(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!email) {
			return res.status(404).send("User doesn't exist");
		}
		const { sku, quantity, type } = req.body;
		const product = await Product.findOne({ sku });
		if (!product) {
			return res.status(404).send("product doesn't exist");
		}
		if (!(await Cart.findOne({ user: user?._id, product: product?._id }))) {
			await Cart.create({
				product: product?._id,
				user: user?._id,
				quantity,
				type,
			});
		}
		return res.status(200).send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function editQuantity(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!email) {
			return res.status(404).send("User Not Found");
		}
		const { sku, quantity, type } = req.body;
		const product = await Product.findOne({ sku });
		if (quantity < 1) {
			await Cart.deleteOne({
				user: user?._id,
				product: product?._id,
				type,
			});
			res.status(200).send();
		}
		const cartItem = await Cart.findOneAndUpdate(
			{
				user: user?._id,
				product: product?._id,
				type,
			},
			{
				quantity,
			},
		);

		if (!cartItem) {
			return res.status(404).send("Item not found");
		}
		res.status(200).send(cartItem);
	} catch (err: any) {
		res.status(500).send({ error: err.message });
	}
}
