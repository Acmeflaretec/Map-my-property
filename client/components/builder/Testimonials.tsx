"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../common/Icons";
import Image from "next/image";
import { TestimonialType } from "@/utils/interface";

const Testimonials: React.FC<{ data: TestimonialType[] }> = ({ data }) => {
   return (
      <div className="relative">
         <p className="text-xl pl-2 md:text-2xl max-w-2xl font-semibold text-gray-500">
            Reviews
         </p>
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
                  760: { slidesPerView: 3, spaceBetween: 10 },
                  300: { slidesPerView: 1, spaceBetween: 0 },
               }}
               autoHeight={true}
               modules={[Navigation, Autoplay]}
            >
               {data.map((item, idx) => {
                  return (
                     <SwiperSlide key={idx}>
                        <div className="flex flex-col gap-2 bg-white w-full h-full p-4 rounded-3xl border-2 border-stone-200">
                           <div className="flex items-center gap-2">
                              <Image
                                 src={`/assets/${item?.image}`}
                                 width={40}
                                 height={40}
                                 alt="login"
                                 className="w-10 h-10 rounded-full"
                              />
                              <p>{item?.author}</p>
                           </div>
                           <p className="text-xs lg:text-sm">{item?.description}</p>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonials;