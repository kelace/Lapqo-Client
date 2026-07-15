import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/entities/comment/api/commentApi";

//256
export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.createComment,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
