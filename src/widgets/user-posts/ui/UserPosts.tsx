import { CreatePost } from "@/features/post-create/ui/CreatePost";
import { PostEmpty } from "@/entities/post/ui/PostEmpty";
import { PostError } from "@/entities/post/ui/PostError";
import { PostList } from "@/entities/post/ui/PostList";
import { PostLoading } from "@/entities/post/ui/PostLoading";
import { useProfileOwner } from "@/entities/user/model/useProfileUser";
import { RouteError } from "@/shared/ui/route-error/RouteError";
import { useUserPosts } from "../model/useUserPosts";

export function UserPosts() {
  const { userName, isSelfProfile } = useProfileOwner();

  if (!userName) return <RouteError />;

  const { data: posts, isLoading, isError, error } = useUserPosts(userName);

  if (isLoading) return <PostLoading />;
  if (isError) return <PostError error={error} />;

  const hasPosts = posts?.length > 0;

  return (
    <div className="relative flex flex-col">
      <div className="mb-3 shrink-0 bg-[#0d1426]">
        {isSelfProfile && <CreatePost />}
      </div>

      <div className="flex-1">
        {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
      </div>
    </div>
  );
}
