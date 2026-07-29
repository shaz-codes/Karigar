import mongoose from "mongoose";
const cartProducts = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, ref: "User" },
		product: { type: mongoose.Types.ObjectId, ref: "Product" },
		quantity: Number,
		type: { type: String },
	},
	{
		timestamps: true,
	},
);
const Cart = mongoose.model("CartItems", cartProducts);
export default Cart;
