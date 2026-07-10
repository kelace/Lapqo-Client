import { useGetComments } from "@/entities/comment";
import { CommentItem } from "@/entities/comment/ui/CommentItem";

export function CommentList({ postId }: { postId: string }) {
  const { data: comments = [], isLoading } = useGetComments(postId);

  if (isLoading) return <div>Завантаження коментарів...</div>;

  return (
    <ul className="space-y-5 py-4">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment}></CommentItem>
        </li>
      ))}
    </ul>
  );
}
