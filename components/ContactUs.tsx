"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div className="bg-white px-4 pt-10 md:pt-20 pb-20">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h2 className="text-[20px] md:text-[27px] text-black font-bold">
          Contact us
        </h2>
        <p className="text-gray-400 text-[17px] md:text-[19px] mb-8">
          We would love to hear from you!
        </p>

        <div className="flex flex-col items-center w-full justify-center">
          {/* Image/Animation Container */}
          <div className="w-full max-w-[300px] h-[300px] md:max-w-[500px] md:h-[500px]">
            <DotLottieReact
              src="/images/contact-us-animation.lottie"
              autoplay
              className="w-full h-full"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6 mt-8 w-full max-w-md">
            <div className="flex justify-center items-center gap-3">
              <MdOutlineMailOutline className="h-8 w-8 text-[#ff9f1c]" />
              <div className="flex flex-col">
                <h3 className="text-[18px] md:text-[20px] text-gray-500 font-medium">
                  Email
                </h3>
                <Link
                  href="mailto:info@charifun.com"
                  className="text-[#ff9f1c] text-[17px] md:text-[19px] hover:underline"
                >
                  info@charifun.com
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;