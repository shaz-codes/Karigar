import Express from "express";
import { getProducts } from "../service/products";

const app = Express();
app.get("", getProducts);

export default app;
