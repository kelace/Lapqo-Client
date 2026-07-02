import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import type { Post } from "../types";

type Props = {
  post: Post;
};

export function PostMeta({ post }: Props) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center gap-2">
      <Link
        to={routes.users.detail(post.authorUserName)}
        className="font-semibold hover:underline"
      >
        @{post.authorUserName}
      </Link>
      <time dateTime={post.createdAt} className="text-muted-foreground text-sm">
        {formattedDate}
      </time>
    </div>
  );
}
