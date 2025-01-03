"use client"
import React, { useState } from "react";
import Filter from "./Filter";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import { projectData } from "@/data/projectData";
import ProjectCard from "../common/ProjectCard";
import ContactCard from "../common/ContactCard";

const ProjectPage: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between min-h-screen">
      <div className="w-1/3 static hidden xl:flex flex-col gap-8">
        <Filter />
        <ContactCard />
      </div>
      <div className="flex flex-col w-full mx-auto xl:w-2/3 max-w-[54rem] gap-4 xl:gap-8 p-2">
        <div className="flex gap-1 xl:gap-2 w-full">
          <div onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex xl:hidden justify-center items-center border border-stone-300 rounded-lg p-2">
            <Icons.filter />
          </div>
          <div className="flex items-center border border-stone-300 rounded-lg text-sm p-1 pl-4 w-full">
            <Icons.search />
            <input
              placeholder="Explore the best properties"
              className="outline-none text-sm px-2 w-full bg-transparent"
            />
          </div>
          <CustomButton type="primary" className="hidden lg:flex">
            Search <Icons.search />
          </CustomButton>
        </div>
        <div
          id="dropdown"
          className={`xl:hidden z-10 overflow-hidden transition-height duration-300 pop ${isDropdownOpen
            ? 'opacity-1 p-1'
            : 'max-h-[1px] opacity-0'
            } w-full rounded-lg shadow`}
        >
          <Filter />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 justify-between">
          {projectData.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
