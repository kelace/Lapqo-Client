import { api } from "@/shared/api/axios";
import type { PostContent, PostId } from "../model/types";

export const postApi = {
  getPostById: async (id: PostId) => {
    const { data } = await api.get(`/posts/${id}`);
    return data;
  },

  create: async (newPost: PostContent) => {
    const { data } = await api.post("/posts", newPost);
    return data;
  },

  delete: async (id: PostId) => {
    const { data } = await api.delete(`/posts/${id}`);
    return data;
  },

  update: async ({ id, content }: { id: string; content: string }) => {
    const { data } = await api.patch("/posts", JSON.stringify(content), {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });

    return data;
  },

  like: async (postId: PostId) => {
    const { data } = await api.post(`/posts/${postId}/like`);
    return data;
  },

  unLike: async (postId: PostId) => {
    const { data } = await api.post(`/posts/${postId}/unlike`);
    return data;
  },
};
