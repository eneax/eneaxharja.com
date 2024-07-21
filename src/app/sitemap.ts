import { getBlogPosts } from "@/lib/mdx";

export const baseUrl = "https://eneaxharja.com";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  const routes = ["", "/blog", "/projects", "/bookshelf", "/photos"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogs];
}
