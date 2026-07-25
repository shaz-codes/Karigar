import cors from "cors";
import Express from "express";
import initDB from "./utils/DB";
import routes from "./routes";
import auth from "./middleware/auth";

const app = Express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);
app.use(Express.json());

app.get("/status", (req, res) => {
	res.send("heloo");
});
app.use(auth);
app.use("/api", routes);

initDB();
app.listen(3000, () => {
	console.log("server started on 3000");
});
