import mongoose from "mongoose";

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
const craftsPerson = mongoose.model("craftsPerson", craftsPersonSchema);
export default craftsPerson;
