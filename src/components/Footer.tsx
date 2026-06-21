import { ArrowLeft, ArrowRight } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer className="h-100  bg-gray-100 ">
				<div className="flex gap-16 py-16 justify-between px-4 items-start">
					<Sec
						head="KARIGAR"
						text="Redefining luxury through minimalist design and artisanal excellence since 2026."
					></Sec>
					<Sec head="SUPPORT" text="">
						<Link to={"/"}>Contact</Link>
						<Link to={"/"}>Shipping & Returns</Link>
						<Link to={"/"}>Size Guide</Link>
						<Link to={"/"}>FAQ</Link>
					</Sec>
					<Sec head="COMPANY" text="">
						<Link to={"/"}>About</Link>
						<Link to={"/"}>Journal</Link>
						<Link to={"/"}>Privacy Policy</Link>
						<Link to={"/"}>Terms of Service</Link>
					</Sec>
					<Sec head="NEWSLETTER" text="join for exclusive access and stories">
						<div className="relative">
							<input
								placeholder="Email Address"
								type="url"
								className="border-b"
							></input>
							<ArrowRight className="absolute right-0 top-0 bottom-0"></ArrowRight>
						</div>
					</Sec>
				</div>
				<div>
					<p className="px-4">© 2026 LUMINA. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}
function Sec({
	head,
	text,
	children,
}: {
	head: string;
	text: string;
	children?: React.ReactNode;
}) {
	return (
		<>
			<div className="flex flex-col gap-2 w-1/4">
				<h1>{head}</h1>
				<p>{text}</p>
				{children}
			</div>
		</>
	);
}
export default Footer;
