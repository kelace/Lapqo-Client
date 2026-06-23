import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/components/entities/post/api/postApi";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.update,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
