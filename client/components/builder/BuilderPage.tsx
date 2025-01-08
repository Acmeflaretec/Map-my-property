import React from "react";
import ProjectCard from "../common/ProjectCard";
import ContactCard from "../common/ContactCard";
import Testimonials from "./Testimonials";
import { builderData } from "@/data/builderData";
import BuilderInfo from "./BuilderInfo";
import AboutBuilder from "./AboutBuilder";

const BuilderPage: React.FC = () => {
  return (
    <div className="flex gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between min-h-screen">
      <div className="w-1/3 hidden xl:block">
        <div className="flex flex-col gap-8 sticky top-32">
          <AboutBuilder data={builderData} />
          <ContactCard />
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto xl:w-2/3 max-w-[54rem] gap-4 md:gap-8 p-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-tight">
            {builderData?.title}
          </h1>
          <p className="text-sm md:text-base">{builderData?.helpertext}</p>
        </div>
        <div className="xl:hidden">
          <AboutBuilder data={builderData} />
        </div>
        <BuilderInfo data={builderData} />
        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl max-w-2xl font-semibold text-gray-500">
            Our Projects
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 justify-between">
            {builderData?.projects?.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
        </div>
        <Testimonials data={builderData?.testimonials} />
        <div className="xl:hidden"><ContactCard /></div>
      </div>
    </div>
  );
};

export default BuilderPage;
