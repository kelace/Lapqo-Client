import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userApi } from "@/entities/user/api/userApi";
import { userKeys } from "@/entities/user/keys/userKeys";

export const useSubscribeUser = (userId: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => userApi.subscribe(userId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });

  return mutation;
};
