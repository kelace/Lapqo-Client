import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "../api/postApi";
import { postsKeys } from "../api/postsKeys";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.delete,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
