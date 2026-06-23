import { useQuery } from "@tanstack/react-query";

import { userApi } from "../api/userApi";

export const useUser = (userName?: string) => {
  return useQuery({
    queryKey: ["user", userName],
    queryFn: () => userApi.getUser(userName!),
    enabled: !!userName,
  });
};
