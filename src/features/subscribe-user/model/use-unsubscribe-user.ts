import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { subscribeApi, subscriptionKeys } from "@/entities/subscribe";
import { userKeys } from "@/entities/user/api/userKeys";

export function useUnsubscribeUser(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => subscribeApi.unSubscribe(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subscriptionKeys.all });
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });
}
