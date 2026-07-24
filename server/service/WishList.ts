import User from "./../models/User";
import Wishlist from "../models/Wishlist";
import Product from "../models/Product";
import { Request, Response } from "express";

export async function GetWishlist(req: Request, res: Response) {
	console.log("wishlist");

	try {
		const email = req.user.email;
		const A = await User.findOne(email);
		await Wishlist.find({ user: A?._id }).populate("Product");
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function AddWishlist(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const A = await User.findOne(email);
		const { sku } = req.body;
		const B = await Product.findOne({ sku });
		const pro = await Wishlist.create({ user: A?._id, product: B?._id });
		return res.status(201).send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function RemoveProduct(req: Request, res: Response) {
	try {
		const email = req.user.email;
		const A = await User.findOne(email);
		const { sku } = req.body;
		const B = await Product.findOne({ sku });
		const pro = await Wishlist.deleteOne({ user: A?._id, product: B?._id });
		return res.status(200).send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}
