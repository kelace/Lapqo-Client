import { useState } from "react";
import { PostLikeButton } from "@/components/features/post-like/ui/PostLikeButton";
import type { Post } from "../types";
import { PostActions } from "./PostActions";
import { PostContent } from "./PostContext";
import { PostMeta } from "./PostMeta";

type Props = {
  post: Post;
};

// features/post-update/ui

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
        </footer>
      </article>
    </li>
  );
}
