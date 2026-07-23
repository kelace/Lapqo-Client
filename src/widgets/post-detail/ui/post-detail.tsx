import { CommentForm } from "@/features/comment-create/ui/comment-form";
import { PostComments } from "@/entities/comment/ui/post-comments";
import { usePostById } from "@/entities/post/model/use-post-by-Id";
import { PostCard } from "@/entities/post/ui/post-card/post-card";

export function PostDetail({ postId }: { postId: string }) {
  const { data, isLoading, isError } = usePostById(postId!);

  if (isLoading) return <div> PostLoading...</div>;
  if (isError || !data) return <div>PostError</div>;

  return (
    <>
      <div className="flex h-full flex-col gap-2">
        <header className="bg-background sticky top-0 z-10 pb-2">
          <PostCard post={data} />
        </header>
        <section className="flex-1 scrollbar-none overflow-y-auto">
          <CommentForm postId={data.id} />
          <PostComments postId={data.id} />
        </section>
      </div>
    </>
  );
}
