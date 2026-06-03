import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { routes } from "@/shared/config/routes";
import type { FeedPost } from "../types";
import { useToggleLikePost } from "../model/useToggleLikePost";

type PostItemProps = {
  post: FeedPost;
};

export function PostItem({ post }: PostItemProps) {
  const { likeMutation, unlikeMutation } = useToggleLikePost();

  const handleLike = () => {
    if (post.likedByCurrentUser) {
      unlikeMutation.mutate(post.id);
    } else {
      likeMutation.mutate(post.id);
    }
  };

  const formattedDate = new Date(post.createdAt).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li className="px-5 py-6 hover:bg-muted/40 transition-colors bg-[#0e1527] border border-gray-400/20 rounded-lg  not-last:mb-4">
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
            className="text-sm text-muted-foreground"
          >
            {formattedDate}
          </time>
        </header>

        <p className="text-sm leading-relaxed">{post.content}</p>

        <footer className="flex items-center gap-1 text-muted-foreground">
          <button
            className={`flex items-center gap-1 text-sm transition-colors hover:text-rose-500
              ${post.likedByCurrentUser ? "text-rose-500" : ""}`}
            // aria-label={post.likedByCurrentUser ? "Зняти лайк" : "Лайкнути"}
            onClick={handleLike}
          >
            <Heart
              size={16}
              className={post.likedByCurrentUser ? "fill-rose-500" : ""}
            />
            <span>{post.likesCount}</span>
          </button>
        </footer>
      </article>
    </li>
  );
}
