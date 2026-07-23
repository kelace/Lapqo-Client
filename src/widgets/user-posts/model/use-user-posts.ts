import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getUserActivity } from "../api/get-user-activity";

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

      return {
        posts: sorted.filter((x) => x.type === "Post").map((x) => x.item),

        comments: sorted
          .filter((x) => x.type === "Comments")
          .map((x) => x.item),
      };
    },
  });
};
