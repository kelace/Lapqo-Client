import { useInfiniteQuery } from "@tanstack/react-query";
import { commentApi } from "@/entities/comment";
import { commentKeys } from "../api/comment-keys";

const PAGE_SIZE = 20;

export function usePostComments(postId: string) {
  return useInfiniteQuery({
    queryKey: commentKeys.post(postId),
    queryFn: ({ pageParam = 0 }) =>
      commentApi.getPostComments(postId, pageParam, PAGE_SIZE),

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPages.length;
    },

    enabled: !!postId,

    initialPageParam: 0,
  });
}
