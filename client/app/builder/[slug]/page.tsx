import BuilderPage from "@/components/builder/BuilderPage";
import { getBuilderById } from "@/utils/api";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const page: React.FC<Props> = async ({ params }) => {
  const resolvedParams = await params;
  const _id = resolvedParams?.slug;
  const res = _id?.length === 24 ? await getBuilderById(_id) : null;
  const data = res?.data?.data;
  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1>Property Not Found</h1>
      </main>
    );
  }
  return (
    <main className="w-screen xl:max-w-screen-xl">
      <BuilderPage data={data} />
    </main>
  );
};

export default page;
