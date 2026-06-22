import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Profile = lazy(() => import("./pages/Profile"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const Shop = lazy(() => import("./pages/Shop"));
const Craftsmen = lazy(() => import("./pages/Craftmen"));

function App() {
	return (
		<>
			<Router>
				<Suspense fallback={<>hi</>}>
					<Navbar></Navbar>
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route path="/cart" element={<Cart></Cart>}></Route>
						<Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
						<Route path="/profile" element={<Profile></Profile>}></Route>
						<Route
							path="/signup"
							element={<Signup isLogin={false}></Signup>}
						></Route>
						<Route
							path="/login"
							element={<Signup isLogin={true}></Signup>}
						></Route>
						<Route path="/about" element={<About></About>}></Route>
						<Route path="/shop" element={<Shop></Shop>}></Route>
						<Route path="/craftsmen" element={<Craftsmen></Craftsmen>}></Route>
					</Routes>
				</Suspense>
			</Router>
		</>
	);
}
export default App;
