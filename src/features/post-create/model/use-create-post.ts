import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/entities/post/api/postApi";
import { postsKeys } from "@/entities/post/api/postsKeys";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
