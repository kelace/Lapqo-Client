import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/components/entities/post/keys/postsKeys";
import { getUserPosts } from "../api/getUserPosts";

// useGetUserPosts
export const useUserPosts = (userName: string) => {
  const query = useQuery({
    queryKey: postsKeys.user(userName),
    queryFn: () => getUserPosts(userName),
    enabled: !!userName,
  });

  return {
    ...query,
    data: query.data ?? [],
  };
};
