"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import { GalleryType } from "@/utils/interface";
import { generateImageUrl } from "@/utils/generateImageUrl";
import CustomButton from "../ui/CustomButton";
import ImageGallery from "./ImageGallery";

const ProjectGallery: React.FC<{
  data: GalleryType[];
}> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
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
    <div className="relative flex flex-col gap-2 px-3 w-full">
      <p className="text-lg font-bold">Project Image Gallery</p>
      <div className="w-full flex flex-col md:flex-row gap-2 xl:gap-6">
        <div className="relative md:w-2/3 flex flex-col md:flex-row rounded-xl">
          <div className="overflow-hidden w-full h-72 flex">
            <Image
              src={generateImageUrl(data[currentIndex]?.src)}
              alt="hero-image"
              className="w-full min-h-60 object-cover"
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
        <div className="w-full md:w-1/3">
          <p className="text-base md:text-lg font-bold pt-2">
            {data[currentIndex]?.title}
          </p>
          <p className="text-xs md:text-xs lg:text-sm w-full pb-4">
            {data[currentIndex]?.desc}
          </p>
          <CustomButton
            type="secondary"
            className="w-full justify-center"
            onClick={toggleModal}
          >
            View Image Gallery <Icons.rightArrow />
          </CustomButton>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 xl:gap-2 h-fit pb-4 xl:mt-4">
        {data?.map((item, index) => (
          <button
            key={index}
            className={`relative flex flex-col gap-4 min-w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-xl text-gray-600 border-2 bg-white cursor-pointer ${
              currentIndex === index && "border-blue-400"
            }`}
            onClick={() => goToSlide(index)}
          >
            <Image
              src={generateImageUrl(item?.src)}
              alt="gallery-images"
              className="absolute block min-w-20 h-20 md:w-24 md:h-24 object-cover"
              width={800}
              height={800}
            />
          </button>
        ))}
      </div>
      <ImageGallery open={open} toggleModal={toggleModal} data={data} />
    </div>
  );
};

export default ProjectGallery;
