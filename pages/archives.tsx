import * as React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { allPosts, type Post } from "contentlayer/generated";

import Container from "components/Container";
import PostCard from "components/PostCard";

export const getStaticProps: GetStaticProps<{
  posts: {
    _id: Post["_id"];
    slug: Post["slug"];
    title: Post["title"];
    date: Post["date"];
  }[];
}> = () => {
  const posts = allPosts.map(({ _id, slug, title, date }) => ({
    _id,
    slug,
    title,
    date,
  }));

  const sortedPosts = posts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return bDate.getTime() - aDate.getTime();
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const ArchivesPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container
      title="Archives - Enea Xharja"
      description="My personal collection of notes, code snippets, and resources on topics that interest me."
    >
      <article className="flex flex-col my-16">
        <h1 className="mb-8">Archives</h1>

        {posts.map((post) => (
          <PostCard
            key={post._id}
            slug={post.slug}
            title={post.title}
            date={post.date}
          />
        ))}

        <button onClick={scrollToTop} className="btn mt-4">
          Back to top
        </button>
      </article>
    </Container>
  );
};

export default ArchivesPage;
