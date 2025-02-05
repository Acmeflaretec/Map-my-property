import React from "react";
import { generateImageUrl } from "@/utils/generateImageUrl";
import { BlogType } from "@/utils/interface";
import Image from "next/image";
import Link from "next/link";

const Cards = {
  type1: ({ data }: { data: BlogType }) => (
    <div className="md:w-60 h-full bg-[#95bfd9cf] border-2 rounded-2xl md:rounded-3xl relative py-3 md:py-6 sm:px-3 px-2.5 text-sm md:text-lg">
      <h1 className="leading-4 md:leading-tight font-medium md:font-semibold text-start text-gray-900">
        {data?.title}
      </h1>
      <p className="text-xs md:text-sm font-normal text-start text-gray-900 pt-2">
        {data?.subtitle}
      </p>
    </div>
  ),
  type2: ({ data }: { data: BlogType }) => (
    <div className="relative flex flex-col w-full h-52 overflow-hidden items-end bg-[#C2D4E5] border-2 rounded-3xl">
      <h1 className="z-20 leading-tight text-sm md:text-base font-semibold text-start text-gray-900 absolute p-3.5 md:p-5">
        {data?.title}
      </h1>
      <Image
        width={500}
        height={500}
        className="absolute w-full h-full object-cover -bottom-12"
        src={generateImageUrl(data?.image)}
        alt="..."
      />
    </div>
  ),
  type3: ({ data }: { data: BlogType }) => (
    <div className="max-w-60 h-80 bg-[#9cd9ffcf] border-2 rounded-3xl relative">
      <div className="absolute w-full h-full pt-5 flex items-start justify-center">
        <h1 className="text-black font-semibold">{data?.title}</h1>
      </div>
      <div className="absolute w-full h-full pb-6 px-5 flex items-end justify-center leading-tight text-sm md:text-lg">
        <button className="bg-white text-xs md:text-sm px-2 md:px-5 py-[2px] rounded-md">
          Read more
        </button>
      </div>
      <Image
        width={100}
        height={100}
        className="w-full h-full rounded-2xl  md:rounded-3xl"
        src={generateImageUrl(data?.image)}
        alt="..."
      />
    </div>
  ),
};

const CarousalCards: React.FC<{ data: BlogType }> = ({ data }) => {
  const type = `type${data?.type ?? 1}`;
  const Card = Cards[type as keyof typeof Cards] || null;
  return (
    <Link href={`/blogs/${data?.url}`}>
      <Card data={data} />
    </Link>
  );
};

export default CarousalCards;
