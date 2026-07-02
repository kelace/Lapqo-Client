import type { Post } from "@/entities/post/types";
import { api } from "@/shared/api/axios";

type UserActivityItem = {
  createdAt: string;
  item: Post;
  type: string;
};

export const getUserPosts = async (userName: string): Promise<Post[]> => {
  const { data } = await api.get<UserActivityItem[]>(
    `/users/${userName}/posts`,
  );

  return data.map((x) => x.item);
};
