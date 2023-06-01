import { notFound } from "next/navigation";
import { Metadata } from "next";

import { allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/dates";
import { Mdx } from "@/components/mdx";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col my-16">
      <section className="mb-10">
        <h1 className="mb-2">{post.title}</h1>
        <small>Updated: {formatDate(post.date)}</small>
      </section>

      <section className="min-h-[calc(100vh-25rem)]">
        <Mdx code={post.body.code} />
      </section>
    </article>
  );
}
