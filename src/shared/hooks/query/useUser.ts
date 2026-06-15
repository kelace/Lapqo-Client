import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/shared/api/user.api";

export const useUser = (userName?: string) => {
  return useQuery({
    queryKey: ["user", userName],
    queryFn: () => getUser(userName!),
    enabled: !!userName,
  });
};
