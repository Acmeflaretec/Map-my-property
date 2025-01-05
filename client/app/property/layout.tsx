import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
   title: "Properties | Map My Property",
   description: "Find your perfect property | Map My Property",
};

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