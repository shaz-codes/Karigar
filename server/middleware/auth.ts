import Express from "express";
import JWT from "jsonwebtoken";
const app = Express();

app.use((req, res, next) => {
	console.log(req.path);

	if (req.path === "/api/user/login" || req.path === "/api/user/signup") {
		next();
		return;
	}
	try {
		const token = req.cookies.jwt;
		const jwt = JWT.verify(token, "meow");
		console.log(jwt);
		req.user = jwt;
		next();
	} catch (err: any) {
		res.status(401).send({ error: err.message });
	}
});
export default app;
