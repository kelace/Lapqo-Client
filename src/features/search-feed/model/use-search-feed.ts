import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { feedApi } from "@/entities/feed/api/feed-api";

const PAGE_SIZE = 10;
export const useSearchFeed = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["feed", "search", query],
    queryFn: ({ pageParam = 0 }) =>
      feedApi.searchFeed(query, pageParam, PAGE_SIZE),

    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return pages.length;
    },

    initialPageParam: 0,

    enabled: query.trim().length > 0,
    placeholderData: keepPreviousData,
  });
};
