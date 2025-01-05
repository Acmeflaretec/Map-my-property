import React from 'react';
import ContactCard from '@/components/common/ContactCard';
import Banner from '@/components/Property/Banner';
import Faqs from '@/components/Property/Faqs';
import Specifications from '@/components/Property/Specifications';
import Testimonials from '@/components/Property/Testimonials';
import { propertyData } from '@/data/propertyData';
import { Metadata } from 'next';
import ContactForm from '@/components/Property/ContactForm';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property_name = params?.slug?.toUpperCase();
  return {
    title: `${property_name} | Map My Property`,
    description: `Explore and find your perfect property at Map My Property.`,
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const property_name = params?.slug;
  const data = propertyData;
  data.title = property_name;
  return (
    <main className="w-screen xl:max-w-screen-xl overflow-visible">
      <div className="flex flex-col gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full">
        <Banner data={data} />
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
          <div className="flex flex-col w-full xl:w-2/3 gap-4 xl:gap-8">
            <Specifications data={data} />
            <Faqs data={data} />
            <Testimonials data={data.testimonials} />
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
