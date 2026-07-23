import type { Post } from "@/entities/post/model/types";
import { api } from "@/shared/api/axios";

export const getFeedPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/feed");

  return response.data;
};
