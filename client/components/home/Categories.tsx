import { categoryData } from "@/data/categoryData";
import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 gap-8 lg:gap-12 mt-28 px-2 md:px-8">
      <p className="text-sm md:text-base max-w-md font-normal text-center">
        Explore the best properties with ease - personalized searches, real-time
        updates, and expert guidance all in one place.
      </p>
      <div className="flex flex-wrap gap-1 md:gap-4 xl:gap-8 justify-center">
        {categoryData.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              `relative w-[49%] md:w-60 h-48 md:h-60 rounded-3xl p-4 overflow-hidden border-2`,
              item.background
            )}
          >
            <p className="font-black z-10 lg:text-lg relative">{item?.title}</p>
            <p className="text-sm md:text-base font-normal z-10 relative">
              320+ properties
            </p>
            <Image
              src={item?.image}
              height={100}
              width={100}
              alt={item?.title}
              className={cn("absolute z-0", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
