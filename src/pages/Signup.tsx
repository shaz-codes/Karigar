import { LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type AuthProps = {
	isLogin: boolean;
};
function Signup({ isLogin }: AuthProps) {
	const [data, setData] = useState({
		name: "",
		email:"",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password:"",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [remeber, setRememeber] = useState(false);
	const [showpassword,setShow] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			[name]:value,
		}));
		setErrors((prev)=>({
			...prev,
			[name]:"",
		}));
	};

const validate=()=>{
	const newErrors={
		fullname:"",
		
		email:"",
		password:"",
		confirmPassword:"",
	};
	let value=true;
	if(!isLogin && data.name)
}

	return (
		<>
			<div className="flex py-24 px-48 bg-[#F9F9F9] ">
				<div className="flex-1 bg-[#1E1E2D] w-1/2 min-h-full hidden xl:flex flex-col justify-center items-center gap-6 px-8">
					<h1 className="text-3xl text-white font-bold">KARIGAR</h1>

					<p className="text-white text-center">
						From the Villages of India to the World — Preserving Art, Empowering
						Artisans.
					</p>
				</div>

				<div className="bg-white xl:w-1/2 w-full h-full p-16 flex flex-col gap-8">
					<h1 className="text-3xl text-black">
						{isLogin ? "Welcome Back" : "Create Account"}
					</h1>
					<p>
						{isLogin
							? "Please enter your details to sign in."
							: "Please enter your details to create an account"}
					</p>

					{!isLogin && (
						<label className="flex flex-col">
							Full Name
							<input
								type="text"
								placeholder="John Doe"
								className="border border-gray-200 p-4 bg-[#F9F9F9] h-14"
							></input>
						</label>
					)}

					<label className="flex flex-col">
						Email Address
						<input
							type="email"
							placeholder="name@domain.com"
							className=" border border-gray-200 p-4 bg-[#F9F9F9] h-14"
						></input>
					</label>

					<label className="flex flex-col">
						<div className="flex justify-between">
							<p>Password</p>
							{isLogin && (
								<button className="font-bold">Forgot password?</button>
							)}
						</div>
						<input
							type="password"
							placeholder="••••••••"
							className=" border border-gray-200 p-4 bg-[#F9F9F9] h-14"
						></input>
					</label>

					{!isLogin && (
						<label className="flex flex-col">
							Confirm Password
							<input
								type="password"
								placeholder="••••••••"
								className="border border-gray-200 p-4 bg-[#F9F9F9] h-14"
							/>
						</label>
					)}

					<button className="bg-black text-white h-15">
						{isLogin ? "LOG IN" : "SIGN UP"}
					</button>
					<div className="flex items-center gap-2 px-2">
						<div className="flex-1 border border-gray-400"></div>
						<p className="text-gray-500 py-8 h-20 flex items-center">
							OR CONTINUE WITH
						</p>
						<div className="flex-1 border border-gray-400"></div>
					</div>
					<div className="flex gap-6 h-11 justify-center">
						<button className="border border-gray-200 py-3 px-13">
							Google
						</button>
						<button className="border border-gray-200 py-3 px-13">Apple</button>
					</div>
					<div className="flex justify-center">
						<p>
							{isLogin ? "Don't have an account?" : "Already have an account?"}
						</p>

						<Link to={isLogin ? "/signup" : "/login"}>
							{isLogin ? "Sign up" : "Log in"}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
export default Signup;
