import React from "react";

const Hero = () => {
	return (
		<section className=" pt-2 md:pt-8 pb-24 md:pb-0 flex items-center">
			<div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
				{/* Left Column */}
				<div className="flex-1 text-center md:text-left -mt-24 md:mt-0 pt-0 md:pt-32 justify-center items-center">
					<div className="max-w-[800px] bg-transparent rounded-md md:bg-gradient-to-r from-[#ff9f1c] to-[#fdedd8] p-0 md:p-6">
						<p className="text-[19px] sm:text-[20px] md:text-[30px] max-w-[300px] sm:max-w-[320px] md:max-w-[500px] font-bold text-black">
							Join fundraising competitions <br /> Support your favorite cause <br /> Win
							amazing prizes
						</p>
					</div>
					<div className="mt-6 md:mt-6 ">
						<button className="px-6 py-3 bg-[#ff9f1c] text-white font-semibold rounded-xl hover:bg-[#ffa527] transition duration-300">
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
						className="max-w-[350px] h-[400px] md:max-w-[500px] lg:max-w-[650px] md:h-[600px] aspect-square"
					/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
