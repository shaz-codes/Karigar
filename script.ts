import Product from "./server/models/Product";
import init_DB from "./server/utils/DB";

init_DB();
Product.create({
	sku: "product1",
	name: "product1",
	price: 78,
	stock: [{ quantity: 30, type: "product1" }],
	image_url: "bangles.jpg",
});
