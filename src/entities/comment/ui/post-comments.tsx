import { useGetComments } from "../model/useGetComments";
import { CommentList } from "./CommentList";

export function PostComments({ postId }: { postId: string }) {
  const query = useGetComments(postId);

  if (query.isLoading) return <div>CommentListSkeleton</div>;
  if (query.isError) return <div>CommentListEror: error</div>;

  return <CommentList comments={query.data ?? []} />;
}
