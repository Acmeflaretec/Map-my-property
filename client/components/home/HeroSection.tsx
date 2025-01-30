"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import Banner from "./Banner";
import Dropdown from "./Dropdown";
import { getShortPriceRange } from "@/utils/getPriceRange";

const HeroSection: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [filter, setFilter] = useState({
    location: "Chandapura, Bangalore",
    resident_type: "",
    price: "",
  });

  return (
    <div className="relative flex flex-col items-center text-gray-800 mt-20 md:mt-28 mx-1 md:mx-4 lg:mt-32 h-[50vh] md:h-[70vh]">
      <Banner />
      <div className="absolute hidden md:flex bg-white border-2 mb-2 -bottom-12 w-[95%] lg:w-4/5 xl:w-2/3 h-28 rounded-3xl p-2">
        <div className="w-[35%] p-2 lg:p-4 flex flex-col gap-2">
          <p className="flex gap-1 items-center">
            <Icons.location /> Location
          </p>
          {filter?.location ? (
            <p className="flex items-center gap-1 bg-[#F2E6B8] rounded-lg px-1 py-[2px] w-fit">
              {filter?.location}
              <Icons.close
                className="border border-black rounded-full w-5 h-5 p-1 text-black cursor-pointer"
                onClick={() => setFilter((prev) => ({ ...prev, location: "" }))}
              />
            </p>
          ) : (
            <p className="flex items-center gap-1 bg-[#F2E6B8] rounded-lg px-1 py-[2px] w-fit">
              <input
                tabIndex={1}
                placeholder="Your prefered location"
                value={location}
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none text-sm px-2 w-full bg-transparent"
              />
              <Icons.rightArrow
                className="border border-black rounded-full w-5 h-5 p-1 text-black cursor-pointer"
                onClick={() => setFilter((prev) => ({ ...prev, location }))}
              />
            </p>
          )}
        </div>
        <div className="w-[30%] border-x-2 border-stone-200 flex flex-col justify-center gap-1 p-2 lg:p-4">
          <Dropdown
            onSelect={(value) =>
              setFilter((prev) => ({ ...prev, resident_type: value }))
            }
            value={filter.resident_type}
            options={[
              { value: "apartments", label: "Apartments" },
              { value: "villas", label: "Villas" },
              { value: "plots", label: "Plots" },
              { value: "townships", label: "Townships" },
            ]}
          >
            <p className="flex gap-2">
              <Icons.home />
              You're looking for
            </p>
            <Icons.rightArrow />
          </Dropdown>
          {filter?.resident_type && (
            <p className="flex items-center gap-1 bg-[#F2E6B8] rounded-xl min-w-20 px-4 py-[2px] w-fit">
              {filter?.resident_type}
              <Icons.close
                className="border border-black rounded-full w-5 h-5 p-1 text-black cursor-pointer"
                onClick={() =>
                  setFilter((prev) => ({ ...prev, resident_type: "" }))
                }
              />
            </p>
          )}
        </div>
        <div className="w-[35%] flex p-2 items-center justify-between">
          <div className="w-1/2 flex flex-col justify-center gap-1 p-1 lg:p-3">
            <Dropdown
              onSelect={(value) =>
                setFilter((prev) => ({ ...prev, price: value }))
              }
              value={filter.price}
              options={[
                { value: "100000 - 1000000", label: "below 10L" },
                { value: "1000000 - 5000000", label: "10L - 50L" },
                { value: "5000000 - 10000000", label: "50L - 1Cr" },
                { value: "10000000 - 20000000", label: "1Cr - 2Cr" },
                { value: "20000000 - 1000000000", label: "above 2Cr" },
              ]}
            >
              <p className="flex justify-between gap-1">₹ Budget</p>
              <Icons.rightArrow />
            </Dropdown>
            {filter?.price && (
              <p className="flex items-center text-xs lg:text-sm gap-1 bg-[#F2E6B8] rounded-xl min-w-20 px-1 py-[2px] w-fit">
                {getShortPriceRange(filter?.price)}
                <Icons.close
                  className="border border-black rounded-full w-5 h-5 p-1 text-black cursor-pointer"
                  onClick={() => setFilter((prev) => ({ ...prev, price: "" }))}
                />
              </p>
            )}
          </div>
          <CustomButton
            type="primary"
            href={`/property?location=${filter.location}&price=${filter.price}&resident_type=${filter.resident_type}`}
          >
            Search <Icons.search />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
