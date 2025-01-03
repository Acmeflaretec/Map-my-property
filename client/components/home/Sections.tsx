import React from "react";
import { sectionData } from "@/data/sectionData";
import ProjectCard from "../common/ProjectCard";

const Sections: React.FC = () => {
  return sectionData.map((item) => (
    <div className="pl-2 md:px-4 pb-12">
      <h1 className="font-black text-xl pb-4">{item?.title}</h1>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {item?.projects.map((item) => (
          <ProjectCard data={item} />
        ))}
      </div>
    </div>
  ));
};

export default Sections;
