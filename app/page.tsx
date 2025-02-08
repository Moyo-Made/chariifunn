import React from "react";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Mission from "@/components/Mission";
import WhyChari from "@/components/WhyChari";
import FundraisingCard from "@/components/Fundraising";


const Page: React.FC = () => {
	return (
		<div className="bg-[#fff]">
			<Hero />
			<HowItWorks />
			<FundraisingCard />
			<WhyChari />
      		<Mission />
      		<FAQ />
		</div>
	);
};

export default Page;
