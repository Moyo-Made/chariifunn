"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-[#fff]">
			<div className="max-w-6xl mx-auto pt-1 md:pt-4">
				<div className="flex justify-between items-center h-[80px] py-5">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								src="/images/header-logo.png"
								alt="Charifun logo"
								width={200}
								height={200}
								className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-[16px] text-[#7B7B7B] font-semibold hover:text-[#ff9f1c] transition duration-300"
						>
							Explore
						</Link>
						<Link
							href="/about"
							className="text-[16px] text-[#7B7B7B] font-semibold hover:text-[#ff9f1c] transition duration-300"
						>
							About
						</Link>
					</div>

					{/* Desktop Buttons */}
					<div className="hidden md:flex items-center space-x-3 mr-0 md:mr-4 lg:mr-0">
						<button className="px-4 py-2 text-gray-800 font-semibold rounded-full">
							Login
						</button>
						<button className="px-4 py-2 bg-[#ff9f1c] text-white font-semibold rounded-full hover:bg-[#ffa527] transition duration-300">
							Sign Up
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none mr-4"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pb-3 space-y-1 text-center mx-auto pt-6">
							<Link
								href="/"
								className="block px-3 py-2 rounded-md text-[#7B7B7B] hover:text-[#ff9f1c] transition duration-300"
							>
								Explore
							</Link>
							<Link
								href="/about"
								className="block px-3 py-2 rounded-md text-[#7B7B7B] hover:text-[#ff9f1c] transition duration-300"
							>
								About
							</Link>
							<div className="flex space-x-2 mt-4 justify-center items-center pt-8">
								<button className="px-4 py-2 text-gray-800 text-center">
									Login
								</button>
								<button className="px-4 py-2 bg-[#ff9f1c] text-white rounded-full hover:bg-[#ffa527]  text-center transition duration-300">
									Sign Up
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
