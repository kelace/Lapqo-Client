import { PostEditForm } from "@/features/post-update/ui/PostEditForm";
import type { Post } from "../types";

type PropsContext = {
  isEditing: boolean;
  post: Post;
  onEditCancel: () => void;
  onEditSuccess: () => void;
};

export function PostContent({
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

  return <p className="text-sm leading-relaxed">{post.content}</p>;
}
