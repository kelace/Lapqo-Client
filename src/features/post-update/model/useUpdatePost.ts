import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/entities/post/api/postApi";
import { postsKeys } from "@/entities/post/keys/postsKeys";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
