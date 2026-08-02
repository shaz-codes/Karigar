import Express from "express";
import { login, logout, me, Signup } from "../service/authentication";

const app = Express();

app.post("/signup", Signup);
app.post("/login", login);
app.get("/me", me);
app.post("/logout", logout);
export default app;
