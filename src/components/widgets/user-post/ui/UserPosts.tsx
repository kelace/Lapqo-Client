import { useUserPosts } from "@/components/entities/post/model/useUserPosts";
import { PostEmpty } from "@/components/entities/post/ui/PostEmpty";
import { PostError } from "@/components/entities/post/ui/PostError";
import { PostList } from "@/components/entities/post/ui/PostList";
import { PostLoading } from "@/components/entities/post/ui/PostLoading";
import { useProfileUser } from "@/shared/hooks/useProfileUser";
import { RouteError } from "@/shared/ui/route-error/RouteError";

export function UserPosts() {
  const { userName } = useProfileUser();

  if (!userName)
    return <RouteError message="User not found in route context" />;

  const { data: posts, isLoading, isError, error } = useUserPosts(userName);

  if (isLoading) return <PostLoading />;

  if (isError) return <PostError error={error} />;

  if (!posts || posts.length === 0) return <PostEmpty />;

  return <PostList posts={posts} />;
}
