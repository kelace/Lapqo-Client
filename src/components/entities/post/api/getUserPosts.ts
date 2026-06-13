import { api } from "@/shared/api/axios";
import type { Post } from "../types";

export const getUserPosts = async (userName: string): Promise<Post[]> => {
  const response = await api.get<Post[]>(`/users/${userName}/posts`);
  return response.data;
};
