"use client"
import { PropertyData } from '@/data/propertyData'
import React, { useState } from 'react'
import { Icons } from '../common/Icons';
import Image from 'next/image';

const Carousel: React.FC<{ data: PropertyData }> = ({ data }) => {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data?.images.length - 1 : prevIndex - 1));
   };

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === data?.images.length - 1 ? 0 : prevIndex + 1));
   };

   const goToSlide = (index: number) => {
      setCurrentIndex(index);
   };
   return (
      <div className="w-full relative overflow-hidden h-[500px] rounded-3xl">
         {data?.images?.map((src, index) => (
            <div
               key={index}
               className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentIndex
                  ? 'translate-x-0'
                  : index < currentIndex
                     ? '-translate-x-full'
                     : 'translate-x-full'
                  }`}
            >
               <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="absolute block w-full h-full object-cover"
                  width={4920}
                  height={3080}
               />
            </div>
         ))}
         <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-40 space-x-3 rtl:space-x-reverse">
            {data?.images?.map((_, index) => (
               <button
                  key={index}
                  type="button"
                  className={`w-16 h-1 rounded-full ${index === currentIndex ? 'bg-lime-200' : 'bg-gray-300'
                     }`}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
               ></button>
            ))}
         </div>
         <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
         >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50">
               <Icons.leftArrow />
            </span>
         </button>
         <button
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
         >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50">
               <Icons.rightArrow />
            </span>
         </button>
      </div>
   )
}

export default Carousel