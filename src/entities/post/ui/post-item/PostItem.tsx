import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/shadcn/ui/button";
import type { Post } from "../../model/post.types";
import { PostActions } from "./components/PostActions";
import { PostContent } from "./components/PostContext";
import { PostLikeButton } from "./components/PostLikeButton";
import { PostMeta } from "./components/PostMeta";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="hover:bg-muted/40 border-border-gray rounded-lg border px-5 py-6 transition-colors not-last:mb-4">
      <article className="flex flex-col gap-3">
        <header className="flex items-center justify-between gap-2">
          <PostMeta post={post} />
          {!isEditing && (
            <PostActions post={post} onEdit={() => setIsEditing(true)} />
          )}
        </header>
        <PostContent
          isEditing={isEditing}
          post={post}
          onEditCancel={() => setIsEditing(false)}
          onEditSuccess={() => setIsEditing(false)}
        />
        <footer className="text-muted-foreground flex items-center gap-1">
          <PostLikeButton
            postId={post.id}
            liked={post.likedByCurrentUser}
            likesCount={post.likesCount}
          />

          {/* PostCommentButton */}
          <Button variant="ghost" size="sm" asChild>
            {/* to={routes.posts.detail(postId)} */}
            <Link to={routes.posts.detail(post.id)}>
              <MessageCircle className="h-4 w-4" />
              {post.commentsCount}
            </Link>
          </Button>
        </footer>
      </article>
    </li>
  );
}
