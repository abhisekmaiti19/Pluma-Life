import React from 'react';
import { Link } from 'react-router-dom'

const SignupScreen = ({setVerify}) => {
	return (
		<div className="flex flex-col justify-between h-full gap-10 sm:gap-4">
			<div>
				<div className="text-2xl font-semibold text-black">
					Register ✌
				</div>
				<div className="text-sm text-black/70">
					Register to the dream, today
				</div>
			</div>
			<div className="lg:max-h-80 lg:overflow-y-scroll lg:pr-4">
				<div className="flex flex-col gap-2">
					<div className="flex gap-3 w-full">
						<div className="flex flex-col gap-1 w-2/5">
							<label
								htmlFor="ref-id"
								className="font-medium text-sm"
							>
								Referral ID
							</label>
							<input
								type="text"
								id="ref-id"
								name="ref-id"
								placeholder="Enter referral ID"
								className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
							/>
						</div>
						<div className="flex flex-col gap-1 w-2/3">
							<label
								htmlFor="ref-by"
								className="font-medium text-sm"
							>
								Referred By
							</label>
							<input
								type="text"
								id="ref-by"
								name="ref-by"
								disabled
								placeholder="Referrer name"
								className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2 disabled:bg-gray-200 cursor-not-allowed"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="name" className="font-medium text-sm">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your fullname"
							className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="email" className="font-medium text-sm">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email ID"
							className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="phone" className="font-medium text-sm">
							Phone
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							placeholder="Enter your 10 digit phone number"
							className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="pan" className="font-medium text-sm">
							Pan Number
						</label>
						<input
							type="text"
							id="pan"
							name="pan"
							placeholder="Enter your PAN number"
							className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
						/>
					</div>
					<div className="flex gap-3 w-full">
						<div className="flex flex-col gap-1 pb-3 w-full">
							<label
								htmlFor="password"
								className="font-medium text-sm"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Create you password"
								className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
							/>
						</div>
						<div className="flex flex-col gap-1 pb-3 w-full">
							<label
								htmlFor="con-password"
								className="font-medium text-sm"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="con-password"
								name="con-password"
								placeholder="Confirm you password"
								className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-yellow-100 transition-all ease-in-out focus:border-yellow-600/50 focus:border-2"
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<input type="checkbox" id="" className="" />
						Agreed to the{' '}
						<Link to="/register" className="text-yellow-600">
							terms and conditions
						</Link>
					</div>
				</div>
			</div>
			<div>
				<button
					className="px-5 py-4 mb-1 text-lg rounded-xl text-white font-semibold w-full bg-left hover:bg-right hover:shadow-inner transition-all duration-200"
					style={{
						backgroundSize: '120%',
						backgroundImage:
							'linear-gradient(89deg, #000 -76.05%, #C6A102 105.86%)',
					}}
                    onClick={()=>setVerify(true)}
				>
					Register
				</button>
				<span className="text-sm">
					Already have an account?
					<Link to="/login">
						<span className="text-yellow-600 text-sm">
							{' '}
							Login now.
						</span>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SignupScreen;
