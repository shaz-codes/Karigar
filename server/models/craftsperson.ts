import mongoose, { Mongoose, Schema } from "mongoose";

const craftsPersonSchema = new mongoose.Schema({
	name: String,
	email: {
		unique: true,
		type: String,
	},
	password: String,
	age: Number,
	craftsType: String,
	description: String,
});
const crafsPerson = mongoose.model("craftsPerson", craftsPersonSchema);
export default crafsPerson;
