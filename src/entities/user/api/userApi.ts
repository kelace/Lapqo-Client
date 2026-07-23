import { api } from "@/shared/api/axios";
import type { User } from "../model";

export const userApi = {
  getUserByUserName: async (userName: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${userName}`);
    return data;
  },
};
