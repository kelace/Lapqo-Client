import { api } from "@/shared/api/axios";
import type { UserActivityItem } from "../types/intex";

export const getUserActivity = async (
  userName: string,
): Promise<UserActivityItem[]> => {
  const { data } = await api.get<UserActivityItem[]>(
    `/users/${userName}/posts`,
  );

  return data;
};
