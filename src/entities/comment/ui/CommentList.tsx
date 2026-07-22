import { CommentItem } from "@/entities/comment/ui/CommentItem";
import type { PostComment } from "../types/comment-types";

type Props = {
  comments: PostComment[];
};

export function CommentList({ comments }: Props) {
  return (
    <ul className="space-y-5 py-4">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
