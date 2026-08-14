import { Link } from "react-router-dom";
import type { Post } from "@/entities/post/model/types";
import noavatar from "@/shared/assets/images/noavatar.webp";
import { routes } from "@/shared/config/routes";
import { formatPostDate } from "@/shared/lib/createdAt";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";

type Props = {
  post: Post;
};

export function PostMeta({ post }: Props) {
  const userLink = routes.users.detail(post.authorUserName);

  return (
    <div className="flex items-center gap-3">
      <Link to={userLink}>
        <Avatar className="size-8">
          <AvatarImage src={noavatar} />
          <AvatarFallback>{post.shortName}</AvatarFallback>
        </Avatar>
      </Link>
      <Link to={userLink} className="font-semibold hover:underline">
        {post.authorUserName}
      </Link>
      <time dateTime={post.createdAt} className="text-muted-foreground text-sm">
        {formatPostDate(post.createdAt)}
      </time>
    </div>
  );
}
