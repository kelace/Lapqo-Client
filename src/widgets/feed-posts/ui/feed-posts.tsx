import { useEffect, useRef } from "react";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
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

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "pending") return <PostLoading />;
  if (status === "error") return <PostError error={error} />;

  const posts = data?.pages.flat() ?? [];
  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>

      <div ref={loadMoreRef} style={{ height: 50, textAlign: "center" }}>
        {isFetchingNextPage && "Loading..."}
      </div>
    </div>
  );
}
