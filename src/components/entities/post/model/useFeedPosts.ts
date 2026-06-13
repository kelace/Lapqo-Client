import { useQuery } from "@tanstack/react-query";
import { getFeetPosts } from "../api/getFeetPosts";

export const useFeedQuery = () => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeetPosts(),
  });
};
