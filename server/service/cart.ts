import User from "./../models/User";
import Wishlist from "../models/Wishlist";
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
		return res.send(product);
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
		const { sku } = req.body;
		const product = await Product.findOne({ sku });
		if (!product) {
			return res.status(404).send("Product not found");
		}
		await Cart.deleteOne({
			user: user._id,
			product: product._id,
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

export async function increaseQuantity(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		const { sku } = req.body;
		const product = await Product.findOne({ sku });
		const cartItem = await Cart.findOneAndUpdate(
			{
				user: user?._id,
				product: product?._id,
			},
			{
				$inc: {
					quantity: 1,
				},
			},
			{
				new: true,
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

export async function decreaseQuantity(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		const { sku, quantity } = req.body;
		const product = await Product.findOne({ sku });
		const cartItem = await Cart.findOne({
			user: user?._id,
			product: product?._id,
		});
		if (!cartItem) {
			return res.status(404).send("Item not found");
		}
		if (cartItem.quantity === 1) {
			await cartItem.deleteOne();
		} else {
			cartItem.quantity--;
			await cartItem.save();
		}
		res.status(200).send({ message: "Updated" });
	} catch (err: any) {
		res.status(500).send({ error: err.message });
	}
}
