"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import ProjectCard from "../common/ProjectCard";
import ContactCard from "../common/ContactCard";
import { useSearchParams } from "next/navigation";
import { ProjectType, PaginatedResponse } from "@/utils/interface";
import { getProjects } from "@/utils/api";
import toast from "react-hot-toast";

const ProjectPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
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
  const [search, setSearch] = useState<string>(query.replaceAll("-", " "));

  const fetchData = async () => {
    try {
      const propertyFilter = {
        search,
        page: currentPage,
        perPage: 9,
      };
      setLoading(true);
      const res = await getProjects(propertyFilter);
      const paginatedData = res?.data?.data as PaginatedResponse<ProjectType>;
      setData(paginatedData?.docs || []);
      setMessage(res?.data?.message || "");
      setTotalPages(paginatedData?.totalPages || 1);
      setLoading(false);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(handler);
  }, [filter, search, currentPage]);

  useEffect(() => {
    setSearch(params.get("q")?.replaceAll("-", " ") ?? "");
  }, [params]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between min-h-screen">
      <div className="flex flex-col w-full mx-auto xl:w-2/3 max-w-[54rem] gap-2 xl:gap-4 p-2">
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
        {loading ? (
          <p className="px-2 text-xs md:text-sm">loading...</p>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 justify-between">
              <p className="col-span-2 md:col-span-3 px-2 text-xs md:text-sm">
                {message}
              </p>
              {data.map((item, index) => (
                <ProjectCard key={index} data={item} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icons.leftArrow />
                </button>
                {[...Array(totalPages)].map((_, idx) => {
                  const pageNumber = idx + 1;
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 &&
                      pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={idx}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          currentPage === pageNumber
                            ? "bg-[#FFFBEA] border-[#8E7D3A] text-black"
                            : "bg-white hover:bg-gray-100"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <span
                        key={idx}
                        className="flex items-center justify-center w-10 h-10"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icons.rightArrow />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="w-1/3 static hidden xl:flex flex-col gap-8">
        {/* <Filter filter={filter} setFilter={setFilter} /> */}
        <div className="sticky top-32">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
