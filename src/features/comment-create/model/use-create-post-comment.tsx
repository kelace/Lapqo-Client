import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentKeys } from "@/entities/comment/api/comment-keys";
import { commentApi } from "@/entities/comment/api/commentApi";
import { postsKeys } from "@/entities/post/api/postsKeys";

export function useCreatePostComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.createPostComment,

    onSuccess: (createdComment) => {
      queryClient.invalidateQueries({
        queryKey: commentKeys.post(createdComment.postId),
      });
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
  });
}
