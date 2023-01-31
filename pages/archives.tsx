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
    description: Post["description"];
  }[];
}> = () => {
  const posts = allPosts.map(({ _id, slug, title, date, description }) => ({
    _id,
    slug,
    title,
    date,
    description,
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
  const [searchValue, setSearchValue] = React.useState("");
  const [limit, setLimit] = React.useState(20);

  const filteredPosts = posts
    .filter((post) => {
      const searchValueLower = searchValue.toLowerCase();
      const titleLower = post.title.toLowerCase();
      const descriptionLower = post.description.toLowerCase();

      return (
        titleLower.includes(searchValueLower) ||
        descriptionLower.includes(searchValueLower)
      );
    })
    .slice(0, limit);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container
      title="Archives - Enea Xharja"
      description="My personal collection of notes, code snippets, and resources on topics that interest me."
    >
      <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pt-16">
        <div className="flex flex-col">
          <h1 className="mb-8">Archives</h1>
          <p>
            In total, I've written {posts.length} notes. Use the search below to
            filter by title or description.
          </p>
        </div>
      </div>

      <div className="relative w-full mb-8">
        <svg
          className="absolute w-4 h-4 left-3 top-3 text-primary-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          aria-label="Search archives"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search archives"
          className="block w-full px-4 py-2 pl-10 bg-gray-800 text-primary-50 border rounded-2xl border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
        />
      </div>

      <React.Suspense fallback={null}>
        {!filteredPosts.length && (
          <div className="min-h-[calc(100vh-20rem)]">
            <p>No posts found.</p>
          </div>
        )}

        <div className="min-h-[calc(100vh-20rem)]">
          {filteredPosts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

        {searchValue === "" && limit < posts.length && (
          <div className="flex flex-col justify-center items-center border-gray-700 mx-auto py-16">
            <button onClick={() => setLimit(limit + 20)} className="btn">
              Load more
            </button>
          </div>
        )}

        {limit >= posts.length && (
          <div className="flex flex-col justify-center items-center border-gray-700 mx-auto py-16">
            <button onClick={scrollToTop} className="btn">
              Back to top
            </button>
          </div>
        )}
      </React.Suspense>
    </Container>
  );
};

export default ArchivesPage;
