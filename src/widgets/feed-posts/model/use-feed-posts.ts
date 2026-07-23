import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getFeedPosts } from "../api/get-feed-posts";

export const useFeedPosts = () => {
  return useQuery({
    queryKey: postsKeys.feed(),
    queryFn: () => getFeedPosts(),
  });
};
