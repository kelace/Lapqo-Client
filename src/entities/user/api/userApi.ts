import type { Post } from "@/entities/post/model/types";
import { api } from "@/shared/api/axios";
import type { User } from "../model";

export const userApi = {
  getUserByUserName: async (userName: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${userName}`);
    return data;
  },

  search: async (
    userName: string,
    key: string,
    page: number,
    pageSize: number,
  ): Promise<Post[]> => {
    const { data } = await api.get<Post[]>("/posts/search", {
      params: { userName, key, page, pageSize },
    });
    return data;
  },
};
