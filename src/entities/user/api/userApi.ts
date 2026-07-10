import { api } from "@/shared/api/axios";
import type { Subscribe, User } from "../types";

export const userApi = {
  getUser: async (userName: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${userName}`);
    return data;
  },

  getSubscribes: async () => {
    const { data } = await api.get<Subscribe[]>(`/users/subscriptions`);
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
