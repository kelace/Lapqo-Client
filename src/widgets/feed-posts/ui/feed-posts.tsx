import { Loader2 } from "lucide-react";
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

  if (status === "pending") return <PostLoading />;

  if (status === "error") return <PostError error={error} />;
  const posts = data?.pages.flat() ?? [];
  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>

      <footer className="mt-6 flex justify-center">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="border-border bg-background hover:bg-accent hover:text-accent-foreground mx-auto flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isFetchingNextPage ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : hasNextPage ? (
            "Load more posts"
          ) : (
            "You've reached the end"
          )}
        </button>
      </footer>
    </div>
  );
}

// infinite query,
// pagination,
// loading more,
// intersection observer.
