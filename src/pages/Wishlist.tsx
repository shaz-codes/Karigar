import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

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

function Wishlist() {
	const base = import.meta.env.VITE_API_URL;

	const user = useAppSelector((state) => state.auth.user);

	const [items, setItems] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchWishlist = async () => {
		try {
			setLoading(true);

			const res = await fetch(`${base}/api/wishlist`, {
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
			fetchWishlist();
		}
	}, [user]);

	const removeProduct = async (sku: string, type: string) => {
		try {
			const res = await fetch(`${base}/api/wishlist`, {
				method: "DELETE",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sku,
					type,
				}),
			});

			if (res.ok) {
				await fetchWishlist();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const addToCart = async (sku: string, type: string) => {
		try {
			const res = await fetch(`${base}/api/cart`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sku,
					type,
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to add to cart");
			}

			alert("Product added to cart");
			await removeProduct(sku, type);
		} catch (err: any) {
			alert(err.message);
		}
	};

	if (!user) {
		return (
			<>
				<div className="flex flex-col items-center justify-center text-center py-32 px-8 min-h-[60vh]">
					<div className="rounded-full p-6 bg-gray-100">
						<Heart className="h-8 w-8"></Heart>
					</div>
					<h1 className="text-2xl font-bold mb-2 mt-4">
						Your wishlist is waiting
					</h1>
					<p className="text-gray-500 mb-8 max-w-sm">
						Please log in to view your wishlist and continue shopping.
					</p>
					<Link to="/login" className="bg-black text-white px-8 py-3 rounded ">
						Go to Login
					</Link>
				</div>
			</>
		);
	}
	g;

	if (loading) {
		return <div className="p-16">Loading wishlist...</div>;
	}

	return (
		<div className="p-16">
			<h1 className="font-sam text-3xl font-semibold mb-8">My Wishlist</h1>

			{items.length === 0 ? (
				<div className="border rounded-lg p-10 text-center text-gray-500">
					Your wishlist is empty.
				</div>
			) : (
				<div className="grid grid-cols-4 gap-8">
					{items.map((item) => (
						<div key={item._id} className="flex flex-col">
							<img
								src={item.image_url}
								alt={item.name}
								className="w-full h-80 object-cover rounded"
							/>

							<h2 className="mt-3 font-semibold">{item.name}</h2>

							<p className="text-sm text-gray-600 mb-3">₹{item.price}</p>

							<div className="flex gap-2">
								<button
									onClick={() => removeProduct(item.sku, item.type)}
									className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-pink-300"
								>
									Remove
								</button>

								<button
									onClick={() => addToCart(item.sku, item.type)}
									className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-pink-300"
								>
									Add to Cart
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Wishlist;
