import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../api/getFeed";

export const useFeedQuery = () => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeed(),
  });
};
