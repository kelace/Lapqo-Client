import type { PostComment } from "../model/types";
import { CommentItem } from "./comment-item";

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
