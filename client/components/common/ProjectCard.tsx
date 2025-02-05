"use client";
import Image from "next/image";
import React from "react";
import { Icons } from "../common/Icons";
import Link from "next/link";
import { ProjectType } from "@/utils/interface";
import { generateImageUrl } from "@/utils/generateImageUrl";
import getPriceRange from "@/utils/getPriceRange";

const ProjectCard: React.FC<{ data: ProjectType }> = ({ data }) => {
  return (
    <Link
      href={`/property/${data?.href}`}
      key={data?.title}
      className="flex flex-col w-fit max-w-[17rem] items-center rounded-2xl md:rounded-3xl p-1 border-2"
    >
      <div className="h-32 md:h-48 min-w-[45vw] md:min-w-[14rem] lg:min-w-[16.5rem] max-w-[16.5rem] rounded-2xl md:rounded-3xl overflow-hidden border-2">
        <Image
          src={generateImageUrl(data?.imageGallery?.[0]?.src)}
          height={300}
          width={300}
          alt={"project-image"}
          className="h-3/4"
        />
        <div className="flex justify-between items-center p-1 pr-2 h-1/4 bg-gradient-to-r from-[#f4f3f3] to-white bg-opacity-50">
          <div className="relative overflow-hidden flex justify-start items-center gap-1 lg:w-3/5">
            <div className="flex items-center w-8 lg:w-1/4">
              <img
                src={generateImageUrl(data?.builder?.image)}
                height={40}
                width={40}
                alt={"builder-profile"}
                className="rounded-full h-8 w-8 border-2"
              />
            </div>
            <div className="flex flex-col lg:w-3/4">
              <p className="text-xs truncate">{data?.builder?.title}</p>
              <p className="text-[10px] truncate max-w-28 md:max-w-48">
                {data?.builder?.subtitle}
              </p>
            </div>
          </div>
          <button className="bg-[#0C0E0D] hidden lg:flex items-center z-30 h-fit text-[10px] text-white p-[2px] pl-3 pr-1 rounded-lg">
            Detailed View
            <Icons.rightArrow />
          </button>
        </div>
      </div>
      <div className="px-1 md:px-3 py-2 flex flex-col w-full gap-1 relative overflow-hidden">
        <p className="text-sm md:text-xl font-bold max-w-[42vw] md:max-w-[12.5rem] lg:max-w-[14.5rem] truncate">
          {data?.title}
        </p>
        <p className="text-[10px] md:text-xs">
          {getPriceRange(data?.minPrice, data?.maxPrice)}
          <br />
          {data?.subtitle}
        </p>
        <p className="flex text-[10px] md:text-xs items-center gap-1 md:gap-2">
          <Icons.location />
          {data?.location}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
