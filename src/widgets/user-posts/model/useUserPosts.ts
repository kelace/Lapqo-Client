import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/keys/postsKeys";
import { getUserActivity } from "../api/getUserPosts";

// useGetUserPosts | useUserActivity
export const useUserPosts = (userName: string) => {
  return useQuery({
    queryKey: postsKeys.user(userName),
    queryFn: () => getUserActivity(userName),
    enabled: !!userName,
    select: (data) => {
      const sorted = [...data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      const posts = sorted.filter((x) => x.type === "Post");
      const comments = sorted.filter((x) => x.type === "Comments");
      return { posts, comments };
    },
  });
};
