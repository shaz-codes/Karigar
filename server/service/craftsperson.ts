import { Request, Response } from "express";
import craftsPerson from "../models/Craftsperson";

export async function getPage(req: Request, res: Response) {
	try {
		const person = await craftsPerson.find();
		res.status(200).send(person);
	} catch (err: any) {
		res.status(500).send({ error: err.message });
	}
}
