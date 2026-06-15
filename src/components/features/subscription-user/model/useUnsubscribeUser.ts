import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unSubscribeUser } from "../api";
import toast from "react-hot-toast";

export function useUnsubscribeUser(userId: string, userName?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => unSubscribeUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", userName] });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });
}
