import User from "./../models/User";
import Wishlist from "../models/Wishlist";
import Product from "../models/Product";
import { Request, Response } from "express";

export async function GetWishlist(req: Request, res: Response) {
	console.log("wishlist");

	try {
		const email = req.user.email;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send("User not found");
		}
		const pro = await Wishlist.find({ user: user?._id }).populate("product");
		return res.send(
			pro.map((v) => ({
				name: v.product?.name,
				image: v.product?.image_url,
				sku: v.product?.sku,
				stock: v.product?.stock,
				price: v.product?.price,
				addedOn: v.createdAt,
			})),
		);
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function AddWishlist(req: Request, res: Response) {
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
		if (!(await Wishlist.findOne({ user: user?._id, product: product?._id }))) {
			await Wishlist.create({
				user: user?._id,
				product: product?._id,
			});
		}

		return res.status(201).send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function RemoveProduct(req: Request, res: Response) {
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
			user: user?._id,
			product: product?._id,
		});
		return res.send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}
