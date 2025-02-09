import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
	return (
		<div className="mx-auto pb-20 pt-5 md:pt-10">
			<div className="flex justify-between items-center mx-8 md:mx-28 lg:mx-44">
				<h2 className="text-center text-[20px] sm:text-[20px] md:text-[28px] font-bold text-black">
					FAQ
				</h2>

				<Link href="/faq" className="text-sm font-bold">
					Show all
				</Link>
			</div>

			<Accordion
				type="single"
				collapsible
				className="max-w-sm md:max-w-6xl mx-auto"
			>
				<AccordionItem
					value="item-1"
					className="mt-8 bg-[#f7f7f7] px-6 py-2 border-none rounded-xl"
				>
					<AccordionTrigger className="font-light text-sm md:text-[16px] hover:no-underline hover:text-[#ff9f1c] transform duration-200">
						What is LoveTrain ?
					</AccordionTrigger>
					<AccordionContent className="text-sm">
						We are a platform for fundraising with the goal of revolutionizing
						the way the fundraising industry now operates. We aim to turn donors
						into fundraisers to raise the most funds for different causes.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="item-2"
					className="bg-[#f7f7f7] px-6 py-2 border-none rounded-xl mt-3"
				>
					<AccordionTrigger className="font-light text-sm md:text-[16px] hover:no-underline hover:text-[#ff9f1c] transform duration-200">
						How does LoveTrain work?
					</AccordionTrigger>
					<AccordionContent className="text-sm">
						You can select a cause that is run by celebrities / non-profit
						organizations or charities on Lovetrain.net. Create your fundraising
						profile, raise funds from your friends to help the cause and to
						compete with other fundraisers for a chance to win prizes.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="item-3"
					className="bg-[#f7f7f7] px-6 py-2 border-none rounded-xl mt-3"
				>
					<AccordionTrigger className="font-light text-sm md:text-[16px] hover:no-underline hover:text-[#ff9f1c] transform duration-200">
						Are there any rules for participating in LoveTrain?
					</AccordionTrigger>
					<AccordionContent className="text-sm">
						Yes, please check{" "}
						<Link href="/terms-and-condition" className="text-[#ff9f1c]">
							{" "}
							Terms and Conditions{" "}
						</Link>{" "}
						for the rules that you must agree to in order to participate in
						LoveTrain.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="item-4"
					className="bg-[#f7f7f7] px-6 py-2 border-none rounded-xl mt-3"
				>
					<AccordionTrigger className="font-light text-sm md:text-[16px] hover:no-underline hover:text-[#ff9f1c] transform duration-200">
						Are there any deadlines or time limits?
					</AccordionTrigger>
					<AccordionContent className="text-sm">
						Yes, This information will be provided on each fundraiser campaign
						page.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<div className="max-w-6xl mx-auto mt-8">
				<p className="text-center text-gray-500 text-[15px] sm:text-[17px] md:text-[18px]">
					For more questions{" "}
					<Link href="/contact-us" className="text-[#ff9f1c] ">
						Email
					</Link>{" "}
					us
				</p>
			</div>
		</div>
	);
};

export default FAQ;
