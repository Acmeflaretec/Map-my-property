import { generateImageUrl } from "@/utils/generateImageUrl";
import { BuilderType } from "@/utils/interface";
import Image from "next/image";
import React from "react";

const AboutBuilder: React.FC<{ data: BuilderType }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl md:rounded-3xl p-1 border-2">
      <div className="min-h-32 md:min-h-48 w-full min-w-[45vw] md:min-w-[14rem] lg:min-w-[16.5rem] rounded-xl md:rounded-2xl overflow-hidden border-2">
        <Image
          src={generateImageUrl(data?.image)}
          height={800}
          width={800}
          alt={"builder-image"}
          className="min-h-3/4 w-full"
        />
        <div className="relative flex justify-start items-center gap-1 p-1 h-fit bg-gradient-to-r from-[#f4f3f3] to-white bg-opacity-50">
          <Image
            src={generateImageUrl(data?.logo)}
            height={40}
            width={40}
            alt={"builder-logo"}
            className="absolute bottom-1 left-8 rounded-full h-20 w-20 border-2"
          />
          <div className="pl-32">
            <p className="font-bold text-base md:text-lg">{data?.title}</p>
            <p className="text-sm md:text-base">{data?.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="px-1 md:px-3 py-2 flex flex-col w-full gap-1 relative overflow-hidden">
        <p className="text-sm md:text-xl font-bold">About</p>
        <p className="text-sm md:text-base text-gray-500">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default AboutBuilder;
