"use client";
import React from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import Banner from "./Banner";
import { bannerData } from "@/data/bannerData";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center text-gray-800 mt-20 md:mt-28 mx-1 md:mx-4 lg:mt-32 h-[50vh] md:h-[70vh]">
      <Banner data={bannerData} />
      <div className="absolute hidden md:flex bg-white border-2 mb-2 -bottom-12 w-[95%] lg:w-4/5 xl:w-2/3 h-28 rounded-3xl p-2">
        <div className="w-[35%] p-2 lg:p-4 flex flex-col gap-2">
          <p className="flex gap-1 items-center">
            <Icons.location /> Location
          </p>
          <p className="flex items-center gap-1 bg-[#F2E6B8] rounded-lg px-1 py-[2px] w-fit">
            Chandapura, Banglore{" "}
            <Icons.close className="border border-black rounded-full w-5 h-5 p-1 text-black" />
          </p>
        </div>
        <div className="w-[30%] border-x-2 border-stone-200 flex items-center justify-between p-2 lg:p-4">
          <p className="flex gap-2">
            <Icons.home />
            You're looking for
          </p>
          <Icons.rightArrow />
        </div>
        <div className="w-[35%] flex p-2 lg:p-4 items-center justify-between">
          <p>₹ Budget</p>
          <Icons.rightArrow />
          <CustomButton type="primary">
            Search <Icons.search />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
