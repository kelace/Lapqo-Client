import { useState } from "react";
import type { Post } from "../../model/types";
import { PostActions } from "./post-actions";
import { PostCommentButton } from "./post-comment-button";
import { PostContext } from "./post-context";
import { PostLikeButton } from "./post-like-button";
import { PostMeta } from "./post-meta";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <article className="hover:bg-muted/40 surface px-5 py-6 wrap-break-word transition-colors">
      <div className="flex flex-col gap-3">
        <header className="flex items-center justify-between gap-2">
          <PostMeta post={post} />

          {!isEditing && (
            <PostActions post={post} onEdit={() => setIsEditing(true)} />
          )}
        </header>

        <PostContext
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
          <PostCommentButton
            postId={post.id}
            commentsCount={post.commentsCount}
          />
        </footer>
      </div>
    </article>
  );
}
