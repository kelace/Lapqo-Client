import { useFeedQuery } from "@/components/entities/post/model/useFeedPosts";
import { PostEmpty } from "@/components/entities/post/ui/PostEmpty";
import { PostError } from "@/components/entities/post/ui/PostError";
import { PostList } from "@/components/entities/post/ui/PostList";
import { PostLoading } from "@/components/entities/post/ui/PostLoading";

export function FeedPosts() {
  const { data: posts, isLoading, isError, error } = useFeedQuery();

  if (isLoading) return <PostLoading />;

  if (isError) return <PostError error={error} />;

  if (!posts || posts.length === 0) return <PostEmpty />;

  return <PostList posts={posts} />;
}
