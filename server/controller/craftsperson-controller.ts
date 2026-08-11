import Express from "express";
import { getPage } from "../service/craftsperson";

const app = Express();
app.get("", getPage);
export default app;
