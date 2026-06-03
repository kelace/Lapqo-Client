import { api } from "@/shared/api/axios";
import type { FeedPost } from "../types";

export const getFeed = async (): Promise<FeedPost[]> => {
  const response = await api.get<FeedPost[]>("/feed");

  return response.data;
};

export const likePost = async (postId: string) => {
  await api.post(`/posts/${postId}/like`);
};

export const unlikePost = async (postId: string) => {
  await api.post(`/posts/${postId}/unlike`);
};
