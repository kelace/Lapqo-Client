import {
  PostEmpty,
  PostError,
  PostList,
  PostLoading,
} from "@/entities/post/ui/post-list";
import { useGetFeedPosts } from "../model/useGetFeedPosts";

export function FeedPosts() {
  const { data: posts = [], isLoading, isError, error } = useGetFeedPosts();

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
