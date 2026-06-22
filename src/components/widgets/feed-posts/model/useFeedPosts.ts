import { useQuery } from "@tanstack/react-query";
import { getFeetPosts } from "../api/getFeetPosts";
// import { getFeetPosts } from "../api/getFeetPosts";

export const useFeedQuery = () => {
  return useQuery({
    queryKey: ["posts", "feed"],
    queryFn: () => getFeetPosts(),
  });
};
