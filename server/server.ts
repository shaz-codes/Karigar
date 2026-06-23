import cors from "cors";
import Express from "express";
import initDB from "./utils/DB";

const app = Express();

app.use(cors());
app.use(Express.json());

app.get("/status", (req, res) => {
	res.send("heloo");
});

initDB();
app.listen(3000, () => {
	console.log("server started on 3000");
});
