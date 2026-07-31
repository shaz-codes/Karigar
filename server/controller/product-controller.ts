import Express from "express";
const app = Express();
import { getProducts } from "../service/products";
app.get(" ", getProducts);
export default app;
