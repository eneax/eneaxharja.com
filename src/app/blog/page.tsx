import Link from "next/link";

import { getBlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Thoughts on software, design, and other tidbits.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>

      <p className="mb-4">Thoughts on software, design, and other tidbits.</p>

      <div className="mt-8">
        {sortedBlogs.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="flex flex-col space-y-1 mb-4"
          >
            <p className="text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <p className="text-neutral-400">{post.metadata.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
