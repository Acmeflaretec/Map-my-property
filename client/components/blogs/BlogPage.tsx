import React from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "@/utils/api";

const BlogPage = async () => {
  const res = await getBlogs({});
  const data = res?.data?.data || [];

  return (
    <div className="py-8 flex-col items-center">
      <p className="text-center text-3xl lg:text-4xl p-8">
        Explore Popular Blogs
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1">
        {data?.map((item, index) => (
          <React.Fragment key={`parent-${index}`}>
            <div
              key={`card-${index}`}
              className="col-span-2 border-2 p-0.5 rounded-2xl"
            >
              <BlogCard data={item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
