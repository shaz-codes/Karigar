import User from "./../models/User";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { Request, Response } from "express";
export async function Signup(req: Request, res: Response) {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res
			.status(400)
			.send({ error: "name or password or email no exists" });
	}
	const user = await User.create({
		name,
		email,
		password: bcrypt.hashSync(password, 6),
	});
	const jwt = JWT.sign(user.toJSON(), "meow");
	return res
		.cookie("jwt", jwt, { httpOnly: true, secure: false, sameSite: "lax" })
		.send();
}
export function login() {}
