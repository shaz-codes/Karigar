function Signup() {
	return (
		<>
			<div className="flex py-24 px-48 bg-[#F9F9F9] h-full">
				<div className="bg-[#1E1E2D] w-1/2 h-full hidden xl:flex flex-col justify-center items-center gap-6 px-8">
					<h1 className="text-3xl text-white font-bold">KARIGAR</h1>

					<p className="text-white text-center">
						A sanctuary for the discerning. Curated collections for a refined
						lifestyle.
					</p>
				</div>
				<div className="bg-white xl:w-1/2 w-full h-full p-16 flex flex-col gap-8">
					<h1 className="text-3xl text-black">Welcome Back</h1>
					<p className="">Please enter your details to sign in.</p>
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
							<button className="font-bold">Forgot password?</button>
						</div>
						<input
							type="password"
							placeholder="••••••••"
							className=" border border-gray-200 p-4 bg-[#F9F9F9] h-14"
						></input>
					</label>
					<button className="bg-black text-white h-15">LOG IN</button>
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
						<p>Don't have an account?</p>
						<button className="font-bold">Sign up</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default Signup;
