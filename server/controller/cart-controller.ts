import Express from "express";
import { removeProduct, getCart, addProduct } from "../service/cart";
const app = Express();

app.delete("", removeProduct);
app.get("", getCart);
app.post("", addProduct);

export default app;
