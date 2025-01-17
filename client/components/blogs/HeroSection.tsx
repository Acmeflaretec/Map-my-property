"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icons } from "../common/Icons";
import Link from "next/link";
import toast from "react-hot-toast";
import { getBlogs } from "@/utils/api";
import { BlogType } from "@/utils/interface";
import { generateImageUrl } from "@/utils/generateImageUrl";

const HeroSection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<BlogType | null>();
  const [imgSrc, setImgSrc] = useState<string>("/assets/banner.png");

  const handleImageError = () => {
    setImgSrc("/assets/banner.png");
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getBlogs({ banner: true });
      const data = res?.data?.data?.[0] || null;
      setData(data);
      setImgSrc(generateImageUrl(data?.image));
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-full md:w-3/5 xl:w-1/2 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
            {data?.title}
          </h1>
          <div className="flex gap-4 items-center">
            <p className="flex text-xs md:text-sm gap-1 md:gap-2">
              Posted
              <Icons.date />
              {data?.updatedAt ? new Date(data.createdAt).toDateString() : ""}
            </p>{" "}
            |
            <p className="flex text-xs md:text-sm gap-1 md:gap-2">
              Last updated
              <Icons.date />
              {data?.updatedAt ? new Date(data.updatedAt).toDateString() : ""}
            </p>
          </div>
        </div>
        <p className="hidden md:block text-base w-2/5 lg:text-xl xl:w-1/2 max-w-lg">
          {data?.subtitle}
        </p>
      </div>
      <div className="w-full relative overflow-hidden h-[300px] md:h-[500px] rounded-3xl">
        {loading && (
          <div className="absolute z-1 bg-black w-full h-full flex items-center justify-center text-white">
            loading...
          </div>
        )}
        <div className="absolute inset-0 transition-transform duration-700 ease-in-out">
          <Image
            src={imgSrc}
            alt="background cover image"
            onError={handleImageError}
            className="absolute block w-full h-full object-cover"
            width={4920}
            height={3080}
          />
        </div>
        <div className="absolute z-20 w-full bg-gradient-to-t from-gray-800/80 to-transparent h-24 md:h-36 bottom-0 backdrop-blur-[2px]" />
        <div className="absolute z-30 w-full max-w-xs md:max-w-md bottom-5 md:bottom-10 left-4 md:left-12">
          <p className="hidden md:block text-base md:text-lg font-bold text-white">
            {data?.title}
          </p>
          <p className="text-base md:hidden font-bold text-white">
            {data?.subtitle}
          </p>
          <p className="hidden md:block md:text-base max-w-4xl text-white">
            {data?.description?.substring(0, 100)}...
          </p>
          <Link
            href={`blogs/${data?._id}`}
            className="hidden md:block h-1 rounded-full text-blue-400"
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-2 p-2">
        <h1 className="font-bold text-lg">{data?.title}</h1>
        <p className="text-base">{data?.description?.substring(0, 200)}...</p>
        <Link
          href={`blogs/${data?._id}`}
          className="h-1 rounded-full text-blue-400"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
