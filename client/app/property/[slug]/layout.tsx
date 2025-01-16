import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const property_name = resolvedParams.slug?.toUpperCase();

  return {
    title: `${property_name} | Map My Property`,
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
