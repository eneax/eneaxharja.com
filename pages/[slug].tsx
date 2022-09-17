import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from "contentlayer/generated";

import { formatDate } from "lib/dates";
import MdxComponents from "components/MdxComponents";
import Container from "components/Container";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const SinglePostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Container
      title={`${post.title} - Enea Xharja`}
      description={post.description || ""}
      date={formatDate(post.date)}
      type="article"
    >
      <div className="flex flex-col justify-center border-gray-700 pt-16 mb-8">
        <h1 className="mb-2">{post.title}</h1>
        <small>Updated on {formatDate(post.date)}</small>
      </div>

      <div className="min-h-[calc(100vh-25rem)]">
        <MDXContent
          components={{
            ...MdxComponents,
          }}
        />
      </div>
    </Container>
  );
};

export default SinglePostPage;
