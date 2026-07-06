import User from "./../models/User";
import { Request, Response } from "express";
export function Signup(req: Request, res: Response) {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res
			.status(400)
			.send({ error: "name or password or email no exists" });
	}
	User.create({});
}
export function login() {}
