import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/userApi";
import { userKeys } from "../keys/userKeys";

export const useUser = (userName?: string) => {
  return useQuery({
    queryKey: userKeys.byUserName(userName!),
    queryFn: () => userApi.getUser(userName!),
    enabled: Boolean(userName),
  });
};
