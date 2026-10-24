import { useQuery } from "@tanstack/react-query";
import { subscribeApi } from "../api/subscribeApi";
import { subscriptionKeys } from "../api/subscribeKeys";

export function useSubscribes() {
  return useQuery({
    queryKey: subscriptionKeys.all,
    queryFn: subscribeApi.getSubscribes,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: true,
  });
}
