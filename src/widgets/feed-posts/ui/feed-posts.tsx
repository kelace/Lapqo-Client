// import { SearchButton } from "@/features/search-feed/ui";
// import { SearchFeedDialog } from "@/features/search-feed/ui/SearchFeedDialog";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
import { useIntersctionObserver } from "@/shared/hooks/use-intersction-observer/use-intersction-observer";
import { useFeedPosts } from "../model/use-feed-posts";

export function FeedPosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useFeedPosts();

  const loadMoreRef = useIntersctionObserver({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (status === "pending") return <PostLoading />;
  if (status === "error") return <PostError error={error} />;

  const posts = data?.pages.flat() ?? [];
  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      {/* <SearchFeedDialog /> */}
      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>
      <div ref={loadMoreRef} style={{ height: 50, textAlign: "center" }}>
        {isFetchingNextPage && "Loading..."}
      </div>
    </div>
  );
}
