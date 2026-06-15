import { api } from "@/shared/api/axios";
import type { Post } from "../types";

export const getFeetPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/feed");

  console.log(response.data);

  return response.data;
};
