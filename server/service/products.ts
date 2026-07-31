import { Request, Response } from "express";
import Product from "../models/Product";

export async function getProducts(req: Request, res: Response) {
	try {
		const products = await Product.find();

		res.status(200).json(products);
	} catch (err: any) {
		res.status(500).json({
			error: err.message,
		});
	}
}
