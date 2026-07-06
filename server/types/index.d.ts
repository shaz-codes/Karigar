import "express";

declare global {
	namespace Express {
		interface Request {
			user?: any; // Replace 'any' with your JWT payload type
		}
	}
}

export {};
