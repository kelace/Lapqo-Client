import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi, postsKeys } from "@/entities/post/api";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
