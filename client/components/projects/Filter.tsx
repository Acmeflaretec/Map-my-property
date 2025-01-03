"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons";
import FilterSection, {
  bedroomOptions,
  residentTypeOptions,
} from "./FilterSection";
import RangeSlider from "./RangeSlider";

const Filter: React.FC = () => {
  const [filter, setFilter] = useState({
    bedroom: "1bhk",
    resident_type: "villas",
  });
  return (
    <div className="flex h-fit flex-col border border-stone-300 rounded-xl p-6 py-8 gap-6">
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
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.bed />
          Bedrooms
        </p>
        <FilterSection
          options={bedroomOptions}
          selectedKey={filter.bedroom}
          onSelect={(key) => setFilter((prev) => ({ ...prev, bedroom: key }))}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.priceTag />
          Price
        </p>
        <RangeSlider min={100000} max={1000000000} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.building />
          Resident Type
        </p>
        <FilterSection
          options={residentTypeOptions}
          selectedKey={filter.resident_type}
          onSelect={(key) =>
            setFilter((prev) => ({ ...prev, resident_type: key }))
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.area />
          Area
        </p>
        <RangeSlider min={100000} max={1000000000} />
      </div>
    </div>
  );
};

export default Filter;
