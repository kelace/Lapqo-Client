import { useIntersctionObserver } from "@/shared/hooks/use-intersction-observer/use-intersction-observer";
import { usePostComments } from "../model/use-post-comments";
import { CommentList } from "./comment-list";

export function PostComments({ postId }: { postId: string }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    // error,
  } = usePostComments(postId);

  const loadMoreRef = useIntersctionObserver({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const comments = data?.pages.flat() ?? [];

  if (status === "pending") return <div>CommentListSkeleton</div>;
  if (status === "error") return <div>CommentListEror: </div>;

  return (
    <>
      <CommentList comments={comments} />
      <div ref={loadMoreRef} style={{ height: 50, textAlign: "center" }}>
        {isFetchingNextPage && "Loading..."}
      </div>
    </>
  );
}
