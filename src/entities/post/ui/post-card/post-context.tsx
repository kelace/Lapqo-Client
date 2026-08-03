import type { Post } from "@/entities/post/model/types";
import { PostEditForm } from "../post-edit-form/post-edit-form";
import {  ItemContent, ItemTitle, ItemDescription } from "@/shared/shadcn/ui/item";


type PropsContext = {
  isEditing: boolean;
  post: Post;
  onEditCancel: () => void;
  onEditSuccess: () => void;
};

export function PostContext({
  isEditing,
  post,
  onEditCancel,
  onEditSuccess,
}: PropsContext) {
  if (isEditing) {
    return (
      <PostEditForm
        postId={post.id}
        initialContent={post.content}
        onCancel={onEditCancel}
        onSuccess={onEditSuccess}
      />
    );
  }
  
    return (
      <ItemContent>
        <ItemDescription>
          <p className="text-sm leading-relaxed">{post.content}</p>
        </ItemDescription>
      </ItemContent>
    );
}
