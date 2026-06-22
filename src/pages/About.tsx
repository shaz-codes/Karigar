import { LeafIcon, User, Users, WandSparkles } from "lucide-react";
import type React from "react";
import type { ReactNode } from "react";

function About() {
	return (
		<>
			<section>
				<div className="bg-[url(/room2.png)]  h-250 px-16 bg-no-repeat bg-cover pb-4">
					<div className="flex flex-col justify-center items-center text-[#ffffff] h-full gap-2">
						<h1 className="text-4xl font-bold font-sam">KARIGAR</h1>
						<h2 className="text-3xl font-sam">
							Celebrating the Hands Behind India's Timeless Art.
						</h2>
					</div>
				</div>
			</section>
			<section>
				<div className="py-4">
					<h1 className="text-3xl font-bold text-center font-sam">About</h1>
				</div>
			</section>
			<section className="px-36 py-8">
				<div className="flex gap-6">
					<img src="/cloth.png" className="w-full h-126"></img>

					<div className=" flex justify-center w-full">
						<p className="text-xl">
							Karigar was born from a simple yet urgent realization: while the
							world celebrates craftsmanship, the hands that create it are often
							forgotten. Across India, generations of artisans have preserved
							extraordinary traditions through weaving, pottery, wood carving,
							embroidery, painting, and countless other art forms. These crafts
							are more than products—they are stories, identities, and living
							pieces of our culturalbg-no-repeat heritage passed down through
							generations. Yet in a world driven by mass production and fast
							fashion, many of these traditions are slowly fading away. While
							Indian designs and craftsmanship continue to inspire products
							across the globe, the artisans and communities behind them often
							receive little recognition for their contributions. Karigar exists
							to change that. Our platform connects skilled craftsmen directly
							with people who value authenticity, culture, and handmade
							excellence. Every product showcased on Karigar represents not only
							exceptional artistry but also the dedication, history, and
							heritage of the people behind it. We believe that preserving
							culture requires more than admiration—it requires participation.
							By supporting handcrafted products, customers become part of a
							movement that empowers artisans, sustains traditional livelihoods,
							and ensures that India's rich artistic legacy continues to thrive
							for generations to come. Because when an artisan thrives, an
							entire heritage lives on.
						</p>
					</div>
				</div>
			</section>
			<section className="p-16 gap-16 h-147 flex flex-col">
				<div className="flex justify-center items-center gap-4 h-14">
					<h1 className="font-sam font-bold text-2xl p-">Values We Live By</h1>
				</div>
				<div className="flex gap-6 h-84">
					<Sec
						head="Sustainability"
						Logo={<WandSparkles></WandSparkles>}
						para="We define quality by the depth of detail.
								Each product undergoes a rigorous
								selection process to ensure it honors its
								traditional roots while meeting global
								standards of luxury."
					></Sec>
					<Sec
						head="Craftsmanship"
						Logo={<LeafIcon></LeafIcon>}
						para="Our footprint is as important as our
								legacy. From natural dyes to
								compostable packaging, we prioritize
								materials that nourish the earth rather
								than deplete it."
					></Sec>
					<Sec
						head="Community"
						Logo={<Users></Users>}
						para="We define quality by the depth of detail.
								Each product undergoes a rigorous
								selection process to ensure it honors its
								traditional roots while meeting global
								standards of luxury."
					></Sec>
				</div>
			</section>
		</>
	);
}

function Sec({
	head,
	Logo,
	para,
}: {
	head: string;
	Logo: React.ReactNode;
	para: string;
}) {
	return (
		<>
			<div className="flex gap-6 h-86 p-10">
				<div>
					<div className="flex justify-center items-center pb-6">{Logo}</div>
					<h1 className="flex justify-center items-center pb-4">{head}</h1>
					<p className="flex justify-center items-center px-1">{para}</p>
				</div>
			</div>
		</>
	);
}

export default About;
