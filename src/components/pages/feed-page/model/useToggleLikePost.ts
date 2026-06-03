import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { likePost, unlikePost } from "../api/getFeed";

const invalidateFeed = (queryClient: QueryClient) => {
  queryClient.invalidateQueries({ queryKey: ["feed"] });
};

export const useToggleLikePost = () => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: likePost,
    onSuccess: () => invalidateFeed(queryClient),
  });

  const unlikeMutation = useMutation({
    mutationFn: unlikePost,
    onSuccess: () => invalidateFeed(queryClient),
  });

  return { likeMutation, unlikeMutation };
};
