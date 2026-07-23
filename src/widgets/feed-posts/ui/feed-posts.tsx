import {
  PostEmpty,
  PostError,
  PostList,
  PostLoading,
} from "@/entities/post/ui/post-list";
import { useFeedPosts } from "../model/use-feed-posts";

export function FeedPosts() {
  const { data: posts = [], isLoading, isError, error } = useFeedPosts();

  if (isLoading) return <PostLoading />;

  if (isError) return <PostError error={error} />;

  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>
    </div>
  );
}

// infinite query,
// pagination,
// loading more,
// intersection observer.
