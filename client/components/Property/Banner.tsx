import React from "react";
import { Icons } from "../common/Icons";
import Carousel from "./Carousel";
import { ProjectType } from "@/utils/interface";

const Banner: React.FC<{ data: ProjectType }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-full md:w-3/5 xl:w-1/2 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
            {data?.title}
          </h1>
          <p className="flex text-xs md:text-base items-center gap-1 md:gap-2">
            <Icons.location />
            {data?.location}
          </p>
        </div>
        <p className="hidden md:block text-base w-2/5 lg:text-xl xl:w-1/2 max-w-lg">
          Explore the best properties with ease - personalized serches,
          real-time updates, and expert guidance all in one place
        </p>
      </div>
      <Carousel data={data?.imageGallery} />
      <div className="flex flex-col gap-4 p-2">
        <h1 className="font-bold text-base md:text-xl">Project Overview</h1>
        <p className="text-sm md:text-base">{data?.description}</p>
      </div>
    </div>
  );
};

export default Banner;
