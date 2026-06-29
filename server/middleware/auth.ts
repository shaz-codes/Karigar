import Express from "express";
import JWT from "jsonwebtoken";
const app = Express();

app.use((req, res, next) => {
	const token = req.cookies.jwt;
	const jwt = JWT.verify(token, "meow");
	console.log(jwt);
	next();
});
