import Link from "next/link";
import { Post } from "contentlayer/generated";

const PostCard = ({
  slug,
  title,
  description,
}: {
  slug: Post["slug"];
  title: Post["title"];
  description: Post["description"];
}) => (
  <Link href={`/${slug}`} className="no-underline">
    <div className="rounded-2xl p-6 mb-6 bg-gray-900/90 transition duration-300 hover:bg-gray-800/90 bg-glass">
      <h3>{title}</h3>
      {description && <p className="text-primary-50 mb-0">{description}</p>}
    </div>
  </Link>
);

export default PostCard;
