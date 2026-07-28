import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
import { Button } from "@/shared/shadcn/ui/button";
import { useFeedPosts } from "../model/use-feed-posts";

export function FeedPosts() {
  const [page, setPage] = useState(0);
  const { data: posts = [], isLoading, isError, error } = useFeedPosts(page);

  if (isLoading) return <PostLoading />;

  if (isError) return <PostError error={error} />;

  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <nav
        aria-label="Pagination"
        className="relative mt-6 flex items-center gap-4"
      >
        <Button
          variant="outline"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="cursor-pointer"
        >
          <ChevronLeft className="size-4" />
          Previous
        </Button>

        <span className="text-muted-foreground absolute top-0 right-0 min-w-20 text-center text-sm font-medium">
          Page {page + 1}
        </span>

        <Button
          variant="outline"
          onClick={() => setPage((p) => p + 1)}
          disabled={!posts || posts.length < 20}
          className="cursor-pointer"
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </nav>

      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>

      {/* Якщо йде фонове оновлення (placeholderData) — показуємо ледь помітний індикатор */}
      {/* {isPlaceholderData && <span style={{ opacity: 0.5 }}>Оновлення...</span>} */}
    </div>
  );
}

// infinite query,
// pagination,
// loading more,
// intersection observer.
