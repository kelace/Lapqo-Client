import { api } from "@/shared/api/axios";
import type { User } from "../types";

export const userApi = {
  getUser: async (userName: string): Promise<User> => {
    const { data } = await api.get(`/users/${userName}`);
    return data;
  },

  subscribe: async (userId: string) => {
    const { data } = await api.post(`/subscriptions/${userId}`);
    return data;
  },

  unSubscribe: async (userId: string) => {
    const { data } = await api.delete(`/subscriptions/${userId}`);
    return data;
  },
};
