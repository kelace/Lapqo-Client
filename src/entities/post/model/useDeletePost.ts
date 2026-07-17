import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi, postsKeys } from "../api";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.delete,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
