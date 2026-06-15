import { api } from "@/shared/api/axios";

export const likePost = async (postId: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await api.post(`/posts/${postId}/like`);

  console.log(res.data);
  return res.data;
};

export const unlikePost = async (postId: string) => {
  const res = await api.post(`/posts/${postId}/unlike`);

  return res.data;
};
