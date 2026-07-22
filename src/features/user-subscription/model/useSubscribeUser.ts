import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { subscribeApi } from "@/entities/subscription/api/subscribeApi";
import { subscriptionKeys } from "@/entities/subscription/api/subscribeKeys";
import { userKeys } from "@/entities/user/api/userKeys";

export const useSubscribeUser = (userId: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => subscribeApi.subscribe(userId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: subscriptionKeys.all });
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });

  return mutation;
};
