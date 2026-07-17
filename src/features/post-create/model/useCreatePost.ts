import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi, postsKeys } from "@/entities/post/api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
