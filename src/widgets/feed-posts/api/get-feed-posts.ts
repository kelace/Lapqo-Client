import type { Post } from "@/entities/post/model/types";
import { api } from "@/shared/api/axios";

export const getFeedPosts = async (
  page: number,
  pageSize: number,
): Promise<Post[]> => {
  const response = await api.get<Post[]>("/feed", {
    params: { page, pageSize },
  });
  return response.data;
};
