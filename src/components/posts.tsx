import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostsWrapper = styled.section`
  margin-top: var(--spacing-16);
`;

const Post = styled.article`
  margin-bottom: var(--spacing-10);
  margin-top: var(--spacing-10);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  transition: all 0.25s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  a {
    text-decoration: none;
  }

  header {
    margin-bottom: var(--spacing-2);
    padding: var(--spacing-6) var(--spacing-6) var(--spacing-0);
  }

  h2 {
    font-size: var(--fontSize-4);
    color: var(--color-primary);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  p {
    margin-bottom: var(--spacing-0);
    color: var(--color-text);
    padding: var(--spacing-0) var(--spacing-6) var(--spacing-6);
  }
`;

export interface PostType {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
  fields: {
    slug: string;
  };
  excerpt: string;
  html: string;
}

const Posts = ({ posts }: { posts: PostType[] }) => (
  <PostsWrapper>
    {posts.map((post: PostType) => {
      const title = post.frontmatter.title || post.fields.slug;

      return (
        <Post
          itemScope
          itemType="http://schema.org/Article"
          key={post.fields.slug}
        >
          <Link to={post.fields.slug} itemProp="url">
            <header>
              <h2>
                <span itemProp="headline">{title}</span>
              </h2>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </Link>
        </Post>
      );
    })}
  </PostsWrapper>
);

export default Posts;
