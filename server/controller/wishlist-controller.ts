import Express from "express";
import { GetWishlist, AddWishlist, RemoveProduct } from "../service/WishList";

const app = Express();
app.get("/", GetWishlist);
app.post("/", AddWishlist);
app.delete("/RemoveProduct", RemoveProduct);

export default app;
