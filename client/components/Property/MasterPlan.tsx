"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "../common/Icons";
import Model from "../common/Model";
import { PlanType } from "@/data/propertyData";

const MasterPlan: React.FC<{ data: PlanType }> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative flex flex-col md:flex-row gap-8 md:p-12 w-full min-h-60 md:min-h-80 p-4 border bg-gray-50 rounded-2xl overflow-hidden">
        <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
          <p className="text-lg font-bold">{data?.title}</p>
          <p className="text-sm md:text-base max-w-4xl">{data?.desc}</p>
          <button
            onClick={toggleModal}
            className="bg-[#0C0E0D] flex items-center z-30 h-fit w-fit text-xs md:text-sm text-white p-1 gap-1 pl-3 pr-1 rounded-lg"
          >
            Detailed View
            <Icons.rightArrow />
          </button>
        </div>
        <div
          className="relative w-full md:w-1/2 border-2 min-h-60 overflow-hidden group cursor-pointer"
          onClick={toggleModal}
        >
          <Image
            src={data?.image}
            alt="master-plan"
            className="absolute block w-full h-full min-h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            width={800}
            height={800}
          />
        </div>
      </div>
      <Model isModalOpen={open} toggleModal={toggleModal}>
        <div className="relative flex flex-col gap-8 w-full h-full max-h-[70vh] md:max-w-[80vw] p-4 rounded-2xl overflow-hidden">
          <p className="text-lg font-bold">{data?.title}</p>
          <div className="relative h-full overflow-x-scroll w-[90vw] md:w-full">
            <div className="w-[800px]">
              <Image
                src={data?.image}
                alt="master-plan"
                className="h-full w-full min-h-96 object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </Model>
    </>
  );
};

export default MasterPlan;
