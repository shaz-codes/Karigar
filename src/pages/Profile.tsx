import { ClipboardPen, CreditCard, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

function Product() {
	return (
		<>
			<div className="flex gap-6 px-16  bg-[#F9F9F9] pt-4">
				<div className="w-43 gap-8 flex ">
					<div className="flex flex-col  gap-2">
						<h1 className="font-sam px-2 h-8">Account</h1>
						<Sec logo={<User></User>} head="Profile"></Sec>
						<Sec logo={<ClipboardPen></ClipboardPen>} head="Orders"></Sec>
						<Sec logo={<CreditCard></CreditCard>} head="Payments"></Sec>
						<Sec logo={<MapPin></MapPin>} head="Address"></Sec>
						<div className="pt-8 px-2 text-red-500 h-19 ">
							<Link to={"/signup"}>Signup</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full gap-16">
					<div className="bg-white w-full p-8 flex flex-col gap-8">
						<div className="flex w-full gap-3">
							<img src="pot1.jpg" alt="pp" className="h-24 w-24"></img>
							<div className="flex justify-between items-center w-full">
								<div>
									<h1 className="font-sam font-semibold leading-10 text-xl">
										Julianne Sterling
									</h1>
									<h2 className="font-sam text-gray-500">
										Member since September 2023
									</h2>
								</div>
								<div className="rounded-xl bg-black text-white px-3 py-2">
									Edit Profile
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="w-1/2">
								<h1 className="text-gray-500 capitalize ">Email Address</h1>
								<h2 className="text-lg font-medium">
									julianne.s@lumina-aesthetic.com
								</h2>
							</div>
							<div className="w-1/2">
								<h1 className="text-gray-500 capitalize ">Phone Number</h1>
								<h2 className="text-lg font-medium">+1 (555) 012-3456</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Sec({ logo, head }: { logo: React.ReactNode; head: string }) {
	return (
		<>
			<div className="flex g-3 h-14 w-43">
				<div className="px-2 h-2">{logo}</div>
				<div>{head}</div>
			</div>
		</>
	);
}

export default Product;
