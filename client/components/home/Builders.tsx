"use client";
import React, { useEffect, useState } from "react";
import { getBuilders } from "@/utils/api";
import { BuilderType } from "@/utils/interface";
import toast from "react-hot-toast";
import Image from "next/image";
import { generateImageUrl } from "@/utils/generateImageUrl";
import { Icons } from "../common/Icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Builders: React.FC = () => {
  const [data, setData] = useState<BuilderType[] | []>();
  const fetchData = async () => {
    try {
      const res = await getBuilders({});
      const data = res?.data?.data || null;
      setData(data?.length ? data : []);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative pl-2 md:px-4 pb-12">
      <h1 className="font-black text-xl pb-2">Our Trusted Builders</h1>
      <div className="absolute top-0 right-2 z-10 flex gap-2">
        <button className="swiper-button3-next bg-white group !p-3 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button3-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </div>
      <div className="pt-4 lg:pt-8">
        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button3-next",
            prevEl: ".swiper-button3-prev",
          }}
          breakpoints={{
            760: { slidesPerView: 5, spaceBetween: 10 },
            300: { slidesPerView: 1, spaceBetween: 0 },
          }}
          autoHeight={true}
          modules={[Navigation, Autoplay]}
        >
          {data?.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Link
                  href={`/builder/${item?.url}`}
                  key={item?.title}
                  className="flex flex-col gap-2 bg-white w-full h-56 p-4 rounded-3xl border-2 border-stone-200"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={generateImageUrl(item?.logo)}
                      width={40}
                      height={40}
                      alt="login"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="font-bold">{item?.title}</p>
                  </div>
                  <p className="text-xs lg:text-sm font-semibold">
                    {item?.subtitle}
                  </p>
                  <p className="text-xs lg:text-sm h-full overflow-hidden text-ellipsis">
                    {item?.description}
                  </p>
                  <p className="flex items-center gap-2 text-xs lg:text-sm text-blue-500">
                    read more <Icons.rightArrow />
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Builders;
