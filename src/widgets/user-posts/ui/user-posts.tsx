import { CreatePost } from "@/features/post-create/ui/post-create";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";
import { RouteError } from "@/shared/ui/route-error/route-error";
import { useUserPosts } from "../model/use-user-posts";

// features/user-post
export function UserPosts() {
  const { profileUserName, isOwnProfile } = useActiveProfile();

  if (!profileUserName) return <RouteError />;

  const { data, isLoading, isError, error } = useUserPosts(profileUserName);

  if (isLoading) return <PostLoading />;
  if (isError) return <PostError error={error} />;

  return (
    <div className="flex flex-col gap-6">
      {isOwnProfile && <CreatePost />}

      <section>
        <h2 className="mb-3 text-center text-lg font-semibold">User Posts</h2>
        {data?.length ? <PostList posts={data} /> : <PostEmpty />}
      </section>
    </div>
  );
}
