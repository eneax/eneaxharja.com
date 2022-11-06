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
    .slice(0, 5);

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
        <h1 className="mb-4">Hello, my name is Enea.</h1>
        <p>
          I am a Software Engineer based in Berlin, DE. Currently I am working{" "}
          at <span className="font-semibold">wohnvoll</span> building digital
          products that set new standards for the senior living of the future.
        </p>
        <p>
          Welcome to my own little corner of the web, where I share my personal{" "}
          <Link href="/archives">collection</Link> of notes, code snippets, and
          resources on <Link href="/tags">topics</Link> that interest me.
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pb-16">
      <h2 className="mb-4">Recent Notes</h2>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          slug={post.slug}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>

    <h2 className="mb-4">Connect</h2>
    <p>
      I love hearing from readers - praise, criticism, suggestions, feedback or
      thoughts on any of my notes. Emails are always welcome. I really do read
      all my emails, but if I don't respond, or do so only after an unreasonable
      amount of time has passed, don't take it personally. Here's how to reach
      me: eneaxharja [at] gmail [dot] com.
    </p>
  </Container>
);

export default Home;
