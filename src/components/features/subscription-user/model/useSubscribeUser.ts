import { useMutation, useQueryClient } from "@tanstack/react-query";
import { subscribeUser } from "../api";
import toast from "react-hot-toast";

export const useSubscribeUser = (userId: string, userName?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => subscribeUser(userId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", userName],
      });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });

  return mutation;
};
