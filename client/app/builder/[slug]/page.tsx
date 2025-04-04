import BuilderPage from "@/components/builder/BuilderPage";
import { getBuilderById } from "@/utils/api";
import React from "react";
import Schema from "@/components/Schema";
import {
  generateBuilderSchema,
  generateBreadcrumbSchema,
} from "@/utils/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

const page: React.FC<Props> = async ({ params }) => {
  const resolvedParams = await params;
  const _id = resolvedParams?.slug;
  const res = await getBuilderById(_id);
  const data = res?.data?.data;
  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1>Property Not Found</h1>
      </main>
    );
  }

  const builderSchema = generateBuilderSchema(data);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Builders", url: "/builder" },
    { name: data?.title || "", url: `/builder/${data?.url}` },
  ]);

  return (
    <>
      <Schema schema={builderSchema} />
      <Schema schema={breadcrumbSchema} />
      <main className="w-screen xl:max-w-screen-xl">
        <BuilderPage data={data} />
      </main>
    </>
  );
};

export default page;
