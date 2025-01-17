"use client";
import React, { useState } from "react";
import { PricingType } from "@/utils/interface";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import Model from "../common/Model";
import ContactCard from "../common/ContactCard";

const Pricing: React.FC<{ data: PricingType[] }> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col border rounded-2xl overflow-hidden">
        <div className="flex w-full gap-4 font-bold p-4 text-gray-700 bg-gray-100">
          <p className="w-1/2 text-sm md:text-base">Accommodation Type</p>
          <p className="w-1/4 text-sm md:text-base">Area / Plot Size</p>
          <p className="w-1/4 text-sm md:text-base">Approx. Price</p>
        </div>
        <div className="w-full flex flex-col">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex w-full gap-4 p-4 text-gray-600 border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <p className="w-1/2 text-xs md:text-sm xl:text-base">
                {item.unit}
              </p>
              <p className="w-1/4 text-xs md:text-sm xl:text-base">
                {item.area}
              </p>
              <p className="w-1/4 text-xs md:text-sm xl:text-base">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-60 md:h-80 border border-gray-400 rounded-2xl overflow-hidden">
        <Image
          src="/assets/document.png"
          alt="pricing-details"
          className="absolute block w-full h-full object-cover"
          width={800}
          height={800}
        />
        <div className="absolute w-full h-full flex justify-center items-end pb-10 backdrop-blur-[2px]">
          <CustomButton type="primary" onClick={toggleModal}>
            Get Complete pricing details <Icons.rightArrow />
          </CustomButton>
        </div>
      </div>
      <Model isModalOpen={open} toggleModal={toggleModal}>
        <ContactCard />
      </Model>
    </>
  );
};

export default Pricing;
