import { CreatePost } from "@/features/post-create/ui/CreatePost";
import { PostEmpty } from "@/entities/post/ui/PostEmpty";
import { PostError } from "@/entities/post/ui/PostError";
import { PostList } from "@/entities/post/ui/PostList";
import { PostLoading } from "@/entities/post/ui/PostLoading";
import { useProfileOwner } from "@/entities/user/model/useProfileUser";
import { RouteError } from "@/shared/ui/route-error/RouteError";
import { useUserPosts } from "../model/useUserPosts";
import "./UserPosts.css";

export function UserPosts() {
  const { userName, isSelfProfile } = useProfileOwner();

  if (!userName) return <RouteError />;

  const { data: posts, isLoading, isError, error } = useUserPosts(userName);

  if (isLoading) return <PostLoading />;
  if (isError) return <PostError error={error} />;

  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 scrollbar-none overflow-y-auto">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>
      <div className="hrink-0">{isSelfProfile && <CreatePost />}</div>
    </div>
  );
}
