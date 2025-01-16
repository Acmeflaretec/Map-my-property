import { BuilderType } from "@/utils/interface";
import React from "react";

const BuilderInfo: React.FC<{ data: BuilderType }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <p className="text-xl md:text-2xl max-w-2xl font-semibold text-gray-500">
          Our Vision
        </p>
        <p className="text-xs lg:text-base text-gray-500">{data?.vision}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-2 justify-between rounded-2xl border-2 overflow-hidden">
        {data?.features?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 outline outline-1 outline-gray-200"
          >
            <p className="text-center">{item?.text}</p>
            <p
              className="text-gray-500 text-center text-xs lg:text-sm"
              dangerouslySetInnerHTML={{
                __html: item?.helpertext?.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuilderInfo;
