import { useParams } from "react-router-dom";
import { CommentList } from "@/widgets/comment-list/ui/CommentList";
import { CommentForm } from "@/features/comment-create/ui/CommentForm";
import { useGetPost } from "@/entities/post/model/useGetPost";
import { PostItem } from "@/entities/post/ui/PostItem";

export function PostDetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPost(id!);

  if (isLoading) return <div>Завантаження...</div>;
  if (isError || !data) return <div>Пост не знайдено</div>;

  return (
    <>
      <div className="flex h-full flex-col gap-2">
        <ul className="sticky top-0 z-2 bg-black">
          <PostItem post={data} />
        </ul>
        <section className="flex-1 scrollbar-none overflow-y-auto">
          <CommentForm postId={data.id} />
          <CommentList postId={data.id} />
        </section>
      </div>
    </>
  );
}
