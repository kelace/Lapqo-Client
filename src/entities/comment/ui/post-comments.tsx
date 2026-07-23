import { usePostComments } from "../model/use-post-comments";
import { CommentList } from "./comment-list";

export function PostComments({ postId }: { postId: string }) {
  const query = usePostComments(postId);

  if (query.isLoading) return <div>CommentListSkeleton</div>;
  if (query.isError) return <div>CommentListEror: error</div>;

  return <CommentList comments={query.data ?? []} />;
}
