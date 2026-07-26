import Express from "express";
import UserController from "./controller/user-controller";
import WishlistController from "./controller/wishlist-controller";

const app = Express();

app.use("/user", UserController);
app.use("/wishlist", WishlistController);

export default app;
