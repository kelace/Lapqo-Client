import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { formatPostDate } from "@/shared/lib/createdAt";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import type { Post } from "../types";

type Props = {
  post: Post;
};

export function PostMeta({ post }: Props) {
  const userLink = routes.users.detail(post.authorUserName);

  return (
    <div className="flex items-center gap-3">
      <Link to={userLink}>
        <Avatar className="h-10 w-10">
          <AvatarImage src={undefined} />
          <AvatarFallback>{post.shortName}</AvatarFallback>
        </Avatar>
      </Link>
      <Link
        to={userLink}
        className="font-semibold text-lime-100 hover:underline"
      >
        {post.authorUserName}
      </Link>
      <time dateTime={post.createdAt} className="text-muted-foreground text-sm">
        {formatPostDate(post.createdAt)}
      </time>
    </div>
  );
}
