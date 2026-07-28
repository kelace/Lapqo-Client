import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getFeedPosts } from "../api/get-feed-posts";

const PAGE_SIZE = 20;

export const useFeedPosts = (page: number) => {
  return useQuery({
    queryKey: postsKeys.feed(page),
    queryFn: () => getFeedPosts(page, PAGE_SIZE),
    placeholderData: (previousData) => previousData,
  });
};
