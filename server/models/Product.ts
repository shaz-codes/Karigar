import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
	name: { type: String, required: true },
	sku: { type: String, required: true, unique: true },
	price: Number,
	image_url: { type: String, required: true },
	stock: [
		{
			quantity: Number,
			type: { type: String },
		},
	],
	description: String,
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
