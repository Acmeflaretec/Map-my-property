"use client";
import { PlanType } from "@/utils/interface";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import Model from "../common/Model";
import { generateImageUrl } from "@/utils/generateImageUrl";
import Magnifier from "./Magnifier";
import CustomButton from "../ui/CustomButton";
import ContactCard from "../common/ContactCard";

const PlanCard: React.FC<{
  data: PlanType[];
  open: boolean;
  toggleModal: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ data, open, toggleModal }) => {
  const enquiry = localStorage.getItem("enquiry");
  const [openContact, setOpen] = useState(enquiry ? false : true);
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
      <Model isModalOpen={open} toggleModal={toggleModal}>
        <div className="relative flex flex-col gap-2 p-4 w-full h-full md:max-h-[75vh] md:max-w-[80vw] md:p-4 md:px-8 rounded-2xl overflow-scroll md:overflow-hidden">
          <p className="text-lg font-bold">Floor Plans</p>
          {!enquiry && (
            <div className="absolute w-full h-full flex items-center justify-center backdrop-blur-sm z-40">
              <CustomButton type="primary" onClick={() => setOpen(true)}>
                Get Complete Floor Plans <Icons.rightArrow />
              </CustomButton>
            </div>
          )}
          <div className="relative flex flex-col md:flex-row border-2 rounded-3xl mx-2">
            <div className="relative flex justify-end md:h-1/2 w-[90vw] md:w-2/3 p-2">
              <Magnifier
                src={generateImageUrl(data[currentIndex]?.src)}
                size={250}
                className="h-full w-full md:w-2/3 max-h-72 min-h-60 object-contain"
              />
            </div>
            <p className="text-xs md:text-xs lg:text-sm w-full md:w-1/3 p-4">
              {data[currentIndex]?.desc}
            </p>
            <button
              type="button"
              className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.leftArrow />
              </span>
            </button>
            <button
              className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.rightArrow />
              </span>
            </button>
          </div>
          <div className="relative mx-2">
            <div className="overflow-hidden">
              <div
                className="relative w-full flex gap-4 py-2 lg:py-4"
                style={{
                  transform: `translateX(-${
                    (currentIndex / data?.length) * 100
                  }%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {data?.map((item, index) => (
                  <button
                    key={index}
                    className={`flex flex-col gap-4 h-40 w-full p-2 rounded-2xl text-gray-600 border-2 bg-white cursor-pointer ${
                      currentIndex === index && "border-blue-400"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <div className="relative w-36 h-full">
                      <Image
                        src={generateImageUrl(item?.src)}
                        alt="pricing-details"
                        className="absolute block w-full h-full object-cover"
                        width={800}
                        height={800}
                      />
                    </div>
                    <p className="w-full text-center font-bold text-xs md:text-sm xl:text-base">
                      {item?.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.leftArrow />
              </span>
            </button>
            <button
              className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
                <Icons.rightArrow />
              </span>
            </button>
          </div>
        </div>
      </Model>
      <Model isModalOpen={openContact} toggleModal={() => setOpen(false)}>
        <ContactCard />
      </Model>
    </>
  );
};

export default PlanCard;
