import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/getUserPosts";

export const useUserPosts = (userName: string) => {
  return useQuery({
    queryKey: ["feed", userName],
    queryFn: () => getUserPosts(userName),
    enabled: !!userName,
  });
};
