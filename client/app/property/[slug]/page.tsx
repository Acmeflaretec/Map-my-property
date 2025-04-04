import React from "react";
import { Metadata } from "next";
import { getProjectById } from "@/utils/api";
import Banner from "@/components/Property/Banner";
import Features from "@/components/Property/Features";
import Pricing from "@/components/Property/Pricing";
import Plans from "@/components/Property/Plans";
import MasterPlan from "@/components/Property/MasterPlan";
import Faqs from "@/components/Property/Faqs";
import ExpertOpinion from "@/components/Property/ExpertOpinion";
import AboutBuilder from "@/components/Property/AboutBuilder";
import Testimonials from "@/components/Property/Testimonials";
import ContactForm from "@/components/Property/ContactForm";
import ContactCard from "@/components/common/ContactCard";
import Overview from "@/components/Property/Overview";
import { generateImageUrl } from "@/utils/generateImageUrl";
import ProjectGallery from "@/components/Property/ProjectGallery";
import Schema from "@/components/Schema";
import {
  generatePropertySchema,
  generateBreadcrumbSchema,
} from "@/utils/schema";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const _id = resolvedParams?.slug;
  const res = await getProjectById(_id);
  const data = res?.data?.data;

  if (data) {
    return {
      title: `${data?.metaTitle || data?.title} | Map My Property`,
      description:
        data?.metaDescription ||
        data?.subtitle ||
        "Explore your perfect property.",
      keywords:
        data?.metaKeywords ||
        "property mapping, land survey, property measurement, real estate mapping, property documentation, land mapping services, property survey",
      openGraph: {
        title: `${data?.metaTitle || data?.title} | Map My Property`,
        description:
          data?.metaDescription ||
          data?.subtitle ||
          "Explore your perfect property.",
        url: `https://www.mapmyproperty.in/property/${_id}`,
        siteName: "Map My Property",
        images: [
          {
            url: generateImageUrl(data?.imageGallery[0]?.src),
            width: 1200,
            height: 630,
            alt: "Map My Property Logo",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${data?.metaTitle || data?.title} | Map My Property`,
        description:
          data?.metaDescription ||
          data?.subtitle ||
          "Explore your perfect property.",
        creator: "@mapmyproperty",
        images: [generateImageUrl(data?.imageGallery[0]?.src)],
      },
      alternates: {
        canonical: `https://www.mapmyproperty.in/property/${_id}`,
      },
    };
  }

  return {
    title: "Property Not Found | Map My Property",
    description: "The requested property could not be found.",
  };
}

const Page: React.FC<Props> = async ({ params }) => {
  const resolvedParams = await params;
  const _id = resolvedParams?.slug;
  const res = await getProjectById(_id);
  const data = res?.data?.data;
  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1>Property Not Found</h1>
      </main>
    );
  }

  const propertySchema = generatePropertySchema(data);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Properties", url: "/property" },
    { name: data?.title || "", url: `/property/${data?.href}` },
  ]);

  return (
    <>
      <Schema schema={propertySchema} />
      <Schema schema={breadcrumbSchema} />
      <main className="w-screen xl:max-w-screen-xl overflow-visible">
        <div className="flex flex-col gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 p-2 w-full">
          {data && <Banner data={data} />}
          <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
            <div className="flex flex-col w-full lg:w-2/3 gap-8 md:gap-12">
              {!!data?.description && <Overview data={data.description} />}
              {!!data?.imageGallery && (
                <ProjectGallery data={data.imageGallery} />
              )}
              {!!data?.features?.length && <Features data={data.features} />}
              {!!data?.accommodation?.length && (
                <Pricing data={data.accommodation} />
              )}
              {!!data?.plans?.length && <Plans data={data.plans} />}
              {!!data?.masterPlan && <MasterPlan data={data.masterPlan} />}
              {!!data?.faqs?.length && <Faqs data={data.faqs} />}
              {!!data?.expertOpinions?.length && (
                <ExpertOpinion data={data.expertOpinions} />
              )}
              {!!data?.builder && <AboutBuilder data={data.builder} />}
              {!!data?.testimonials?.length && (
                <Testimonials data={data.testimonials} />
              )}
            </div>
            <div className="w-full flex flex-col gap-8 lg:w-1/3 min-h-screen">
              <ContactForm data={data} />
              <div className="sticky top-32">
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
