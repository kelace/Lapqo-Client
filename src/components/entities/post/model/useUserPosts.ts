import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/getUserPosts";

export const useUserPosts = (userName: string) => {
  return useQuery({
    queryKey: ["posts", "user", userName],
    queryFn: () => getUserPosts(userName),
    enabled: !!userName,
  });
};
