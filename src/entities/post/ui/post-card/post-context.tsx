// import { PostEditForm } from "@/features/post-update/ui/PostEditForm";
import { PostEditForm } from "@/features/post-update/ui/post-edit-form";
import type { Post } from "@/entities/post/model/types";

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

  return <p className="text-sm leading-relaxed">{post.content}</p>;
}
