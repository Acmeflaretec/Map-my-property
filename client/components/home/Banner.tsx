"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import { SentenceAnimation } from "../ui/AnimationText";
import { FlipWords } from "../ui/FlipWords";
import CustomButton from "../ui/CustomButton";
import { motion } from "framer-motion";
import { BannerType } from "@/data/bannerData";

const Banner: React.FC<{ data: BannerType[] }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden h-full rounded-3xl">
      <div className="absolute inset-0 z-0">
        {data?.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x:
                index === currentIndex
                  ? 0
                  : index < currentIndex
                  ? "-100%"
                  : "100%",
            }}
            animate={{
              x:
                index === currentIndex
                  ? 0
                  : index < currentIndex
                  ? "-100%"
                  : "100%",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full`}
          >
            <Image
              src={item?.image}
              alt="banner-image"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="relative flex flex-col gap-2 md:gap-4 items-center h-full w-full p-1 md:px-8 rounded-3xl overflow-hidden">
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
        <div className="flex items-center gap-2 z-20 pt-4">
          <button
            type="button"
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50">
              <Icons.leftArrow />
            </span>
          </button>
          <p className="text-xs md:text-base max-w-md font-normal text-center">
            {data[currentIndex]?.text}
          </p>
          <button
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50">
              <Icons.rightArrow />
            </span>
          </button>
        </div>
        <div className="flex md:hidden gap-[2px] z-20 w-full p-4">
          <div className="flex items-center border border-stone-300 bg-white rounded-lg text-sm p-1 pl-4 w-full">
            <Icons.search />
            <input
              placeholder="Explore the best properties"
              className="text-xs px-2 w-full bg-transparent"
            />
          </div>
          <CustomButton type="primary" className="pl-2 pr-1 gap-1 text-xs">
            Search <Icons.search />
          </CustomButton>
        </div>
        <div className="hidden md:flex gap-4">
          <CustomButton type="secondary" href="/contact">
            Get Enquired <Icons.phone />
          </CustomButton>
          <CustomButton type="primary" href={data[currentIndex]?.href}>
            Explore Now <Icons.rightArrow />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
