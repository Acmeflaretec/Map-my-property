import { getBlogs, getBuilders, getProjects } from "@/utils/api";

const fetchDynamicPages = async () => {
  try {
    const propertyRes = await getProjects({ perPage: 1000 });
    const properties = propertyRes?.data?.data?.docs || [];
    const builderRes = await getBuilders({ limit: 1000 });
    const builders = builderRes?.data?.data || [];
    const blogRes = await getBlogs({ limit: 1000 });
    const blogs = blogRes?.data?.data || [];
    return [
      ...properties.map((p: any) => `/property/${p.href}`),
      ...builders.map((b: any) => `/builder/${b.url}`),
      ...blogs.map((b: any) => `/blogs/${b.url}`),
    ];
  } catch (error) {
    console.error("Error fetching dynamic pages:", error);
    return [];
  }
};

export async function GET() {
  const siteUrl = "https://www.mapmyproperty.in";

  const staticPages = ["/", "/property", "/builder", "/blogs", "/contact"];
  const dynamicPages = await fetchDynamicPages();

  const pages = [...staticPages, ...dynamicPages];

  // Create the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(
         (page) => `
         <url>
           <loc>${siteUrl}${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
         </url>`
       )
       .join("")}
   </urlset>`;

  // Return the sitemap as XML
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
