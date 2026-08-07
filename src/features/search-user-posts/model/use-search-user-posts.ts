import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { userApi } from "@/entities/user/api/userApi";

const PAGE_SIZE = 10;

// 256 fix keys
export const useSearchUserPosts = (userName: string, query: string) => {
  return useInfiniteQuery({
    queryKey: ["user", "search", query, userName],
    queryFn: ({ pageParam = 0 }) =>
      userApi.search(userName, query, pageParam, PAGE_SIZE),

    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return pages.length;
    },

    initialPageParam: 0,

    enabled: query.trim().length > 0,
    placeholderData: keepPreviousData,
  });
};
