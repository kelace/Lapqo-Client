import { api } from "./axios";

type User = {
  id: string;
  userName: string;
  namePreview: string;
  subscribersCount: number;
  isSubscribed: boolean;
};

export const getUser = async (useName: string): Promise<User> => {
  const data = await api.get<User>(`/users/${useName}`);
  return data.data;
};
