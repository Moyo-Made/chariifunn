import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IoGiftOutline } from "react-icons/io5";

const FundraisingCard = () => {
  return (
    <div className="w-full mx-auto p-4 md:p-6 bg-[#ff9f1c] mt-3 md:mt-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center mb-6 gap-4">
        <div className="grow text-center sm:ml-8 md:ml-16 lg:ml-32">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            All fundraising competitions
          </h2>
          <p className="text-white/80 mt-1">Check out our campaigns</p>
        </div>
        <div className="flex-shrink-0">
          <Link href="/all-campaigns" className="flex items-center text-white pr-1 md:pr-8 lg:pr-16">
            <span>Show all</span>
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Campaign Card */}
      <div className="bg-white max-w-3xl mx-auto rounded-3xl p-4 md:p-6 relative overflow-hidden">
        {/* Featured Tag */}
        <div className="absolute top-4 right-0">
          <div className="bg-[#ff9f1c] text-white text-xs md:text-sm px-8 md:px-10 py-0 transform rotate-45 translate-x-8 translate-y--8">
            Ended!
          </div>
        </div>

        {/* Top Row: Image, Title, and Subtext */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Image */}
          <div className="w-full md:w-1/6">
            <img
              src="/images/campaign-img.webp"
              alt="Campaign"
              className="w-full h-24 md:h-28 object-cover rounded-xl"
            />
          </div>

          {/* Title and Subtext */}
          <div className="flex-1 pt-2 md:pt-3">
            <h3 className="text-base md:text-md font-bold mb-2">
              Join Isabel&#39;s Journey to Conquer Cancer Together!
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Welcome to Isabel&#39;s Campaign for BC Cancer Foundation! We&#39;re
              thrilled to have you join us in supporting this incredible cause.
              Here&#39;s all the information you need to know about the contest
              and...
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="pt-3 md:pt-4">
          {/* User and Organization */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/campaign-profile.webp"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm md:text-base">Isabel</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/foundation-logo.webp"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <Link href="https://charifun.com/train/10" className="text-sm md:text-base">BC Cancer Foundation</Link>
            </div>
            {/* Prize */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <IoGiftOutline className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-gray-600 font-semibold text-xs md:text-sm">
                  Grand prize:
                </span>
              </div>
              <span className="text-[#ff9f1c] text-xs md:text-sm">$1,000 voucher</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <span className="font-bold text-lg md:text-xl italic">$3,860</span>
              <span className="text-gray-600 text-xs md:text-sm">of $10,000</span>
              <div className="flex-1 text-center mr-16">
                <span className="text-black font-semibold italic text-sm md:text-base">
                  39%
                </span>
              </div>
            </div>
            <div className="h-1 bg-gray-200 rounded-full">
              <div className="h-full w-[30%] bg-[#ff9f1c] rounded-full"></div>
            </div>
          </div>

          {/* Campaign Status */}
          <div className="flex justify-end items-center">
            <div className="flex items-center text-[#ff9f1c]">
              <span className="text-xs md:text-sm">ended campaign</span>
              <ChevronRight className="text-black ml-1 w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisingCard;