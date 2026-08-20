import { useMemo } from "react";
import { Loader2 } from "lucide-react";
import { PostEmpty, PostError, PostList, PostsSkeleton } from "@/entities/post";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";
import { useIntersctionObserver } from "@/shared/hooks/use-intersction-observer/use-intersction-observer";
import { RouteError } from "@/shared/ui/route-error/route-error";
import type { PostActivityItem } from "../model/types";
import { useUserPosts } from "../model/use-user-posts";
import { UserProfile } from "./user-profile";

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

  const postsContent = (() => {
    if (status === "pending") {
      return <PostsSkeleton />;
    }

    if (status === "error") {
      return <PostError error={error} />;
    }

    if (posts.length === 0) {
      return <PostEmpty />;
    }

    return <PostList posts={posts} />;
  })();

  return (
    <section className="flex h-full flex-col gap-2">
      <header>
        <UserProfile
          profileUserName={profileUserName}
          isOwnProfile={isOwnProfile}
        />
      </header>

      {/* {!isOwnProfile && <SearchUserPosts />} */}

      <div>
        {postsContent}

        <div
          ref={loadMoreRef}
          className="flex h-12 items-center justify-center"
        >
          {isFetchingNextPage && (
            <Loader2 className="text-muted-foreground size-5 animate-spin" />
          )}
        </div>
      </div>
    </section>
  );
}
