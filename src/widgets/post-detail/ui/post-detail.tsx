import { CommentForm } from "@/features/comment-create/ui/CommentForm";
import { PostComments } from "@/entities/comment/ui/post-comments";
import { useGetPost } from "@/entities/post/model/useGetPost";
import { PostCard } from "@/entities/post/ui/post-card/PostCard";

export function PostDetail({ postId }: { postId: string }) {
  const { data, isLoading, isError } = useGetPost(postId!);

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
