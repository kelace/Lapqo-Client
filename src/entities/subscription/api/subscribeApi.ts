import { api } from "@/shared/api/axios";
import type { Subscribe } from "../model/types";

export const subscribeApi = {
  getSubscribes: async () => {
    const { data } = await api.get<Subscribe[]>(`/users/subscriptions`);
    return data;
  },

  subscribe: async (userId: string) => {
    const { data } = await api.post(`/subscriptions/${userId}`);
    console.log(userId);
    return data;
  },

  unSubscribe: async (userId: string) => {
    const { data } = await api.delete(`/subscriptions/${userId}`);
    return data;
  },
};
