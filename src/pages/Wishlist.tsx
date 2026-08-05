import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

type Product = {
	sku: string;
	stock: {
		quantity: number;
		type: string;
	}[];
	id: string;
	name: string;
	description: string;
	price: number;
	quantity: number;
	image_url: string;
	type: string;
};

function Wishlist() {
	const base = import.meta.env.VITE_API_URL;
	const user = useAppSelector((state) => state.auth.user);
	const [items, setItems] = useState<Array<Product>>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchWishlist();
	}, []);

	const fetchWishlist = async () => {
		fetch(`${base}/api/wishlist`, {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				setItems(data.map((Data: any) => ({ ...Data, id: Data._id })));
				console.log(data);
			});
	};
	if (loading) {
		return <div className="p-16">Loading wishlist...</div>;
	}

	const removeProduct = async (sku: string, type: string) => {
		const res = await fetch(`${base}/api/wishlist`, {
			credentials: "include",
			method: "DELETE",
			body: JSON.stringify({ sku, type }),
			headers: { "content-type": "application/json" },
		});
		if (res.ok) {
			fetchWishlist();
		}
	};

	return (
		<>
			<div className="p-16">
				<h1 className="font-sam text-3xl font-semibold mb-8">My Wishlist</h1>

				{user ? (
					<div className="border rounded-lg p-10 text-center text-gray-500">
						Your wishlist is empty.
					</div>
				) : (
					<div className="grid grid-cols-4 gap-8">
						{items.map((item) => (
							<div key={item.id} className="flex flex-col">
								<img
									src={item.image_url}
									alt={item.name}
									className="w-full h-80 object-cover rounded"
								/>

								<h1 className="mt-3 font-semibold">{item.name}</h1>

								<p className="text-sm text-gray-600 mb-3">₹{item.price}</p>

								<div className="flex gap-2">
									<button
										onClick={() => removeProduct(item.sku, item.type)}
										className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-pink-300"
									>
										Remove
									</button>

									<button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-pink-300">
										Add to Cart
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default Wishlist;
