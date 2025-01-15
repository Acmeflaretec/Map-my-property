"use client";
import React, { useEffect, useState } from "react";
import { sectionData } from "@/data/sectionData";
import ProjectCard from "../common/ProjectCard";
import { getSections } from "@/utils/api";
import { SectionType } from "@/utils/interface";
import toast from "react-hot-toast";

const Sections: React.FC = () => {
  const [data, setData] = useState<SectionType[] | []>(sectionData);
  const fetchData = async () => {
    try {
      const res = await getSections({});
      const data = res?.data?.data || null;
      setData(data?.length ? data : sectionData);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data?.map((item) => (
    <div key={item?.title} className="pl-2 md:px-4 pb-12">
      <h1 className="font-black text-xl pb-4">{item?.title}</h1>
      <div className="flex overflow-x-auto space-x-2 md:space-x-4 py-4">
        {item?.projects?.map((item, index) => (
          <ProjectCard data={item} key={index} />
        ))}
      </div>
    </div>
  ));
};

export default Sections;
