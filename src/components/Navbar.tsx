import { Heart, LogOut, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUser } from "../features/auth/authSlice";

function Navbar() {
	const a = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth.user);

	const [search, setSearch] = useState("");
	const navItems = [
		{
			name: "Shop",
			path: "/shop",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Craftsmen",
			path: "/craftsmen",
		},
	];
	const offers = [
		"Weekend Sale - Up to 50% OFF",
		"Free Shipping on Orders Above ₹999",
		"Support Indian Artisans",
	];
	const offer = offers[new Date().getDate() % offers.length];
	const handleSearch = () => {
		if (!search.trim()) return;
		navigate(`/shop?search=${encodeURIComponent(search)}`);
	};
	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};
	const handleLogout = async () => {
		await dispatch(logoutUser());
		navigate("/login");
	};
	if (a.pathname === "/signup" || a.pathname === "/login") {
		return <></>;
	}
	return (
		<>
			{a.pathname === "/" && (
				<div className="bg-black text-center py-4 text-white">{offer}</div>
			)}
			<nav className="bg-gray-100 flex items-center px-16 justify-between sticky top-0 z-50">
				<div className="flex items-center gap-12">
					<Link
						to="/"
						className="text-4xl font-bold font-sam uppercase tracking-tight"
					>
						KARIGAR
					</Link>

					<div className="h-6 flex text-gray-500 pl-8 gap-6">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`transition duration-200 ${
									location.pathname === item.path
										? "text-black font-semibold border-b-2 border-black"
										: "text-gray-500 hover:text-black"
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>

				<div className=" h-13.5 flex items-center gap-8">
					<div className=" flex justify-around bg-white rounded-2xl p-2">
						<input
							type="text"
							placeholder="Search Handcrafts..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={handleKey}
							className="outline-none bg-transparent w-52"
						/>
						<Search
							className="cursor-pointer hover:text-gray-700"
							onClick={handleSearch}
						></Search>
					</div>

					<div className="flex gap-2 items-center">
						<Link to={"wishlist"}>
							<Heart></Heart>
						</Link>
						<Link to={"cart"}>
							<ShoppingCart></ShoppingCart>
						</Link>
						{user ? (
							<>
								<Link to={"profile"}>
									<User></User>
								</Link>
								<button
									onClick={handleLogout}
									title="Logout"
									className="cursor-pointer hover:text-gray-700"
								>
									<LogOut></LogOut>
								</button>
							</>
						) : (
							<Link to={"login"}>
								<User></User>
							</Link>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
