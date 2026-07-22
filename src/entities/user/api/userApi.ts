import { api } from "@/shared/api/axios";
import type { User } from "../types";

export const userApi = {
  getUser: async (userName: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${userName}`);
    return data;
  },
};
