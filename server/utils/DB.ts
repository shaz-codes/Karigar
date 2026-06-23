import mongoose from "mongoose";

const initDB = () => {
	mongoose
		.connect("mongodb://localhost:27017/karigar")
		.then(() => console.log("MongoDB Connected"))
		.catch((err) => console.error(err));
};
export default initDB;
