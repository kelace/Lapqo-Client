import { useQuery } from "@tanstack/react-query";
import { postsKeys } from "@/entities/post/api/postsKeys";
import { getUserActivity } from "../api/get-user-activity";

//  useUserActivity
// useUserPosts() => Post[]
// useUserComments() => Comment[]
export const useUserPosts = (userName: string) => {
  return useQuery({
    queryKey: postsKeys.user(userName),
    queryFn: () => getUserActivity(userName),
    enabled: !!userName,
    select: (data) =>
      [...data]
        .filter((x) => x.type === "Post")
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((x) => x.item),
  });
};
