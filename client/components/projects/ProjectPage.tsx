"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import ProjectCard from "../common/ProjectCard";
import ContactCard from "../common/ContactCard";
import { useSearchParams } from "next/navigation";
import { ProjectType } from "@/utils/interface";
import { getProjects } from "@/utils/api";
import toast from "react-hot-toast";

const ProjectPage: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const price = params.get("price") ?? "";
  const [min, max] = price ? price?.split("-") : [100000, 100000000];
  const [data, setData] = useState<ProjectType[]>([]);
  const [filter, setFilter] = useState({
    bedroom: "",
    resident_type: params.get("resident_type") ?? "",
    location: params.get("location") ?? "",
    price: { min: Number(min) ?? 100000, max: Number(max) ?? 100000000 },
    area: { min: 100, max: 100000 },
  });
  const [search, setSearch] = useState<string>(query.replace("-", " "));

  const fetchData = async () => {
    try {
      const propertyFilter = {
        ...filter,
        price: JSON.stringify(filter.price),
        area: JSON.stringify(filter.area),
        search,
      };
      const res = await getProjects(propertyFilter);
      const data = res?.data?.docs || null;
      setData(data?.length ? data : []);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, [filter, search]);
  useEffect(() => {
    setSearch(params.get("q")?.replace("-", " ") ?? "");
  }, [params]);
  return (
    <div className="flex gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between min-h-screen">
      <div className="w-1/3 static hidden xl:flex flex-col gap-8">
        <Filter filter={filter} setFilter={setFilter} />
        <ContactCard />
      </div>
      <div className="flex flex-col w-full mx-auto xl:w-2/3 max-w-[54rem] gap-4 xl:gap-8 p-2">
        <div className="flex gap-1 xl:gap-2 w-full">
          <div
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex xl:hidden justify-center items-center border border-stone-300 rounded-lg p-2"
          >
            <Icons.filter />
          </div>
          <div className="flex items-center border border-stone-300 rounded-lg text-sm p-1 pl-4 w-full">
            <Icons.search />
            <input
              placeholder="Explore the best properties"
              className="outline-none text-sm px-2 w-full bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <CustomButton type="primary" className="hidden lg:flex">
            Search <Icons.search />
          </CustomButton>
        </div>
        <div
          id="dropdown"
          className={`xl:hidden z-10 overflow-hidden transition-height duration-300 pop ${
            isDropdownOpen ? "opacity-1 p-1" : "max-h-[1px] opacity-0"
          } w-full rounded-lg shadow`}
        >
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 justify-between">
          {data?.length ? (
            data.map((item, index) => <ProjectCard key={index} data={item} />)
          ) : (
            <div className="col-span-3">
              <p className="px-4 text-xs md:text-sm">
                Oops! No results found, try changing filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
