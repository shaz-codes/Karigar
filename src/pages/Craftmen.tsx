function Craftsmen() {
	const artisans = [
		{
			id: 1,
			name: "Master Weaver Anant",
			image: "/images/anant.jpg",
			location: "Handloom",
			craft: "Silk Weaving",
			product: "Heritage Preservation",
			description:
				"A third-generation weaver from Varanasi, Anant has spent over 40 years perfecting the art of handloom silk and preserving traditional weaving techniques.",
		},
		{
			id: 2,
			name: "Meera Devi",
			image: "/images/meera.jpg",
			location: "Rajasthan",
			craft: "Blue Pottery",
			product: "Handcrafted Pottery",
			description:
				"Based in Jaipur, Meera revives centuries-old blue pottery techniques while creating contemporary handcrafted designs.",
		},
		{
			id: 3,
			name: "Sana Khan",
			image: "/images/sana.jpg",
			location: "Lucknow",
			craft: "Chikankari",
			product: "Fine Muslin",
			description:
				"Specializing in white-on-white Chikankari, Sana brings intricate embroidery traditions to a global audience.",
		},
	];
	return (
		<>
			<div className="bg-[#faf8f6]">
				<section className="max-w-5xl mx-auto text-center py-20 px-6">
					<p className="text-xs tracking-[0.3em] uppercase text-gray-500">
						The Human Element
					</p>

					<h1 className="mt-4 text-5xl font-bold font-sam">
						The Hands Behind the Heritage
					</h1>

					<p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-7">
						At KARIGAR, we believe every piece tells a story. We bridge the gap
						between ancient traditions and modern homes while celebrating the
						artisans preserving these crafts.
					</p>
				</section>

				<section className="max-w-7xl mx-auto px-6 pb-20">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{artisans.map((artisan) => (
							<div
								key={artisan.id}
								className="bg-white shadow-sm hover:shadow-lg transition rounded"
							>
								<img
									src={artisan.image}
									alt={artisan.name}
									className="w-full h-96 object-cover"
								/>

								<div className="p-6">
									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-2 py-1 text-xs border rounded-full">
											{artisan.location}
										</span>

										<span className="px-2 py-1 text-xs border rounded-full">
											{artisan.craft}
										</span>

										<span className="px-2 py-1 text-xs border rounded-full">
											{artisan.product}
										</span>
									</div>

									<h2 className="text-2xl font-semibold">{artisan.name}</h2>

									<p className="mt-3 text-gray-600 leading-7">
										{artisan.description}
									</p>

									<button className="mt-8 font-medium uppercase tracking-wide hover:underline">
										View Collection →
									</button>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="bg-[#11101b] text-white py-20">
					<div className="max-w-4xl mx-auto text-center px-6">
						<h2 className="text-4xl font-semibold">Support the Craft</h2>

						<p className="mt-4 text-gray-300">
							Every purchase directly supports these artisans and ensures their
							traditions continue to thrive for generations.
						</p>

						<div className="mt-10 flex justify-center gap-4 flex-wrap">
							<button className="bg-white text-black px-8 py-3">
								Explore the Collection
							</button>

							<button className="border border-gray-500 px-8 py-3">
								Our Impact Story
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
export default Craftsmen;
