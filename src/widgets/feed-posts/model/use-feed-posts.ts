import { useInfiniteQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getFeedPosts } from "../api/get-feed-posts";

const PAGE_SIZE = 30;

export const useFeedPosts = () => {
  return useInfiniteQuery({
    queryKey: postsKeys.feed(),

    queryFn: ({ pageParam = 0 }) => getFeedPosts(pageParam, PAGE_SIZE),

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPages.length;
    },

    initialPageParam: 0,

  });
};
