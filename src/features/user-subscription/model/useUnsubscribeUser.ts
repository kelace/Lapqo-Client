import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userApi } from "@/entities/user/api/userApi";
import { userKeys } from "@/entities/user/keys/userKeys";

export function useUnsubscribeUser(userId: string, userName?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => userApi.unSubscribe(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.byUserName(userName!),
      });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });
}
