import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
   title: "Contact | Map My Property",
   description: "Connect with us | Map My Property",
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