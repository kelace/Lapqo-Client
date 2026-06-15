import { api } from "@/shared/api/axios";

export const subscribeUser = async (userId: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await api.post(`/subscriptions/${userId}`);

  return res.data;
};

export const unSubscribeUser = async (userId: string) => {
  const response = await api.delete(`/subscriptions/${userId}`);
  return response.data;
};
