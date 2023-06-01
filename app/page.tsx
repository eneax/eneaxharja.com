import Link from "next/link";

import { allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post-card";

export default function Home() {
  const posts = allPosts
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 10);

  return (
    <article className="flex flex-col mt-16">
      <section className="mb-16">
        <h1 className="mb-4">Hello, my name is Enea.</h1>
        <p>
          I am a software engineer who enjoys helping others, learning new
          things and sharing them with the community.
        </p>
        <p>
          Welcome to my own little corner of the web, where I share my personal
          collection of notes, code snippets, and resources on topics that
          interest me.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-4">Recent Notes</h2>
        <div className="mb-4">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
        <Link href="/archives" className="btn block">
          Browse more
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="mb-4">Connect</h2>
        <p>
          I love hearing from readers - praise, criticism, suggestions, feedback
          or thoughts on any of my notes. Emails are always welcome. I really do
          read all my emails, but if I do not respond, or do so only after an
          unreasonable amount of time has passed, do not take it personally.
          Here is how to reach me: eneaxharja [at] gmail [dot] com.
        </p>
      </section>
    </article>
  );
}
