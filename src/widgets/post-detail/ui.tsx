import { CommentForm } from "@/features/comment-create/ui/comment-form";
import { PostComments } from "@/entities/comment/ui/post-comments";
import { PostCard } from "@/entities/post";
import { usePostById } from "@/entities/post/model/use-post-by-Id";

export function PostDetail({ postId }: { postId: string }) {
  const { data, isLoading, isError } = usePostById(postId!);

  if (isLoading) return <div> PostLoading...</div>;
  if (isError || !data) return <div>PostError</div>;

  return (
    <>
      <div className="flex h-full flex-col gap-4">
        <header className="z-10">
          <PostCard post={data} />
        </header>
        <section>
          <CommentForm postId={data.id} />
          <PostComments postId={data.id} />
        </section>
      </div>
    </>
  );
}
