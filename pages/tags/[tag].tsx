import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { allPosts, type Post } from "contentlayer/generated";

import Container from "components/Container";
import PostCard from "components/PostCard";

export const getStaticPaths = () => {
  const posts = allPosts.map(({ _id, tags }) => ({
    _id,
    tags,
  }));

  const tags = posts.map((post) => post.tags).flat();

  const paths = tags.map((tag) => ({ params: { tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = ({
  params,
}) => {
  const filteredPosts = allPosts.filter((post) =>
    post?.tags?.map((tag) => tag).includes(params?.tag as string)
  );

  const posts = filteredPosts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return bDate.getTime() - aDate.getTime();
  });

  return {
    props: {
      posts,
      tag: params?.tag,
    },
  };
};

const TagDetailsPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <Container
      title={`"${tag}" tag - Enea Xharja`}
      description={`A collection of posts tagged with "${tag}".`}
    >
      <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pt-16">
        <div className="flex flex-col min-h-[calc(100vh-17rem)]">
          <h1 className="mb-8">
            {posts.length} posts tagged with "{tag}"
          </h1>

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
            <Link href="/tags">
              <a className="no-underline font-semibold p-4 rounded-2xl text-black bg-primary-400 hover:bg-primary-400/95 transition duration-300">
                Browse all tags
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TagDetailsPage;
