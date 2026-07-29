import User from "./../models/User";
import Wishlist from "../models/Wishlist";
import Product from "../models/Product";
import { Request, Response } from "express";

async function getCart(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send("user not found");
		}
		const { sku } = req.body();
		const product = await Wishlist.find({ sku });
		return res.send(
			product.map((v) => ({
				name: v.product?.name,
				image: v.product?.image_url,
				sku: v.product?.sku,
				stock: v.product?.stock,
				price: v.product?.price,
				addedOn: v.createdAt,
			})),
		);
	} catch (err: any) {
		return res.status(404).send({ error: err.message });
	}
}

async function removeProduct(req: Request, res: Response) {
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
		await Wishlist.deleteOne({
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
