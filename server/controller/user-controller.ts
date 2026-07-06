import Express from "express";
import { Signup } from "../service/authentication";

const app = Express();

app.post("/signup", Signup);
export default app;
