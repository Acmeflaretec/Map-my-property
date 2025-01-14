"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../common/Icons";

interface BlogCardProps {
  data: {
    _id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="relative rounded-2xl h-[14rem] flex justify-center items-center overflow-hidden group font-bricolage cursor-pointer"
      onClick={() => router.push(`blogs/${data?._id}`)}
    >
      <img
        src={data?.image}
        alt="background cover image"
        className="absolute object-cover object-center h-full transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end px-4 pt-8 pb-10 opacity-90 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex flex-col gap-2">
          <div className="hidden md:flex gap-2 text-xs text-white">
            <button className="flex items-center gap-1 backdrop-blur-lg py-1 bg-black border border-stone-600 bg-opacity-30 rounded-full px-4">
              <Icons.date className="text-yellow-500" />
              {data?.updatedAt ? new Date(data.updatedAt).toDateString() : ""}
            </button>
            <button className="flex items-center gap-1 backdrop-blur-lg py-1 bg-black border border-stone-600 bg-opacity-30 rounded-full px-4 uppercase">
              <Icons.breifcase className="text-yellow-600" />
              Blog
            </button>
          </div>
          <span className="text-sm md:text-base text-white">
            {data?.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
