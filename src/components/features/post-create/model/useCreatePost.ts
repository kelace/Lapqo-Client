import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/components/entities/post/api/postApi";
import { postsKeys } from "@/components/entities/post/keys/postsKeys";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
};
