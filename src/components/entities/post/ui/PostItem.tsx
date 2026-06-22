import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import type { Post } from "../types";
import { PostLikeButton } from "@/components/features/post-like/ui/PostLikeButton";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li className="hover:bg-muted/40 border-border-gray rounded-lg border px-5 py-6 transition-colors not-last:mb-4">
      <article className="flex flex-col gap-3">
        <header className="flex items-center gap-2">
          <Link
            to={routes.users.detail(post.authorUserName)}
            className="font-semibold hover:underline"
          >
            @{post.authorUserName}
          </Link>
          <time
            dateTime={post.createdAt}
            className="text-muted-foreground text-sm"
          >
            {formattedDate}
          </time>
        </header>

        <p className="text-sm leading-relaxed">{post.content}</p>

        <footer className="text-muted-foreground flex items-center gap-1">
          {/* <PostActions post={post} /> */}
          <PostLikeButton
            postId={post.id}
            liked={post.likedByCurrentUser}
            likesCount={post.likesCount}
          />
        </footer>
      </article>
    </li>
  );
}
