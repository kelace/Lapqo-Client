import { api } from "@/shared/api/axios";

type CreatePost = {
  content: string;
};

export const postApi = {
  create: async (data: CreatePost) => {
    const res = await api.post("/posts", data);
    return res.data;
  },
  delete: async (id: string) => {
    const res = await api.delete(`/posts/${id}`);
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
