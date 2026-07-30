import Express from "express";
import UserController from "./controller/user-controller";
import WishlistController from "./controller/wishlist-controller";
import CartController from "./controller/cart-controller";

const app = Express();

app.use("/user", UserController);
app.use("/wishlist", WishlistController);
app.use("/cart", CartController);

export default app;
