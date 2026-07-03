import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/entities/comment/api/commentApi";

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.createComment,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}
