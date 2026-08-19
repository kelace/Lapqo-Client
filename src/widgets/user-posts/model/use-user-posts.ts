import { useInfiniteQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getUserActivity } from "../api/get-user-activity";

// useUserActivity
// useUserPosts() => Post[]
// useUserComments() => Comment[]

const PAGE_SIZE = 10;

export const useUserPosts = (userName: string) => {
  return useInfiniteQuery({
    queryKey: postsKeys.user(userName),
    queryFn: ({ pageParam = 0 }) =>
      getUserActivity(userName, pageParam, PAGE_SIZE),
    initialPageParam: 0,
    enabled: !!userName,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return lastPageParam + 1; //
    },
    select: (data) => data.pages.flatMap((page) => page),
  });
};
