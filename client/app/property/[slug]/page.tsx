import React from "react";
import ContactCard from "@/components/common/ContactCard";
import Banner from "@/components/Property/Banner";
import Faqs from "@/components/Property/Faqs";
import Features from "@/components/Property/Features";
import Testimonials from "@/components/Property/Testimonials";
import { propertyData } from "@/data/propertyData";
import ContactForm from "@/components/Property/ContactForm";
import AboutBuilder from "@/components/Property/AboutBuilder";
import ExpertOpinion from "@/components/Property/ExpertOpinion";
import Pricing from "@/components/Property/Pricing";
import Plans from "@/components/Property/Plans";
import MasterPlan from "@/components/Property/MasterPlan";

interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const property_name = params?.slug;
  const data = propertyData;
  data.title = property_name;
  return (
    <main className="w-screen xl:max-w-screen-xl overflow-visible">
      <div className="flex flex-col gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 p-2 w-full">
        <Banner data={data} />
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="flex flex-col w-full xl:w-2/3 gap-8 md:gap-12">
            <Features data={data?.features} />
            <Pricing data={data?.pricing} />
            <Plans data={data?.plans}/>
            <MasterPlan data={data?.masterPlan}/>
            <Faqs data={data?.faqs} />
            <ExpertOpinion data={data?.expertOpinions} />
            <AboutBuilder data={data?.builder} />
            <Testimonials data={data?.testimonials} />
          </div>
          <div className="w-full flex flex-col gap-8 xl:w-1/3 min-h-screen">
            <ContactForm />
            <div className="sticky top-32">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
