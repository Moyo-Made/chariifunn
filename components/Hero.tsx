import React from "react";

const Hero = () => {
	return (
		<section className="bg-gray-100 pt-2 md:pt-8 pb-28 flex items-center">
			<div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
				{/* Left Column */}
				<div className="flex-1 text-center md:text-left -mt-16 md:mt-0 pt-0 md:pt-32">
					<div className="bg-transparent rounded-md md:bg-gradient-to-r from-[#ff9f1c] to-[#fdedd8] p-6">
						<p className="text-[19px] sm:text-[20px] md:text-[30px] max-w-[300px] sm:max-w-[320px] md:max-w-[500px] font-bold text-black">
							Join fundraising competitions Support your favorite cause Win
							amazing prizes
						</p>
					</div>
					<div className="mt-2 md:mt-6 ">
						<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
							Explore
						</button>
					</div>
				</div>

				{/* Right Column */}
				<div className="flex-1 ">
					<div className="w-full relative">

					<iframe
						src="https://lottie.host/embed/b128f358-e4bc-4ade-b05f-6c56daa91fc4/GgBCnJc5aZ.lottie"
						 allowFullScreen
        					allow="clipboard-write"
						className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] aspect-square"
					/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
