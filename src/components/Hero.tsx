function Hero() {
	return (
		<>
			<section className="bg-[url(/screen.png)] w-full h-150 xl:h-200 bg-cover bg-no-repeat bg-center">
				<div className="flex flex-col justify-center items-center h-full gap-2">
					<h1 className="text-5xl text-[#F9F9F9]">Karigar</h1>
					<p className="text-3xl text-[#F9F9F9]">
						Rooted in Tradition. Crafted for Tomorrow.
					</p>
				</div>
			</section>
			<section className="px-0 py-16 gap-8 flex flex-col">
				<div>
					<h3 className="text-center font-sam">SELECTED PIECES</h3>
					<h1 className="text-center text-3xl font-sam font-bold">
						Trending Now
					</h1>
				</div>
				<div className="flex px-16 py-0 gap-6">
					<HeroProduct
						image="/pot1.jpg"
						cat="Pottery"
						name="Matka"
						price="$20"
					></HeroProduct>
					<HeroProduct
						image="/bangles.jpg"
						cat="Accessory"
						name="Clay Bangles"
						price="$10"
					></HeroProduct>
					<HeroProduct
						image="/Chikankari.jpg"
						cat="Clothing"
						name="Fabric"
						price="$20"
					></HeroProduct>
					<HeroProduct
						image="/pot2.jpg"
						cat="Pottery"
						name="Vase"
						price="$15"
					></HeroProduct>
				</div>
			</section>
			<section className="py-16">
				<div className="flex gap-9 px-16 ">
					<div className="bg-[url(/shawl.png)] w-full h-135 justify-center items-center bg-no-repeat relative">
						<div className="bg-black font-sam text-white absolute -bottom-3 -right-6">
							<p className="flex justify-center items-center p-3">
								"Quality is the result of intention"
							</p>
						</div>
					</div>
					<div className="flex gap-8 flex-col justify-center px">
						<p>Our Philosphy</p>
						<h1 className="text-2xl font-bold">
							Crafted by INdia's finest craftsmen
						</h1>
						<p>
							At KARIGAR, we believe in the power of conscious consumption. Each
							piece in our collection is meticulously developed in our artisanal
							Indian workshops using the finest sustainable materials.
						</p>
						<br />
						<p className="font-semibold ">Read Our Story</p>
					</div>
				</div>
			</section>
		</>
	);
}
function HeroProduct({
	image,
	cat,
	name,
	price,
}: {
	image: string;
	cat: string;
	name: string;
	price: string;
}) {
	return (
		<>
			<div className="gap-4 h-105.25">
				<div className="relative overflow-hidden group">
					<img
						src={image}
						className=" hover:scale-110 ease-in transition duration-350"
					></img>
					<div className="text-white bg-black h-10 flex justify-center items-center absolute -bottom-7 left-4 right-4 group-hover:bottom-2 transition-all ease-in duration-300">
						<button>ADD TO CART</button>
					</div>
				</div>
				<div className="flex justify-between font-sam">
					<div className="flex flex-col">
						<p className="text-xl">{name}</p>
						<p className="text-gray-500">{cat}</p>
					</div>
					<h3>{price}</h3>
				</div>
			</div>
		</>
	);
}
export default Hero;
