import { useState } from "react";

function Wishlist() {
	const [items, setItems] = useState([
		{
			id: 1,
			name: "Hand-Woven Pashmina Shawl",
			price: 45000,
			img: "shawl.png",
		},
		{
			id: 2,
			name: "Hand-Woven Pashmina Shawl",
			price: 45000,
			img: "cloth.png",
		},
		{
			id: 3,
			name: "Hand-Woven Pashmina Shawl",
			price: 45000,
			img: "pot2.jpg",
		},
		{
			id: 5,
			name: "Hand-Woven Pashmina Shawl",
			price: 45000,
			img: "pot1.jpg",
		},
		{
			id: 4,
			name: "Hand-Woven Pashmina Shawl",
			price: 45000,
			img: "Chikankari.jpg",
		},
	]);

	return (
		<>
			<div className="p-16">
				<h1 className="font-sam text-3xl font-semibold mb-8">My Wishlist</h1>

				{items.length === 0 ? (
					<div className="border rounded-lg p-10 text-center text-gray-500">
						Your wishlist is empty.
					</div>
				) : (
					<div className="grid grid-cols-4 gap-8">
						{items.map((item) => (
							<div key={item.id} className="flex flex-col">
								<img
									src={item.img}
									alt={item.name}
									className="w-full h-80 object-cover rounded"
								/>

								<h1 className="mt-3 font-semibold">{item.name}</h1>

								<p className="text-sm text-gray-600 mb-3">₹{item.price}</p>

								<div className="flex gap-2">
									<button className="flex-1 px-4 py-2 bg-black text-white rounded hover:bg-pink-300">
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
