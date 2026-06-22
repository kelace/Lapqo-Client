import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../api/getUserPosts";

export const useUserPosts = (userName: string) => {
  const query = useQuery({
    queryKey: ["posts", "user", userName],
    queryFn: () => getUserPosts(userName),
    enabled: !!userName,
  });

  return {
    ...query,
    data: query.data ?? [],
  };
};
