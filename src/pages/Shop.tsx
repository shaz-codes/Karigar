import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";

function Shop() {
	type Product = {
		_id: string;
		sku: string;
		name: string;
		description: string;
		price: number;
		image_url: string;
		type: string;
		quantity: number;
		stock: {
			quantity: number;
			type: string;
		}[];
	};
	const [items, setItems] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const base = import.meta.env.VITE_API_URL;
	const user = useAppSelector((state) => state.auth.user);

	const fetchShop = async () => {
		try {
			const res = await fetch(`${base}/api/products`, {
				credentials: "include",
			});
			if (!res.ok) {
				throw new Error("Failed to fetch wishlist");
			}
			const data: Product[] = await res.json();

			setItems(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user) {
			fetchShop();
		}
	}, [user]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[70vh]">
				Loading...
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-8 py-10">
			{/* Breadcrumb */}

			<p className="text-xs text-gray-500 mb-5">Home / Shop All</p>

			{/* Header */}

			<div className="flex justify-between items-end mb-10">
				<div>
					<h1 className="text-4xl font-semibold">New Arrivals</h1>

					<p className="text-gray-500 mt-2 max-w-xl">
						Carefully curated essentials designed for the modern lifestyle.
					</p>
				</div>

				<div className="flex gap-6 items-center">
					<span className="text-sm text-gray-500">
						Showing {items.length} Products
					</span>

					<button className="border px-4 py-2 flex items-center gap-2 text-sm">
						Sort by: Newest
						<ChevronDown size={16} />
					</button>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-10">
				{/* Sidebar */}

				<aside className="col-span-3">
					{/* Category */}

					<div className="mb-10">
						<h2 className="font-semibold mb-4 uppercase text-sm">Category</h2>

						<div className="space-y-3 text-sm">
							<label className="flex gap-2">
								<input type="checkbox" />
								Apparel (12)
							</label>

							<label className="flex gap-2">
								<input type="checkbox" />
								Accessories (8)
							</label>

							<label className="flex gap-2">
								<input type="checkbox" />
								Home Decor (6)
							</label>

							<label className="flex gap-2">
								<input type="checkbox" />
								Workspace (4)
							</label>
						</div>
					</div>

					{/* Price */}

					<div className="mb-10">
						<h2 className="font-semibold uppercase text-sm mb-4">Price</h2>

						<input type="range" className="w-full" />

						<div className="flex justify-between text-xs text-gray-500 mt-2">
							<span>$0</span>
							<span>$1000+</span>
						</div>
					</div>

					{/* Colors */}

					<div className="mb-10">
						<h2 className="font-semibold uppercase text-sm mb-4">Color</h2>

						<div className="flex gap-3">
							{["#000", "#fff", "#bbb", "#666", "#999"].map((color) => (
								<div
									key={color}
									className="w-6 h-6 rounded-full border"
									style={{
										background: color,
									}}
								/>
							))}
						</div>
					</div>

					{/* Sizes */}

					<div className="mb-10">
						<h2 className="font-semibold uppercase text-sm mb-4">Size</h2>

						<div className="grid grid-cols-3 gap-2">
							{["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
								<button
									key={size}
									className="border py-2 text-sm hover:bg-black hover:text-white"
								>
									{size}
								</button>
							))}
						</div>
					</div>

					<button className="w-full border py-3 hover:bg-black hover:text-white">
						Clear Filters
					</button>
				</aside>

				{/* Products */}

				<section className="col-span-9">
					<div className="grid grid-cols-4 gap-7">
						{items.map((product) => (
							<div key={product._id} className="group">
								<div className="relative overflow-hidden bg-gray-100">
									<img
										src={product.image_url}
										alt={product.name}
										className="h-72 w-full object-cover group-hover:scale-105 transition duration-300"
									/>
								</div>

								<h3 className="mt-4 text-sm font-medium">{product.name}</h3>

								<p className="uppercase text-xs text-gray-500 mt-1">
									{product.type}
								</p>

								<p className="mt-2 font-semibold">₹{product.price}</p>
							</div>
						))}
					</div>

					{/* Pagination */}

					<div className="flex justify-center items-center gap-2 mt-16">
						<button className="border w-9 h-9 flex items-center justify-center">
							<ChevronLeft size={18} />
						</button>

						<button className="w-9 h-9 bg-black text-white">1</button>

						<button className="border w-9 h-9">2</button>

						<button className="border w-9 h-9">3</button>

						<span className="px-2">...</span>

						<button className="border w-9 h-9">12</button>

						<button className="border w-9 h-9 flex items-center justify-center">
							<ChevronRight size={18} />
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Shop;
