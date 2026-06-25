import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userApi } from "@/components/entities/user/api/userApi";
import { userKeys } from "@/components/entities/user/keys/userKeys";

export const useSubscribeUser = (userId: string, userName?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => userApi.subscribe(userId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.byUserName(userName!),
      });
    },

    onError: () => {
      toast.error("Bad Request");
    },
  });

  return mutation;
};
