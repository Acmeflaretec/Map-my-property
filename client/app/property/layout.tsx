import Fallback from "@/components/common/Fallback";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Properties | Map My Property",
  description: "Find your perfect property | Map My Property",
  alternates: {
    canonical: "https://www.mapmyproperty.in/property",
  },
};

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<Fallback />}>{children}</Suspense>
    </main>
  );
};

export default page;
