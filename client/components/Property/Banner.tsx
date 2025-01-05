
import { PropertyData } from '@/data/propertyData'
import React from 'react'
import { Icons } from '../common/Icons'
import Carousel from './Carousel'

const Banner: React.FC<{ data: PropertyData }> = ({ data }) => {
   return (
      <div className="flex flex-col gap-8">
         <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-1/2 max-w-xl">
               <h1 className="text-5xl font-bold tracking-wide leading-tight">{data?.title} sss</h1>
               <p className="flex text-xs md:text-base items-center gap-1 md:gap-2">
                  <Icons.location />
                  {data?.location}
               </p>
            </div>
            <p className="text-xl w-1/2 max-w-lg">
               Explore the best properties with ease - personalized
               serches, real-time updates, and expert guidance all in
               one place
            </p>
         </div>
         <Carousel data={data} />
         <div className="flex flex-col gap-4">
            <h1 className="font-bold text-base md:text-xl">Project Overview</h1>
            <p className="text-xl w-1/2 max-w-4xl">{data?.desc}</p>
         </div>
      </div>
   )
}

export default Banner