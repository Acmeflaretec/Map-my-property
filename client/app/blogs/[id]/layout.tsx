import { getBlogsById } from "@/utils/api";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const _id = resolvedParams?.id;
  const res = _id?.length === 24 ? await getBlogsById(_id) : null;
  const data = res?.data?.data;
  if (data) {
    return {
      title: `${data?.title} | Map My Property`,
      description: data?.subtitle || "Explore your perfect property.",
    };
  }

  return {
    title: "Blog Not Found | Map My Property",
    description: "The requested blog could not be found.",
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
