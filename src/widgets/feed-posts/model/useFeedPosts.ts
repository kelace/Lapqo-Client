import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api";
import { getFeetPosts } from "../api/getFeetPosts";

// useGetFeedPosts
export const useFeedQuery = () => {
  return useQuery({
    queryKey: postsKeys.feed(),
    queryFn: () => getFeetPosts(),
  });
};
