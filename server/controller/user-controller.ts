import Express from "express";
import { login, Signup } from "../service/authentication";

const app = Express();

app.post("/signup", Signup);
app.post("/login", login);
export default app;
