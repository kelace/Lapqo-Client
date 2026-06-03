import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost, unlikePost } from "../api/getFeet";

export const useToggleLikePost = () => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: unlikePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });

  return { likeMutation, unlikeMutation };
};
