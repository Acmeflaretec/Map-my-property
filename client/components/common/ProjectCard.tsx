import Image from "next/image";
import React from "react";
import { Icons } from "../common/Icons";
import { ProjectData } from "@/data/projectData";

const ProjectCard: React.FC<{ data: ProjectData }> = ({ data }) => {
  return (
    <div
      key={data?.title}
      className="flex flex-col items-center rounded-3xl p-1 border-2"
    >
      <div className="h-48 w-[16.5rem] rounded-3xl overflow-hidden border-2">
        <Image
          src={data?.image}
          height={300}
          width={300}
          alt={""}
          className="h-3/4"
        />
        <div className="flex justify-between items-center p-1 pr-2 h-1/4 bg-gradient-to-r from-[#f4f3f3] to-white bg-opacity-50">
          <div className="flex justify-start items-center gap-1">
            <Image
              src={data?.builder_image}
              height={40}
              width={40}
              alt={""}
              className="rounded-full border-2"
            />
            <div>
              <p className="text-xs">{data?.builder_name}</p>
              <p className="text-[10px]">{data?.builder_helpertext}</p>
            </div>
          </div>
          <button className="bg-[#0C0E0D] flex items-center z-30 h-fit text-[10px] text-white p-[2px] pl-3 pr-1 rounded-lg">
            Detailed View
            <Icons.rightArrow />
          </button>
        </div>
      </div>
      <div className="px-3 py-2 flex flex-col gap-1">
        <p className="text-xl font-bold">{data?.title}</p>
        <p className="text-xs">
          {data?.price}
          <br />
          {data?.desc}
        </p>
        <p className="flex text-xs items-center gap-2">
          <Icons.location />
          {data?.location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
