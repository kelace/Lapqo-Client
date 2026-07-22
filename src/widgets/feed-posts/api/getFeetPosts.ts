import type { Post } from "@/entities/post/model/post.types";
import { api } from "@/shared/api/axios";

export const getFeetPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/feed");

  return response.data;
};
