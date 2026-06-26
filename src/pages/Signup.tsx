import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type AuthProps = {
	isLogin: boolean;
};
function Signup({ isLogin }: AuthProps) {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [remember, setRemember] = useState(false);
	const [showpassword, setShow] = useState(false);
	console.log(data);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
		setErrors((prev) => ({
			...prev,
			[name]: "",
		}));
	};

	const validate = () => {
		const newErrors = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
		let valid = true;
		if (!isLogin && data.name.trim() === "") {
			newErrors.name = "Full name is required";
			valid = false;
		}
		if (!/\S+@\S+\.\S+/.test(data.email)) {
			newErrors.email = "Enter a valid email";
			valid = false;
		}
		if (data.password.length < 6) {
			newErrors.password = "Pasword must be of at least 6 characters";
			valid = false;
		}
		if (!isLogin && data.password !== data.confirmPassword) {
			newErrors.confirmPassword = "Password dosen't match";
			valid = false;
		}
		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;
		try {
			setLoading(true);
			if (isLogin) {
				console.log("login", data);
			} else {
				console.log("signup", data);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

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

				<form
					className="bg-white xl:w-1/2 w-full h-full p-16 flex flex-col gap-8"
					onSubmit={handleSubmit}
				>
					<h1 className="text-3xl text-black">
						{isLogin ? "Welcome Back" : "Create Account"}
					</h1>
					<p>
						{isLogin
							? "Please enter your details to log in."
							: "Please enter your details to create an account"}
					</p>
					{!isLogin && (
						<label className="flex flex-col">
							Full Name
							<input
								type="text"
								name="name"
								value={data.name}
								onChange={handleChange}
								placeholder="Shaz"
								className="border border-gray-200 p-4 bg-[#F9F9F9] h-14"
							></input>
							{errors.name && (
								<span className="text-red-500 text-sm">{errors.name}</span>
							)}
						</label>
					)}

					<label className="flex flex-col">
						Email Address
						<input
							type="email"
							name="email"
							value={data.email}
							onChange={handleChange}
							placeholder="name@domain.com"
							className=" border border-gray-200 p-4 bg-[#F9F9F9] h-14"
						></input>
						{errors.email && (
							<span className="text-red-500 text-sm">{errors.email}</span>
						)}
					</label>

					<label className="flex flex-col">
						<div className="flex justify-between">
							<p>Password</p>
							{isLogin && (
								<button type="button" className="font-bold">
									Forgot password?
								</button>
							)}
							<button
								type="button"
								onClick={() => setShow((prev: any) => !prev)}
							>
								{showpassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</div>
						<input
							type={showpassword ? "text" : "password"}
							name="password"
							value={data.password}
							onChange={handleChange}
							placeholder="••••••••"
							className=" border border-gray-200 p-4 bg-[#F9F9F9] h-14"
						></input>
					</label>

					{!isLogin && (
						<label className="flex flex-col">
							Confirm Password
							<input
								type={showpassword ? "text" : "password"}
								name="confirmPassword"
								value={data.confirmPassword}
								onChange={handleChange}
								placeholder="••••••••"
								className="border border-gray-200 p-4 bg-[#F9F9F9] h-14"
							/>
							{errors.confirmPassword && (
								<span className="text-red-500 text-sm">
									{errors.confirmPassword}
								</span>
							)}
						</label>
					)}
					{isLogin && (
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								checked={remember}
								onChange={(e) => setRemember(e.target.checked)}
							/>
							Remember Me
						</label>
					)}

					<button
						type="submit"
						disabled={loading}
						className={`h-14 rounded text-white transition ${
							loading
								? "bg-gray-500 cursor-not-allowed"
								: "bg-black hover:bg-gray-800"
						}`}
					>
						{loading ? "Please wait..." : isLogin ? "LOG IN" : "SIGN UP"}
					</button>

					<div className="flex items-center gap-2 px-2">
						<div className="flex-1 border border-gray-400"></div>
						<p className="text-gray-500 py-8 h-20 flex items-center">
							OR CONTINUE WITH
						</p>
						<div className="flex-1 border border-gray-400"></div>
					</div>

					<div className="flex gap-6 h-11 justify-center">
						<button type="button" className="border border-gray-200 py-3 px-13">
							Google
						</button>
						<button type="button" className="border border-gray-200 py-3 px-13">
							Apple
						</button>
					</div>
					<div className="flex justify-center">
						<p>
							{isLogin ? "Don't have an account?" : "Already have an account?"}
						</p>

						<Link to={isLogin ? "/signup" : "/login"}>
							{isLogin ? "Sign up" : "Log in"}
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}
export default Signup;
