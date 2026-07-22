import mongoose, { Schema } from "mongoose";

const WishlistSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, ref: "User" },
		product: { type: mongoose.Types.ObjectId, ref: "Product" },
	},
	{
		timestamps: true,
	},
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

export default Wishlist;
