import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 gap-8 lg:gap-12 mt-16 md:mt-28 px-2 md:px-8">
      <p className="text-sm md:text-base max-w-md font-normal text-center">
        Explore the best properties with ease - personalized searches, real-time
        updates, and expert guidance all in one place.
      </p>
      <div className="flex flex-wrap gap-1 md:gap-4 xl:gap-8 justify-center">
        <Link
          href={"/property?q=residential-flats"}
          className="relative w-[49%] md:w-60 h-48 md:h-60 bg-[#F0F9FF] rounded-3xl p-4 overflow-hidden border-2"
        >
          <p className="font-black z-10 lg:text-lg relative">
            Residential Flats
          </p>
          <p className="text-sm md:text-base font-normal z-10 relative">
            320+ properties
          </p>
          <Image
            src={"/assets/categories/image-1.png"}
            height={100}
            width={100}
            alt={"residential-flats"}
            className="absolute z-0 bottom-0 h-4/5 w-4/5 left-12"
          />
        </Link>
        <Link
          href={"/property?q=private-residences"}
          className="relative w-[49%] md:w-60 h-48 md:h-60 bg-[#FFF5E4] rounded-3xl p-4 overflow-hidden border-2"
        >
          <p className="font-black z-10 lg:text-lg relative">
            Private Residences
          </p>
          <p className="text-sm md:text-base font-normal z-10 relative">
            320+ properties
          </p>
          <Image
            src={"/assets/categories/image-2.png"}
            height={100}
            width={100}
            alt={"private-residences"}
            className="absolute z-0 bottom-0 h-2/3 w-full left-0"
          />
        </Link>
        <Link
          href={"/property?q=land-parcels"}
          className="relative w-[49%] md:w-60 h-48 md:h-60 bg-[#D7F2E3] rounded-3xl p-4 overflow-hidden border-2"
        >
          <p className="font-black z-10 lg:text-lg relative">Land Parcels</p>
          <p className="text-sm md:text-base font-normal z-10 relative">
            320+ properties
          </p>
          <Image
            src={"/assets/categories/image-3.png"}
            height={100}
            width={100}
            alt={"land-parcels"}
            className="absolute z-0 bottom-0 h-2/3 w-full left-0"
          />
        </Link>
        <Link
          href={"/property?q=planned-communites"}
          className="relative w-[49%] md:w-60 h-48 md:h-60 bg-[#F0F9FF] rounded-3xl p-4 overflow-hidden border-2"
        >
          <p className="font-black z-10 lg:text-lg relative">
            Planned Communites
          </p>
          <p className="text-sm md:text-base font-normal z-10 relative">
            320+ properties
          </p>
          <Image
            src={"/assets/categories/image-4.png"}
            height={100}
            width={100}
            alt={"planned-communities"}
            className="absolute z-0 bottom-0 h-2/3 w-full left-0"
          />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
