import Express from "express";
import {
	removeProduct,
	getCart,
	addProduct,
	editQuantity,
} from "../service/cart";
const app = Express();

app.delete("", removeProduct);
app.get("", getCart);
app.post("", addProduct);
app.put("", editQuantity);

export default app;
