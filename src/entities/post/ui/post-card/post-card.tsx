import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/shadcn/ui/button";
import type { Post } from "../../model/types";
import { PostActions } from "./post-actions";
import { PostContext } from "./post-context";
import { PostLikeButton } from "./post-like-button";
import { PostMeta } from "./post-meta";
import { Item, ItemContent, ItemFooter } from "@/shared/shadcn/ui/item";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <article>
      <Item variant="muted" >
        <ItemContent>
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
        <ItemFooter>
          <footer className="text-muted-foreground flex items-center gap-1">
            <PostLikeButton
              postId={post.id}
              liked={post.likedByCurrentUser}
              likesCount={post.likesCount}
            />

            <Button variant="ghost" size="sm" asChild>
              <Link to={routes.posts.detail(post.id)}>
                <MessageCircle className="h-4 w-4" />
                {post.commentsCount}
              </Link>
            </Button>
          </footer>
        </ItemFooter>
        </ItemContent>
      </Item>
    </article>
  );
}
