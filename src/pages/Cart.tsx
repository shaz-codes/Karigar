import { useState } from "react";

function Cart() {
	const [items, setItems] = useState([
		{
			id: 1,
			title: "Jaipur Bangles",
			category: "Handcrafted clay bangles",
			price: 9,
			quantity: 1,
			image: "bangles.jpg",
		},
	]);

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
							<div key={item.id} className="border rounded-lg p-5 flex gap-5">
								<img
									src={item.image}
									alt={item.title}
									className="w-28 h-28 object-cover rounded"
								/>

								<div className="flex-1">
									<h2 className="text-xl font-semibold">{item.title}</h2>

									<p className="text-gray-500">{item.category}</p>

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
	);
}
export default Cart;
