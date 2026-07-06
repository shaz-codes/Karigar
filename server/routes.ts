import Express from "express";
import UserController from "./controller/user-controller";
const app = Express();
app.use("/user", UserController);
export default app;
