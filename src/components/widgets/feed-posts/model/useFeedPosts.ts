import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/components/entities/post/keys/postsKeys";
import { getFeetPosts } from "../api/getFeetPosts";

// useGetFeedPosts
export const useFeedQuery = () => {
  return useQuery({
    queryKey: postsKeys.feed(),
    queryFn: () => getFeetPosts(),
  });
};
