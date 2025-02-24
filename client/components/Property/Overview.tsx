"use client";
import { formatDescription } from "@/utils/formatDescription";
import React from "react";

const Overview: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="font-bold text-base md:text-xl">Project Overview</h1>
      <div
        className="formatted-content"
        dangerouslySetInnerHTML={formatDescription(data)}
      />
    </div>
  );
};

export default Overview;
