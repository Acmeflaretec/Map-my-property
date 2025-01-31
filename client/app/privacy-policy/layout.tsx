import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Map My Property",
  description: "Find your perfect property | Map My Property",
};

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
