import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { SearchUserPosts } from "@/features/search-user-posts/ui/search-user-posts";
import { PostEmpty, PostError, PostList, PostLoading } from "@/entities/post";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";
import { useIntersctionObserver } from "@/shared/hooks/use-intersction-observer/use-intersction-observer";
import { RouteError } from "@/shared/ui/route-error/route-error";
import { ScrollToTop } from "@/shared/ui/scroll-to-top/ScrollToTop";
import type { PostActivityItem } from "../model/types";
import { useUserPosts } from "../model/use-user-posts";

export function UserPosts() {
  const { profileUserName, isOwnProfile } = useActiveProfile();
  console.log(profileUserName);

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
    <section className="relative flex min-h-[calc(100vh-2rem)] flex-col gap-2">
      {/* {!isOwnProfile && <SearchUserPosts />} */}
      <div className="relative">
        {/* Cover */}
        <div className="surface h-40 w-full sm:h-50" />

        {/* Back button */}
        <button className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60">
          <ArrowLeft className="size-5" />
        </button>

        <div className="px-4 pb-5">
          {/* Avatar + кнопка */}
          <div className="-mt-12 flex items-end justify-between">
            <div className="border-background bg-muted flex size-24 items-center justify-center overflow-hidden rounded-full border-4 text-2xl shadow-md">
              OL
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 mb-1.5 rounded-full px-5 py-1.5 text-sm font-semibold transition">
              Follow
            </button>
          </div>

          {/* Ім'я */}
          <div className="mt-3">
            <h1 className="text-xl font-bold">Oleksandr</h1>
            <p className="text-muted-foreground text-sm">@oleksandr</p>
          </div>

          {/* Bio */}
          <p className="mt-2.5 text-sm leading-relaxed">
            Building cool stuff ✨
          </p>

          <div className="flex items-end justify-between">
            <div className="mt-4 flex gap-5 text-sm">
              <div>
                <span className="font-bold">145</span>{" "}
                <span className="text-muted-foreground">posts</span>
              </div>
              <div>
                <span className="font-bold">312</span>{" "}
                <span className="text-muted-foreground">Following</span>
              </div>
              <div>
                <span className="font-bold">1.2K</span>{" "}
                <span className="text-muted-foreground">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        {posts?.length ? <PostList posts={posts} /> : <PostEmpty />}

        <div ref={loadMoreRef} className="h-12 text-center">
          {isFetchingNextPage && "Loading..."}
        </div>
      </div>
    </section>
  );
}

// const Feed = () => {
//   return (
//     <div>
//       <div className="mb-10">
//         <h1 className="mb-4 text-lg font-semibold text-neutral-100">Feed</h1>

//         {Array.from({ length: 50 }).map((_, i) => (
//           <div key={i} className="border-b border-red-500 py-20">
//             Пост {i + 1}
//           </div>
//         ))}
//       </div>

//       {/* Маска — НЕ впливає на layout */}

//       <div className="sticky bottom-10 z-20">
//         <div className="border-t border-neutral-800 bg-neutral-900 p-3 py-10">
//           form-bar
//         </div>
//       </div>
//     </div>
//   );
// };
