import React from "react";
import { Icons } from "../common/Icons";

const ExpertOpinion: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <div className="flex flex-col border rounded-2xl overflow-hidden">
      <p className="font-bold p-4">Expert Opinions</p>
      <div className="w-full flex flex-col">
        {data.map((item, index) => (
          <div key={index} className="flex border-t-2 gap-4 p-4 text-gray-500">
            <div className="border h-fit rounded-full p-1">
              <span className="rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold bg-black text-white">
                <Icons.check />
              </span>
            </div>
            <p className="">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertOpinion;
