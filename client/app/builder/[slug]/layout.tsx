import { getBuilderById } from "@/utils/api";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const _id = resolvedParams?.slug;
  const res = await getBuilderById(_id);
  const data = res?.data?.data;
  if (data) {
    return {
      title: `${data?.title} | Map My Property`,
      description: data?.subtitle || "Explore your perfect property.",
    };
  }

  return {
    title: "Builder Not Found | Map My Property",
    description: "The requested property could not be found.",
  };
}

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen">
      <Suspense>{children}</Suspense>
    </main>
  );
};

export default page;
