"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../common/Icons";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { BlogType } from "@/utils/interface";
import { getBlogs } from "@/utils/api";
import toast from "react-hot-toast";
import CarousalCards from "./CarousalCards";
import blogData from "@/data/blogData";

const Carousal: React.FC = () => {
  const sm = useMediaQuery({ query: "(max-width: 600px)" });
  const [activeIndex, setActiveIndex] = useState(0);
  const top = [0, 120, 60, 60, 60];
  const [data, setData] = useState<BlogType[] | []>();

  const fetchData = async () => {
    try {
      const res = await getBlogs({ isImportant: true });
      const data = res?.data?.data || blogData;
      setData(data);
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
    <div className="relative pl-2 mt-8 md:p-4">
      <h1 className="font-black text-xl py-8">Fresh Reads From The Blogs</h1>
      <motion.div
        initial={{ scale: sm ? 0.68 : 0.85, y: 10 }}
        className="absolute top-20 right-14 md:right-20 md:top-12 xl:right-16 z-10 flex gap-2"
      >
        <button className="swiper-button-next bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
        </button>
        <button className="swiper-button-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-12 !h-12 transition-all duration-500 rounded-full border-black border-opacity-20">
          <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
        </button>
      </motion.div>
      <div>
        <Swiper
          loop={true}
          spaceBetween={20}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1280: { slidesPerView: 5, spaceBetween: 10 },
            990: { slidesPerView: 4, spaceBetween: 10 },
            760: { slidesPerView: 3, spaceBetween: 10 },
            300: { slidesPerView: 2, spaceBetween: 2 },
          }}
          autoHeight={true}
          modules={[Navigation, Autoplay]}
        >
          {data?.map((item, idx) => {
            const pos =
              idx - activeIndex < 0
                ? idx - activeIndex + data.length
                : idx - activeIndex;
            return (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    transition: "top 0.5s ease",
                    position: "relative",
                    top: `${top[pos]}px`,
                  }}
                  className="min-h-[400px] md:min-h-[470px]"
                >
                  <CarousalCards data={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousal;
