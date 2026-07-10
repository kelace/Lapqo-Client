import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/userApi";
import { userKeys } from "../keys/userKeys";

export function useGetSubscribes() {
  return useQuery({
    queryKey: userKeys.subscriptions(),
    queryFn: userApi.getSubscribes,
  });
}
