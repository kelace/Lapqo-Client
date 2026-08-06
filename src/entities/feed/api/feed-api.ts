import type { Post } from "@/entities/post/model/types";
import { api } from "@/shared/api/axios";

export const feedApi = {
  getFeedPosts: async (page: number, pageSize: number): Promise<Post[]> => {
    const { data } = await api.get<Post[]>("/feed", {
      params: { page, pageSize },
    });
    return data;
  },

  searchFeed: async (
    key: string,
    page: number,
    pageSize: number,
  ): Promise<Post[]> => {
    const { data } = await api.get<Post[]>("/feed/search", {
      params: { key, page, pageSize },
    });
    return data;
  },
};
