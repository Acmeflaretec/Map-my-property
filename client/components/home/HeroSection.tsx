"use client";
import React from "react";
import { SentenceAnimation } from "../ui/AnimationText";
import { motion } from "framer-motion";
import CustomButton from "../ui/CustomButton";
import { FlipWords } from "../ui/FlipWords";
import { Icons } from "../common/Icons";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center text-gray-800 mt-20 md:mt-28 mx-1 md:mx-4 lg:mt-32 h-[50vh] md:h-[70vh]">
      <div className="relative flex flex-col gap-4 items-center h-full w-full p-1 md:px-8 bg-[#C2D4E5] rounded-3xl overflow-hidden">
        <SentenceAnimation
          className="text-[28px] md:text-5xl font-black z-20 text-center tracking-wider leading-8 md:leading-11 pt-12 md:pt-20"
          sentences={["Mapping Your Journey"]}
        />
        <div className="text-[28px] flex items-start md:text-5xl z-20 font-black text-center tracking-wider leading-6 md:leading-11">
          <SentenceAnimation className="pl-0" sentences={["to Ideal "]} />
          &nbsp;
          <motion.div
            initial={{ x: -20 }}
            className="w-44 md:w-64 items-start flex"
          >
            <FlipWords
              words={["Properties", "Townships", "Apartments", "Residences"]}
            />
          </motion.div>
        </div>
        <p className="text-xs z-20 md:text-base max-w-md font-normal text-center">
          Explore Your Best Property Journey with Us
        </p>
        <div className="hidden md:flex gap-4">
          <CustomButton type="secondary">
            Get Enquired <Icons.phone />
          </CustomButton>
          <CustomButton type="primary">
            Explore Now <Icons.rightArrow />
          </CustomButton>
        </div>
        <Image
          src={"/assets/banner.png"}
          height={800}
          width={800}
          alt="banner-image"
          className="absolute z-0 w-full h-full object-cover"
        />
      </div>
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
