import { useQuery } from "@tanstack/react-query";
import { commentApi } from "@/entities/comment";
import { commentKeys } from "../api/comment-keys";

export function usePostComments(postId: string) {
  return useQuery({
    queryKey: commentKeys.post(postId),
    queryFn: () => commentApi.getPostComments(postId),
    enabled: Boolean(postId),
  });
}

// use-post-comments
