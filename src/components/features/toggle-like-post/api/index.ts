import { api } from "@/shared/api/axios";

export const likePost = async (postId: string) => {
  await api.post(`/posts/${postId}/like`);
};

export const unlikePost = async (postId: string) => {
  await api.post(`/posts/${postId}/unlike`);
};
