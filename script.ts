import mongoose from "mongoose";
import Product from "./server/models/Product";
import init_DB from "./server/utils/DB";

const products = [
	{
		sku: "bangle-001",
		name: "Handcrafted Brass Bangles",
		price: 78,
		description: "Traditional brass bangles handcrafted by local artisans.",
		stock: [{ quantity: 30, type: "brass" }],
		image_url: "bangles.jpg",
	},
	{
		sku: "pottery-001",
		name: "Clay Water Pot",
		price: 45,
		description:
			"Handmade terracotta clay pot, perfect for keeping water cool.",
		stock: [{ quantity: 20, type: "terracotta" }],
		image_url: "clay-pot.jpg",
	},
	{
		sku: "jewelry-001",
		name: "Silver Filigree Earrings",
		price: 120,
		description: "Intricately designed silver filigree earrings.",
		stock: [{ quantity: 15, type: "silver" }],
		image_url: "silver-earrings.jpg",
	},
	{
		sku: "textile-001",
		name: "Handwoven Cotton Saree",
		price: 250,
		description:
			"Handwoven cotton saree with traditional block print patterns.",
		stock: [{ quantity: 10, type: "cotton" }],
		image_url: "cotton-saree.jpg",
	},
	{
		sku: "woodwork-001",
		name: "Carved Wooden Elephant",
		price: 65,
		description: "Hand-carved wooden elephant figurine, a symbol of good luck.",
		stock: [{ quantity: 25, type: "wood" }],
		image_url: "wooden-elephant.jpg",
	},
	{
		sku: "basket-001",
		name: "Bamboo Woven Basket",
		price: 35,
		description: "Eco-friendly bamboo basket woven by skilled craftsmen.",
		stock: [{ quantity: 40, type: "bamboo" }],
		image_url: "bamboo-basket.jpg",
	},
	{
		sku: "painting-001",
		name: "Madhubani Painting",
		price: 150,
		description: "Traditional Madhubani folk art painting on handmade paper.",
		stock: [{ quantity: 12, type: "canvas" }],
		image_url: "madhubani-painting.jpg",
	},
	{
		sku: "leather-001",
		name: "Handstitched Leather Juttis",
		price: 95,
		description: "Handstitched leather juttis with embroidered detailing.",
		stock: [{ quantity: 18, type: "leather" }],
		image_url: "leather-juttis.jpg",
	},
	{
		sku: "clothes-001",
		name: "Embroidered Kurta",
		price: 180,
		description: "Hand-embroidered cotton kurta with traditional motifs.",
		stock: [
			{ quantity: 12, type: "small" },
			{ quantity: 15, type: "medium" },
			{ quantity: 10, type: "large" },
		],
		image_url: "embroidered-kurta.jpg",
	},
	{
		sku: "clothes-002",
		name: "Block Print Dupatta",
		price: 60,
		description: "Handblock printed cotton dupatta with natural dyes.",
		stock: [{ quantity: 25, type: "cotton" }],
		image_url: "block-print-dupatta.jpg",
	},
	{
		sku: "clothes-003",
		name: "Ikat Print Kurti",
		price: 140,
		description: "Handwoven Ikat print kurti with a relaxed fit.",
		stock: [
			{ quantity: 8, type: "small" },
			{ quantity: 14, type: "medium" },
			{ quantity: 9, type: "large" },
		],
		image_url: "ikat-kurti.jpg",
	},
	{
		sku: "clothes-004",
		name: "Handwoven Wool Shawl",
		price: 210,
		description: "Warm handwoven wool shawl with traditional border designs.",
		stock: [{ quantity: 16, type: "wool" }],
		image_url: "wool-shawl.jpg",
	},
];

async function seed() {
	init_DB();
	await mongoose.connection.asPromise();

	for (const product of products) {
		await Product.findOneAndUpdate({ sku: product.sku }, product, {
			upsert: true,
			returnDocument: "after",
			setDefaultsOnInsert: true,
		});
		console.log(`Seeded: ${product.name}`);
	}

	console.log(`Done. Seeded ${products.length} products.`);
	await mongoose.disconnect();
}

seed().catch((err) => {
	console.error(err);
	process.exit(1);
});
