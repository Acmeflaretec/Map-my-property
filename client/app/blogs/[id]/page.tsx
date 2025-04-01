import Image from "next/image";
import React from "react";
import { Icons } from "@/components/common/Icons";
import { getBlogsById } from "@/utils/api";
import ContactCard from "@/components/common/ContactCard";
import BlogDescription from "@/components/blogs/BlogDescription";
import BlogBannerImage from "@/components/blogs/BlogBannerImage";
import Schema from "@/components/Schema";
import { generateBlogSchema, generateBreadcrumbSchema } from "@/utils/schema";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Blog = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const _id = resolvedParams?.id;
  const res = await getBlogsById(_id);
  const data = res?.data?.data || null;

  const blogSchema = generateBlogSchema(data);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs" },
    { name: data?.title || "", url: `/blogs/${data?.url}` }
  ]);

  if (!data) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1>Blog post not found.</h1>
      </main>
    );
  }

  return (
    <>
      <Schema schema={blogSchema} />
      <Schema schema={breadcrumbSchema} />
      <section className="flex flex-col md:flex-row gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 p-2 w-full min-h-screen">
        <div className="container p-4 w-full max-w-screen-md 2xl:max-w-screen-lg">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <h2 className="mb-4 md:mb-8 text-2xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                {data?.title}
              </h2>
              <div className="mb-4 md:mb-10 flex flex-wrap items-center justify-between border-b border-gray-300 pb-1 md:pb-4">
                <div className="flex justify-between w-full md:w-fit items-center">
                  <div className="mr-1 xl:mr-10 mb-5 flex items-center">
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={40}
                      height={40}
                      className="w-52 md:w-60 h-8"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <p className="hidden md:flex items-center text-xs md:text-sm font-medium text-black">
                    <span className="mr-2 flex md:text-sm">
                      last updated on&nbsp;
                      <Icons.date />
                    </span>
                    {data?.updatedAt
                      ? new Date(data.updatedAt).toDateString()
                      : ""}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {data?.subtitle}
                </p>
                <div className="mb-10 w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] flex items-center justify-center">
                    <BlogBannerImage
                      src={data?.image}
                      className="object-cover object-center w-full max-h-[500px]"
                    />
                  </div>
                </div>
                <BlogDescription data={data?.description} />
                <div className="items-center justify-between sm:flex">
                  <div className="mb-5 flex items-center">
                    <h5 className="mb-3 text-sm font-medium text-black sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.mapmyproperty.in/blogs/${data?.url}`}
                        target="_blank"
                        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500 sm:ml-3"
                      >
                        <Icons.linkedIn />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.mapmyproperty.in/blogs/${data?.url}`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.facebook />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://www.mapmyproperty.in/blogs/${data?.url}text=Check%20this%20out`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.twitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 static hidden xl:flex flex-col gap-8">
          <div className="sticky top-48">
            <ContactCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
