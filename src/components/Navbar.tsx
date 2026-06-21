import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

function Navbar() {
	const a = useLocation();
	console.log(a);
	if (a.pathname === "/signup" || a.pathname === "/login") {
		return <></>;
	}

	return (
		<>
			{a.pathname === "/" && (
				<div className="bg-black text-center py-4 text-white">
					Weekend Sale Buy NOW!!!!
				</div>
			)}
			<nav className="bg-gray-100 flex items-center px-16 justify-between sticky top-0 z-50">
				<div className="h-14 flex items-center gap-9">
					<h2 className="text-4xl font-bold font-sam uppercase leading-14 tracking-tighter">
						Karigar
					</h2>

					<div className="h-6 flex text-gray-500 pl-8 gap-6">
						<button>Shop</button>
						<button>About</button>
						<button>Craftsmen</button>
					</div>
				</div>

				<div className=" h-13.5 flex items-center gap-8">
					<div className=" flex justify-around bg-white rounded-2xl p-2">
						<input
							type="text"
							placeholder="Search Handcrafts..."
							className="w-45"
						/>
						<Search></Search>
					</div>

					<div className="flex gap-2">
						<Link to={"wishlist"}>
							<Heart></Heart>
						</Link>
						<Link to={"cart"}>
							<ShoppingCart></ShoppingCart>
						</Link>
						<Link to={"profile"}>
							<User></User>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
