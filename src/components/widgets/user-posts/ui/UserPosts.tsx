import { PostEmpty } from "@/components/entities/post/ui/PostEmpty";
import { PostError } from "@/components/entities/post/ui/PostError";
import { PostList } from "@/components/entities/post/ui/PostList";
import { PostLoading } from "@/components/entities/post/ui/PostLoading";
import { useProfileOwner } from "@/components/entities/user/model/useProfileUser";
import { CreatePost } from "@/components/features/post-create/ui/CreatePost";
import { RouteError } from "@/shared/ui/route-error/RouteError";

import { useUserPosts } from "../model/useUserPosts";

import "./UserPosts.css";

function QueryState<T>({
  isLoading,
  isError,
  error,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  children: React.ReactNode;
}) {
  if (isLoading) return <PostLoading />;
  if (isError) return <PostError error={error} />;
  return <>{children}</>;
}

export function UserPosts() {
  const { userName, isSelfProfile } = useProfileOwner();

  if (!userName) return <RouteError />;

  const { data: posts, isLoading, isError, error } = useUserPosts(userName);

  const hasPosts = posts?.length > 0;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 scrollbar-none overflow-y-auto">
        <QueryState isLoading={isLoading} isError={isError} error={error}>
          {hasPosts ? <PostList posts={posts} /> : <PostEmpty />}
        </QueryState>
      </div>
      <div className="hrink-0">{isSelfProfile && <CreatePost />}</div>
    </div>
  );
}
