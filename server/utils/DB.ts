import mongoose from "mongoose";

const initDB = () => {
	mongoose
		.connect("mongodb://root:example@localhost:27017/karigar?authSource=admin")
		.then(() => console.log("MongoDB Connected"))
		.catch((err) => console.error(err));
};
export default initDB;
