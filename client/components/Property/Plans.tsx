"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlanType } from "@/data/propertyData";
import PlanCard from "./PlanCard";

const Plans: React.FC<{ data: PlanType[] }> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col border-2 rounded-2xl overflow-hidden bg-gray-100">
        <div className="flex w-full gap-4 font-bold p-4 text-gray-700">
          <p className="font-bold text-lg">Floor Plans</p>
        </div>
        <div className="w-full flex gap-4 overflow-x-scroll p-4 md:p-8 border-t-2">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 h-72 w-full p-4 rounded-2xl text-gray-600 border-2 bg-white cursor-pointer"
              onClick={toggleModal}
            >
              <div className="relative w-60 h-full">
                <Image
                  src={item?.image}
                  alt="pricing-details"
                  className="absolute block w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <p className="w-full text-center font-bold text-xs md:text-sm xl:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <PlanCard open={open} toggleModal={toggleModal} data={data} />
    </>
  );
};

export default Plans;
