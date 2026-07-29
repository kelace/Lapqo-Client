import { useMemo } from "react";
import { CreatePost } from "@/features/post-create/ui/post-create";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";
import { useIntersctionObserver } from "@/shared/hooks/use-intersction-observer/use-intersction-observer";
import { RouteError } from "@/shared/ui/route-error/route-error";
import type { PostActivityItem } from "../model/types";
import { useUserPosts } from "../model/use-user-posts";

export function UserPosts() {
  const { profileUserName, isOwnProfile } = useActiveProfile();

  if (!profileUserName) return <RouteError />;

  const {
    data: activityItems,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useUserPosts(profileUserName);

  const posts = useMemo(
    () =>
      activityItems
        ?.filter((item): item is PostActivityItem => item.type === "Post")
        ?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        ?.map((item) => item.item) ?? [],
    [activityItems],
  );

  const loadMoreRef = useIntersctionObserver({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (status === "pending") return <PostLoading />;
  if (status === "error") return <PostError error={error} />;

  return (
    <div className="flex flex-col gap-6">
      {isOwnProfile && <CreatePost />}

      <section>
        <h2 className="mb-3 text-center text-lg font-semibold">User Posts</h2>
        {posts?.length ? <PostList posts={posts} /> : <PostEmpty />}

        <div ref={loadMoreRef} style={{ height: 50, textAlign: "center" }}>
          {isFetchingNextPage && "Loading..."}
        </div>
      </section>
    </div>
  );
}
