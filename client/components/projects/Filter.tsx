"use client";
import React from "react";
import { Icons } from "../common/Icons";
import FilterSection from "./FilterSection";
import RangeSlider from "./RangeSlider";

interface Props {
  filter: { bedroom: string; resident_type: string; location: string; price: { min: number; max: number }; area: { min: number; max: number } };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      bedroom: string;
      resident_type: string;
      location: string;
      price: { min: number; max: number };
      area: { min: number; max: number };
    }>
  >;
}

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const options1: string[] = ["1BHK", "2BHK", "3BHK", "4BHK", "studio"];
  const options2: string[] = ["apartments", "villas", "plots", "townships"];

  return (
    <div className="flex h-fit flex-col border border-stone-300 rounded-xl p-2 xl:p-6 py-8 gap-6">
      <h1 className="flex gap-3 uppercase font-bold">
        <Icons.filter />
        Filter
      </h1>
      <div className="flex items-center border border-stone-300 rounded-lg text-sm p-2 w-full">
        <Icons.location />
        <input
          placeholder="Enter your preferred location"
          id="location"
          className="outline-none text-sm px-2 w-full bg-transparent"
          value={filter.location}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, location: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.bed />
          Bedrooms
        </p>
        <FilterSection
          options={options1}
          selectedKey={filter.bedroom}
          onSelect={(key) =>
            setFilter((prev) => ({
              ...prev,
              bedroom: filter.bedroom === key ? "" : key,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.priceTag />
          Price
        </p>
        <RangeSlider
          min={100000}
          max={100000000}
          setFilter={(value) =>
            setFilter((prev) => ({ ...prev, price: value }))
          }
          filter = {filter?.price}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.building />
          Resident Type
        </p>
        <FilterSection
          options={options2}
          selectedKey={filter.resident_type}
          onSelect={(key) =>
            setFilter((prev) => ({
              ...prev,
              resident_type: filter.resident_type === key ? "" : key,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.area />
          Area
        </p>
        <RangeSlider
          min={100}
          max={100000}
          setFilter={(value) => setFilter((prev) => ({ ...prev, area: value }))}
          filter = {filter?.area}
        />
      </div>
    </div>
  );
};

export default Filter;
