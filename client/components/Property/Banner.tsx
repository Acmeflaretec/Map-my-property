import React from "react";
import { Icons } from "../common/Icons";
import Carousel from "./Carousel";
import { ProjectType } from "@/utils/interface";

const Banner: React.FC<{ data: ProjectType }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-full md:w-3/5 xl:w-1/2 max-w-2xl xl:max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
            {data?.title}
          </h1>
          <div className="flex justify-between md:justify-normal">
            <p className="flex text-xs md:text-base items-center gap-1 md:gap-2 w-1/2 md:w-fit">
              <Icons.location />
              {data?.location}
            </p>
            <p className="px-4 hidden md:flex items-center"> | </p>
            <div className="flex items-center gap-2 p-[2px] pl-2 h-fit rounded-full border">
              <p className="text-xs md:text-base px-1">Status</p>
              <p
                className={`text-xs md:text-base px-4 py-1 border rounded-full text-white font-semibold ${
                  data?.status === "Pre Launch"
                    ? "bg-yellow-500"
                    : data?.status === "Launch"
                    ? "bg-green-500"
                    : data?.status === "Under Construction"
                    ? "bg-orange-500"
                    : data?.status === "Ready to Move In"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
              >
                {data?.status ?? "Pre Launch"}
              </p>
            </div>
          </div>
        </div>
        <p className="hidden md:block text-base w-2/5 lg:text-xl xl:w-1/2 max-w-lg">
          Explore the best properties with ease - personalized serches,
          real-time updates, and expert guidance all in one place
        </p>
      </div>
      <Carousel data={data?.imageGallery} />
    </div>
  );
};

export default Banner;
