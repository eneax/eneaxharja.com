import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { allPosts } from "contentlayer/generated";

import Container from "components/Container";

type TagsProps = {
  tag: string;
  count: number;
};

export const getStaticProps: GetStaticProps<{
  tags: TagsProps[];
}> = () => {
  const posts = allPosts.map(({ _id, tags }) => ({
    _id,
    tags,
  }));

  const tags = posts.map((post) => post.tags).flat();

  const tagCount = tags.reduce<{ [key: string]: TagsProps }>((acc, tag) => {
    if (tag) {
      const count = acc[tag] ? acc[tag].count + 1 : 1;
      acc[tag] = { tag, count };
    }
    return acc;
  }, {});

  const sortedTags = Object.values(tagCount).sort((a, b) =>
    a.tag.toLowerCase() > b.tag.toLowerCase() ? 1 : -1
  );

  return {
    props: {
      tags: sortedTags,
    },
  };
};

const AllTagsPage = ({
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container
    title="All Tags - Enea Xharja"
    description="A collection of topics that interest me."
  >
    <div className="flex flex-col justify-center border-gray-700 mx-auto w-full pt-16">
      <div className="flex flex-col">
        <h1 className="mb-8">All Tags</h1>
      </div>
    </div>

    <div className="flex flex-col min-h-[calc(100vh-22rem)]">
      <div className="flex flex-wrap">
        {tags.map(({ tag, count }) => (
          <Link
            href={`/tags/${tag}`}
            key={tag}
            className="no-underline rounded-2xl px-4 py-2.5 mb-6 mr-4 bg-gray-900/90 transition duration-300 hover:bg-gray-800/90 bg-glass"
          >
            <span className="text-primary-50">
              {tag} (<span className="text-primary-400">{count}</span>)
            </span>
          </Link>
        ))}
      </div>
    </div>
  </Container>
);

export default AllTagsPage;
