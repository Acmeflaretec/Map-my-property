import { BuilderType } from "@/utils/interface";
import React from "react";
import { Icons } from "../common/Icons";
import Image from "next/image";
import Link from "next/link";
import { generateImageUrl } from "@/utils/generateImageUrl";

const AboutBuilder: React.FC<{ data: BuilderType }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 border-2 rounded-2xl p-4 py-8 md:p-8 bg-gray-50">
      <h1 className="font-bold text-lg">More About the Builder</h1>
      <div className="flex justify-start items-center gap-2 md:gap-4">
        <Image
          src={generateImageUrl(data?.image)}
          height={40}
          width={40}
          alt={"builder-profile"}
          className="rounded-full h-16 w-16 border-2"
        />
        <div>
          <p className="text-lg md:text-xl">{data?.title}</p>
          <p className="text-sm md:text-base">{data?.subtitle}</p>
        </div>
      </div>
      <p className="text-gray-500">{data?.description}</p>
      <Link
        href={`/builder/${data?._id}`}
        className="flex w-fit h-fit items-center rounded-full border-2 gap-3 p-1 bg-white"
      >
        <p className="pl-6 text-sm">Know more</p>
        <span className="rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold bg-black text-white">
          <Icons.rightArrow />
        </span>
      </Link>
    </div>
  );
};

export default AboutBuilder;
