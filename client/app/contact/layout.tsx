import { Metadata } from "next";
import React, { Suspense } from "react";
import Fallback from "@/components/common/Fallback";

export const metadata: Metadata = {
  title: "Contact | Map My Property",
  description: "Connect with us | Map My Property",
  alternates: {
    canonical: "https://www.mapmyproperty.in/contact",
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
