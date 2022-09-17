import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { allPosts, type Post } from "contentlayer/generated";

import Container from "components/Container";
import PostCard from "components/PostCard";

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  const posts = allPosts
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 10);

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    <div className="flex flex-col justify-center items-center border-gray-700 mx-auto py-16">
      <div className="flex flex-col">
        <h1 className="mb-1">Enea Xharja</h1>
        <p>
          Web Developer at <span className="font-semibold">wohnvoll</span>
        </p>
        <p>
          Welcome to my little corner of the web, where I share my personal
          collection of notes, code snippets, and resources on topics that
          interest me.
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pb-16">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          slug={post.slug}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>

    <div className="flex flex-col justify-center items-center border-gray-700 mx-auto pb-16">
      <Link href="/archives">
        <a className="no-underline font-semibold p-4 rounded-2xl text-black bg-primary-400 hover:bg-primary-400/95 transition duration-300">
          Browse the archives
        </a>
      </Link>
    </div>
  </Container>
);

export default Home;
