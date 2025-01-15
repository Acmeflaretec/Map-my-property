"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import Model from "../common/Model";
import { GalleryType } from "@/utils/interface";

const ImageGallery: React.FC<{
  data: GalleryType[];
  open: boolean;
  toggleModal: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ data, open, toggleModal }) => {
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Model isModalOpen={open} toggleModal={toggleModal}>
      <div className="relative flex flex-col xl:flex-row gap-2 xl:gap-12 px-4 w-full h-full md:max-h-[75vh] md:max-w-[85vw] md:p-8 rounded-2xl">
        <div className="w-full xl:w-1/2 xl:min-h-[60vh] flex flex-col gap-2 xl:gap-3">
          <p className="text-lg font-bold">Image Gallery</p>
          <div className="relative flex flex-col md:flex-row rounded-xl">
            <div className="overflow-hidden w-full">
              <Image
                src={data[currentIndex]?.src}
                alt="hero-image"
                className="w-full min-h-60 object-contain"
                width={800}
                height={800}
              />
            </div>
            <button
              type="button"
              className="absolute top-0 -left-4 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.leftArrow />
              </span>
            </button>
            <button
              className="absolute top-0 -right-4 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.rightArrow />
              </span>
            </button>
          </div>
          <p className="text-base md:text-lg font-bold pt-2">
            {data[currentIndex]?.title}
          </p>
          <p className="text-xs md:text-xs lg:text-sm w-full pb-4">
            {data[currentIndex]?.desc}
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-4 gap-1 xl:gap-2 h-fit pb-8 xl:mt-8 xl:overflow-y-scroll">
          {data?.map((item, index) => (
            <button
              key={index}
              className={`relative flex flex-col gap-4 min-w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-xl text-gray-600 border-2 bg-white cursor-pointer ${
                currentIndex === index && "border-blue-400"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={item?.src}
                alt="gallery-images"
                className="absolute block min-w-20 h-20 md:w-24 md:h-24 object-cover"
                width={800}
                height={800}
              />
            </button>
          ))}
        </div>
      </div>
    </Model>
  );
};

export default ImageGallery;
