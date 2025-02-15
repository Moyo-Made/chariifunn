import React from "react";

const HowItWorks = () => {
	return (
		<div className="mx-auto pb-10 -mt-0 md:-mt-10">
			<h2 className="text-center text-[20px] sm:text-[20px] md:text-[30px] font-bold text-black">
				How it works?
			</h2>
			<div className="max-w-6xl mx-auto mt-2">
				<p className="text-center text-gray-400 text-[16px] sm:text-[18px] md:text-[20px]">
					Follow these easy steps to get started
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-8">
				{/* Select your favorite cause */}
				<div className="w-full md:w-[350px] lg:w-[250px] h-[280px] mx-4 md:mx-0 rounded-xl bg-[#fff] shadow-md pl-2 pr-5 pt-2 pb-2">
					<div className="flex">
						<div>
							<p className="text-gray-300 text-[35px]">1</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center mx-auto">
							<iframe
								src="https://lottie.host/embed/45569efe-c03d-4a4d-a4bc-0c4186796663/cOqAXFp6TT.lottie"
								className="w-[150px] lg:w-[60px] aspect-square"
								allowFullScreen
								allow="clipboard-write"
							/>
							<h2 className="text-black text-[16px] md:text-[18px] font-semibold text-center">
								Select your favorite cause
							</h2>
							<p className="text-[#7B7B7B] text-[15px] md:text-[16px] font-light text-center">
								Select a cause that has meaning for you. Create your fundraising
								page.
							</p>
						</div>
					</div>
				</div>

				{/* Raise funds from friends */}
				<div className="w-full md:w-[350px] lg:w-[250px] h-[280px] rounded-xl mx-4 md:mx-0 bg-[#fff] shadow-md pl-2 pr-5 pt-2 pb-2">
					<div className="flex">
						<div>
							<p className="text-gray-300 text-[35px]">2</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<iframe
								src="https://lottie.host/embed/7dfe51c9-3472-4077-a756-0deea0af277c/AwK7DuKZTe.lottie"
								className="w-[150px] lg:w-[60px] aspect-square"
								allowFullScreen
								allow="clipboard-write"
							/>
							<h2 className="text-black text-[16px] md:text-[18px] font-semibold text-center">
								Raise funds from friends
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								To compete with other fundraisers, share your page with your
								friends and raise as much funds as you can.
							</p>
						</div>
					</div>
				</div>

				{/* Win big prizes */}
				<div className="w-full md:w-[350px] lg:w-[250px] h-[280px] rounded-xl mx-4 md:mx-0 bg-[#fff] shadow-md pl-2 pr-5 pt-2 pb-2">
					<div className="flex w-full">
						<div className="flex-shrink-0">
							<p className="text-gray-300 text-[35px]">3</p>
						</div>
						<div className="flex-1 flex flex-col gap-2 justify-center items-center">
							<iframe
								src="https://lottie.host/embed/4d627625-14f1-4e71-b2b8-310180fa7218/9NVvO28BEv.lottie"
								className="w-[150px] lg:w-[60px] aspect-square"
								allowFullScreen
								allow="clipboard-write"
							/>
							<h2 className="text-black text-[16px] md:text-[18px] font-semibold text-center">
								Win big prizes
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								The grand prize will go to the person who raises the most for
								the cause.
							</p>
						</div>
					</div>
				</div>

				{/* Earn while doing good */}
				<div className="w-full md:w-[350px] lg:w-[250px] h-[280px] rounded-xl mx-4 md:mx-0 bg-[#fff] shadow-md pl-2 pr-5 pt-2 pb-2">
					<div className="flex">
						<div>
							<p className="text-gray-300 text-[35px]">4</p>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<iframe
								src="https://lottie.host/embed/53d0e7c5-fdd5-4277-bd69-caedb9946677/TEInVAKXXt.lottie"
								className="w-[150px] lg:w-[60px] aspect-square"
								allowFullScreen
								allow="clipboard-write"
							/>
							<h2 className="text-black text-[16px] md:text-[18px] font-semibold text-center">
								Earn while doing good
							</h2>
							<p className="text-gray-500 text-[15px] md:text-[16px] font-light text-center">
								Even if you don&#39;t win the grand prize, you can still earn
								other prizes or become one of the top donors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
