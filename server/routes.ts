import Express from "express";
import UserController from "./controller/user-controller";
import WishlistController from "./controller/wishlist-controller";
import CartController from "./controller/cart-controller";
import ProductController from "./controller/product-controller";

const app = Express();

app.use("/user", UserController);
app.use("/wishlist", WishlistController);
app.use("/cart", CartController);
app.use("/products", ProductController);

export default app;
