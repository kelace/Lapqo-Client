import { useQuery } from "@tanstack/react-query";
import { subscribeApi } from "../api/subscribeApi";
import { subscriptionKeys } from "../api/subscribeKeys";

export function useSubscribes() {
  return useQuery({
    queryKey: subscriptionKeys.all,
    queryFn: subscribeApi.getSubscribes,
  });
}
