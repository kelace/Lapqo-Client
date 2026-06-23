import { api } from "@/shared/api/axios";
import type { CreatePost, UpdatePost } from "../types";

export const postApi = {
  create: async (data: CreatePost) => {
    const res = await api.post("/posts", data);
    return res.data;
  },
  delete: async (id: string) => {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  },

  // wait PATCH /posts/:id
  update: async ({ id, data }: { id: string; data: UpdatePost }) => {
    const res = await api.patch(`/posts/${id}`, data);
    return res.data;
  },

  like: async (postId: string) => {
    const res = await api.post(`/posts/${postId}/like`);
    return res.data;
  },

  unLike: async (postId: string) => {
    const res = await api.post(`/posts/${postId}/unlike`);

    return res.data;
  },
};
