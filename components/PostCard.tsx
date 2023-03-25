import Link from "next/link";
import { Post } from "contentlayer/generated";

import { formatDate } from "lib/dates";

type PostCardProps = {
  slug: Post["slug"];
  title: Post["title"];
  date: Post["date"];
};

const PostCard = ({ slug, title, date }: PostCardProps) => (
  <Link href={`/${slug}`} className="no-underline">
    <p className="flex flex-col md:flex-row md:items-center justify-between rounded-2xl p-3 mb-0 transition duration-300 hover:bg-gray-800/90 text-primary-50">
      <span>{title}</span>
      <small>{formatDate(date)}</small>
    </p>
  </Link>
);

export default PostCard;
