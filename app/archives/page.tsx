import { Metadata } from "next";
import { allPosts } from "@/.contentlayer/generated";

import PostCard from "@/components/post-card";

export const metadata: Metadata = {
  title: "Archives",
  description: "A list of all posts.",
};

export default function Archives() {
  const sortedPosts = allPosts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return bDate.getTime() - aDate.getTime();
  });

  return (
    <article className="flex flex-col my-16">
      <h1 className="mb-8">Archives</h1>

      {sortedPosts.map((post) => (
        <PostCard
          key={post._id}
          slug={post.slug}
          title={post.title}
          date={post.date}
        />
      ))}
    </article>
  );
}
