import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { formatPostDate } from "@/shared/lib/createdAt";
import type { Post } from "../types";

type Props = {
  post: Post;
};

export function PostMeta({ post }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Link
        to={routes.users.detail(post.authorUserName)}
        className="font-semibold hover:underline"
      >
        @{post.authorUserName}
      </Link>
      <time dateTime={post.createdAt} className="text-muted-foreground text-sm">
        {formatPostDate(post.createdAt)}
      </time>
    </div>
  );
}
