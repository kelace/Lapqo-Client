import { api } from "@/shared/api/axios";
import type { UserActivityItem } from "../model/types";

export const getUserActivity = async (
  userName: string,
  page: number,
  pageSize: number,
): Promise<UserActivityItem[]> => {
  const { data } = await api.get<UserActivityItem[]>(
    `/users/${userName}/posts`,
    {
      params: {
        page,
        pageSize,
      },
    },
  );

  return data;
};
