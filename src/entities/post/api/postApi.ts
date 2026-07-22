import { api } from "@/shared/api/axios";
import type {
  PostContent,
  PostId,
  UpdatePostPayload,
} from "../model/post.types";

export const postApi = {
  getPost: async (id: PostId) => {
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

  update: async ({ id, updates }: UpdatePostPayload) => {
    const { data } = await api.patch(`/posts/${id}`, updates);
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
