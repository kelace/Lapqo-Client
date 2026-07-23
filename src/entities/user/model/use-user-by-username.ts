import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/userApi";
import { userKeys } from "../api/userKeys";

export const useUserByUsername = (userName?: string) => {
  return useQuery({
    queryKey: userKeys.byUserName(userName!),
    queryFn: () => userApi.getUserByUserName(userName!),
    enabled: Boolean(userName),
  });
};
