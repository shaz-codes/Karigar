import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";

type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	quantity: number;
	image_url: string;
};
function Cart() {
	const base = import.meta.env.VITE_API_URL;
	const user = useAppSelector((state) => state.auth.user);
	const [items, setItems] = useState<Array<Product>>([]);
	useEffect(() => {
		fetch(`${base}/api/cart`)
			.then((res) => res.json())
			.then((data) => {
				setItems(data.map((v) => ({ ...v, id: v._id })));
			});
	}, []);

	const [quantity, setQuantity] = useState(1);

	const increment = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const removeItem = (id: number) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<>
			{user ? (
				<>
					<div className="py-20 px-8">
						<h1 className="text-3xl font-bold mb-8">Your Cart</h1>

						<div className="flex gap-8">
							<div className="flex-1 flex flex-col gap-6">
								{items.length === 0 ? (
									<div className="border rounded-lg p-10 text-center text-gray-500">
										Your cart is empty.
									</div>
								) : (
									items.map((item) => (
										<div
											key={item.id}
											className="border rounded-lg p-5 flex gap-5"
										>
											<img
												src={item.image_url}
												alt={item.name}
												className="w-28 h-28 object-cover rounded"
											/>

											<div className="flex-1">
												<h2 className="text-xl font-semibold">{item.name}</h2>

												<p className="text-gray-500">{item.description}</p>

												<div className="mt-5 flex items-center gap-3">
													<button
														onClick={decrement}
														className="w-8 h-8 border rounded hover:bg-gray-100"
													>
														-
													</button>

													<span className="w-6 text-center">{quantity}</span>

													<button
														onClick={increment}
														className="w-8 h-8 border rounded hover:bg-gray-100"
													>
														+
													</button>
												</div>
											</div>

											<div className="flex flex-col justify-between items-end">
												<p className="font-semibold text-lg">
													${(item.price * item.quantity).toFixed(2)}
												</p>

												<button
													onClick={() => removeItem(item.id)}
													className="text-red-500 hover:text-red-700"
												>
													Remove
												</button>
											</div>
										</div>
									))
								)}
							</div>

							<div className="w-80 border rounded-lg p-6 shadow-sm h-fit">
								<h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

								<div className="space-y-4">
									<div className="flex justify-between">
										<span>Subtotal</span>
										<p>$9</p>
									</div>

									<div className="flex justify-between">
										<span>Shipping</span>
										<p>$9</p>
									</div>

									<div className="flex justify-between">
										<span>Tax</span>
										<p>$8</p>
									</div>

									<hr />

									<div className="flex justify-between text-lg font-bold">
										<span>Total</span>
										<p>$26</p>
									</div>
								</div>

								<button
									disabled={items.length === 0}
									className="mt-8 w-full bg-black text-white py-3 rounded hover:bg-gray-900 disabled:bg-gray-400"
								>
									Proceed to Checkout
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="flex flex-col items-center justify-center text-center py-32 px-8 min-h-[60vh]">
					<div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-10 h-10 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.994-4.684 2.602-7.124a1.125 1.125 0 0 0-1.087-1.386H5.106M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>
					</div>

					<h1 className="text-2xl font-bold mb-2">Your cart is waiting</h1>
					<p className="text-gray-500 mb-8 max-w-sm">
						Please log in to view your cart and continue shopping.
					</p>

					<Link
						to="/login"
						className="bg-black text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors"
					>
						Go to Login
					</Link>
				</div>
			)}
		</>
	);
}
export default Cart;
