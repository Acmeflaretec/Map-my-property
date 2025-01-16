import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const builder_name = resolvedParams.slug?.toUpperCase();
  return {
    title: `${builder_name} | Map My Property`,
    description: `Explore and find your perfect property at Map My Property.`,
  };
}

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Suspense>{children}</Suspense>
    </main>
  );
};

export default page;
