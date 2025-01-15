"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import ImageGallery from "./ImageGallery";
import { GalleryType } from "@/utils/interface";

const Carousel: React.FC<{ data: GalleryType[] }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
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
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="w-full relative overflow-hidden h-[300px] md:h-[500px] rounded-3xl">
      {data?.map((item, index) => (
        <div
          key={index}
          onClick={toggleModal}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <Image
            src={item?.src}
            alt={`Slide ${index + 1}`}
            className="absolute block w-full h-full object-cover"
            width={4920}
            height={3080}
          />
        </div>
      ))}
      <div className="absolute z-20 w-full bg-gradient-to-t from-gray-800/80 to-transparent h-24 md:h-36 bottom-0 backdrop-blur-[2px]" />
      <div className="absolute z-30 w-full max-w-xs md:max-w-md bottom-5 md:bottom-10 left-4 md:left-12">
        <p
          className="text-base md:text-lg font-bold text-white"
          onClick={toggleModal}
        >
          {data?.[currentIndex]?.title}
        </p>
        <p
          className="text-xs md:text-base max-w-4xl text-white"
          onClick={toggleModal}
        >
          {data?.[currentIndex]?.desc}
        </p>
        <div className="flex gap-1 pt-2">
          {data?.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-full max-w-20 h-1 rounded-full ${
                index === currentIndex ? "bg-lime-200" : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <button
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 bg-white group-hover:bg-white/50">
          <Icons.leftArrow />
        </span>
      </button>
      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 bg-white group-hover:bg-white/50">
          <Icons.rightArrow />
        </span>
      </button>
      <ImageGallery open={open} toggleModal={toggleModal} data={data} />
    </div>
  );
};

export default Carousel;
