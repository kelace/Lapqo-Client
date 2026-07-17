import {
  PostEmpty,
  PostError,
  PostList,
  PostLoading,
} from "@/entities/post/ui/post-list";
import { useFeedQuery } from "../model/useFeedPosts";

export function FeedPosts() {
  const { data: posts = [], isLoading, isError, error } = useFeedQuery();

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
