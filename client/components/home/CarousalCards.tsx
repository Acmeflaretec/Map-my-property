import Image from "next/image";
import React, { JSX } from "react";

const carousalCards: JSX.Element[] = [
  <div className="md:w-60 h-full bg-[#95bfd9cf] border-2 rounded-2xl md:rounded-3xl relative py-3 md:py-6 sm:px-3 px-2.5 text-sm md:text-lg">
    <h1 className="leading-4 md:leading-tight font-medium md:font-semibold text-start text-gray-900">
      Top Amenities Buyers Look for in Modern Apartments
    </h1>
    <p className="text-xs md:text-sm font-normal text-start text-gray-900 pt-2">
      Discuss must-have amenities like smart home features, clubhouses, and
      security systems
    </p>
  </div>,
  <div
    className="max-w-60 h-90 bg-[#9cd9ffcf] border-2 rounded-3xl relative"
    key="3"
  >
    <div className="absolute w-full h-full pt-5  flex items-start justify-center">
      <button className="bg-white text-xs md:text-sm px-2 md:px-5 py-[2px] rounded-md">
        Read more
      </button>
    </div>
    <div className="absolute w-full h-full pb-6 px-5 flex items-end justify-center text-white leading-tight text-sm md:text-lg">
      <h1>Is It the Right Time to Buy Property in India?</h1>
    </div>
    <Image
      width={100}
      height={100}
      className="w-full h-full rounded-2xl  md:rounded-3xl"
      src={"/assets/blog-1.png"}
      alt="..."
    />
  </div>,
  <div
    className="relative flex flex-col w-full h-52 overflow-hidden items-end bg-[#C2D4E5] border-2 rounded-3xl"
    key="2"
  >
    <h1 className="z-20 leading-tight text-sm md:text-base font-semibold text-start text-gray-900 absolute p-3.5 md:p-5">
      Success Stories: How Buyers Found Their Perfect Home with Map My
      Properties
    </h1>
    <Image
      width={500}
      height={500}
      className="absolute w-full h-full object-cover -bottom-12"
      src={"/assets/banner.png"}
      alt="..."
    />
  </div>,
  <div
    className="w-full bg-[#95bfd9cf]  border-2 rounded-2xl md:rounded-3xl relative py-3 md:py-6 sm:px-3 px-2.5  text-sm md:text-lg"
    key="3"
  >
    <h1 className=" leading-4 md:leading-tight font-medium md:font-semibold text-start text-gray-900">
      16 Attractive Double Fan POP Design For Modern Home
    </h1>
    <p className="text-xs md:text-sm font-normal text-start text-gray-900 pt-2">
      Fan POP designs are having a moment in interior design. A good ceiling
      design instantly uplifts the room and seamlessly expresses one’s taste in
      design
    </p>
  </div>,
  <div
    className="w-full h-90 bg-blue-400 border-2 rounded-2xl md:rounded-3xl relative"
    key="2"
  >
    <div className="absolute w-full h-full pb-5  flex items-end justify-center">
      <button className="bg-white text-xs md:text-sm px-2 md:px-5 py-[2px] rounded-md">
        Top Interior Trends
      </button>
    </div>
    <Image
      width={100}
      height={100}
      className="w-full h-full rounded-3xl"
      src={"/assets/blog-2.png"}
      alt="..."
    />
  </div>,
  <div
    className="w-full h-40 bg-[#95bfd9cf] border-2 rounded-2xl md:rounded-3xl py-3 md:py-6 md:px-5 px-3"
    key="3"
  >
    <h1 className=" leading-tight text-sm md:text-md font-semibold text-start text-gray-900">
      Success Stories: How Buyers Found Their Perfect Home with Map My
      Properties
    </h1>
  </div>,
];

export default carousalCards;
