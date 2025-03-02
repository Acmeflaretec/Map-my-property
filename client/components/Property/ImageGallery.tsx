"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import { GalleryType } from "@/utils/interface";
import { generateImageUrl } from "@/utils/generateImageUrl";
import Magnifier from "./Magnifier";

const ImageGallery: React.FC<{
  data: GalleryType[];
  open: boolean;
  toggleModal: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ data, open, toggleModal }) => {
  const [zoom, setZoom] = useState(3);
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
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 flex justify-center items-center w-full h-full bg-black md:bg-opacity-50"
          aria-labelledby="popup-modal"
          aria-hidden={!open}
        >
          <div className="relative h-[100vh] w-[100vw]">
            <div className="relative h-full bg-white pt-20 md:pt-[6.5rem]">
              <button
                onClick={toggleModal}
                type="button"
                className="absolute hidden md:flex z-20 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 justify-center items-center"
              >
                <Icons.close />
                <span className="sr-only">Close modal</span>
              </button>

              <div className="relative flex flex-col xl:flex-row gap-2 xl:gap-12 px-4 w-full h-full md:px-8">
                <div className="relative flex flex-col gap-2 w-full">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="flex text-gray-600 bg-transparent pt-1 text-sm justify-center items-center"
                    >
                      <Icons.leftArrow /> Back
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="w-full md:w-1/2">
                      <p className="text-base md:text-lg font-bold w-full">
                        {data[currentIndex]?.title}
                      </p>
                      <p className="text-xs md:text-xs lg:text-sm w-full">
                        {data[currentIndex]?.desc}
                      </p>
                    </div>
                    <div className="hidden md:flex gap-3 w-1/2 items-end justify-end h-full">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <button
                          key={item}
                          className={`h-fit w-fit justify-center text-sm p-1 px-2 rounded-full border-2 text-black ${
                            item === zoom
                              ? "border-[#8E7D3A] bg-[#FFFBEA]"
                              : "bg-white border-stone-400"
                          }`}
                          onClick={() => setZoom(item)}
                        >
                          {item}x
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="md:hidden flex gap-3 w-full items-end justify-end h-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <button
                        key={item}
                        className={`h-fit w-fit justify-center text-sm p-1 px-2 rounded-full border-2 text-black ${
                          item === zoom
                            ? "border-[#8E7D3A] bg-[#FFFBEA]"
                            : "bg-white border-stone-400"
                        }`}
                        onClick={() => setZoom(item)}
                      >
                        {item}x
                      </button>
                    ))}
                  </div>
                  <div className="w-full flex flex-col md:flex-row gap-2 xl:gap-6">
                    <div className="relative w-full flex flex-col md:flex-row">
                      <div className="overflow-hidden w-full h-72 md:h-[65vh] flex bg-black">
                        <Magnifier
                          src={generateImageUrl(data[currentIndex]?.src)}
                          zoom={zoom}
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
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 xl:gap-2 h-fit pb-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
