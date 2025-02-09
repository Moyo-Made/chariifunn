import { ChevronRight } from "lucide-react";
import React from "react";

const BecomePartner = () => {
	return (
		<div className="bg-white pt-10 md:pt-12 pb-20 flex flex-col justify-center items-center">
			<h2 className="text-[17px] md:text-[20px] text-black font-bold">
				Become a partner
			</h2>
			<p className="text-gray-400 text-[16px] md:text-[17px] text-center pt-3 px-3">
				Someone from our team would love to grab coffee with you! Drop your name
				& email in the form and we’ll follow up.
			</p>

			<form className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
				<input
					type="text"
					placeholder="Full Name"
					className="w-[400px] md:w-[450px] h-[50px] border border-gray-300 rounded-lg px-4 bg-transparent focus:outline-gray-400"
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-[400px] md:w-[450px] h-[50px] border border-gray-300 rounded-lg px-4 bg-transparent focus:outline-gray-400"
				/>
			</form>

			<form className="flex flex-col md:flex-row gap-4 md:gap-6 pt-6">
				<input
					type="text"
					placeholder="Business Name"
					className="w-[400px] md:w-[450px] h-[50px] border border-gray-300 rounded-lg px-4 bg-transparent focus:outline-gray-400"
				/>
				<input
					type="text"
					placeholder="Website"
					className="w-[400px] md:w-[450px] h-[50px] border border-gray-300 rounded-lg px-4 bg-transparent focus:outline-gray-400"
				/>
			</form>

			<div className="mt-6">
				<textarea
					name="Description"
					placeholder="Description"
					rows={5}
					cols={99}
					className="w-[400px] md:w-[920px] p-4 rounded-lg bg-transparent border border-gray-300 resize-y focus:outline-gray-400"
				/>
			</div>

			<div className="flex gap-1 bg-[#ff9f1c] px-4 py-3 mt-5 rounded-lg hover:bg-[#ffa527] transition duration-300">
				<button className="text-white font-semibold ">Submit</button>
				<ChevronRight className="h-6 w-6 text-[#fff]" />
			</div>
		</div>
	);
};

export default BecomePartner;
