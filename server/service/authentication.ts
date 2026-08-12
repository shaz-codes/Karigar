import User from "./../models/User";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { Request, Response } from "express";
export async function Signup(req: Request, res: Response) {
	console.log("hi09");

	try {
		const { name, email, password, role } = req.body;
		if (!name || !email || !password || !role) {
			return res
				.status(400)
				.send({ error: "name or password or email or role no exists" });
		}
		if (await User.findOne({ email: email })) {
			return res
				.status(400)
				.send({ error: "User already exits, Go to Login Page" });
		}
		const user = await User.create({
			name,
			email,
			password: bcrypt.hashSync(password, 6),
			role,
		});
		const jwt = JWT.sign({ name, email, role }, "meow");

		return res
			.cookie("jwt", jwt, { httpOnly: true, secure: false, sameSite: "lax" })
			.send();
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}
export async function me(req: Request, res: Response) {
	try {
		if (!req.user) {
			return res.status(401).send({ error: "Not authenticated" });
		}
		const user = await User.findOne({ email: req.user.email }).select(
			"-password",
		);
		if (!user) {
			return res.status(401).send({ error: "Not authenticated" });
		}
		return res.send({ user });
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}

export async function logout(req: Request, res: Response) {
	return res.clearCookie("jwt").send();
}

export async function login(req: Request, res: Response) {
	console.log("hi");

	try {
		const { email, password, remember } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res
				.status(401)
				.send("You are not registered. Signup to get started.");
		}

		const pass = await bcrypt.compare(password, user.password!);

		if (pass) {
			const jwt = JWT.sign(
				{ name: user.name, email: user.email, role: user.role },
				"meow",
			);
			return res
				.cookie("jwt", jwt, {
					httpOnly: true,
					secure: false,
					sameSite: "lax",
					maxAge: remember ? 30 * 24 * 60 * 60 * 1000 : undefined,
				})
				.send();
		} else {
			return res.status(401).send();
		}
	} catch (err: any) {
		return res.status(500).send({ error: err.message });
	}
}
