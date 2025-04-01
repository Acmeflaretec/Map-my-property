import { Metadata } from "next";
import React, { Suspense } from "react";
import Fallback from "@/components/common/Fallback";
export const metadata: Metadata = {
  title: "Privacy Policy | Map My Property",
  description: "Find your perfect property | Map My Property",
  alternates: {
    canonical: "https://www.mapmyproperty.in/privacy-policy",
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
