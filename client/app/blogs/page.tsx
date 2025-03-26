import BlogPage from "@/components/blogs/BlogPage";
import HeroSection from "@/components/blogs/HeroSection";
import React from "react";

const page = () => {
  return (
    <main className="w-screen xl:max-w-screen-xl overflow-hidden">
      <div className="flex flex-col gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 p-2 w-full min-h-screen">
        <HeroSection />
        <BlogPage />
      </div>
    </main>
  );
};

export default page;
