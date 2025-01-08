import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
   params: {
     slug: string;
   };
 }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const builder_name = params?.slug?.toUpperCase();
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