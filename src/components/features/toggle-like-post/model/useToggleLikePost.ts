import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { likePost, unlikePost } from "../api";

const invalidateFeed = (queryClient: QueryClient) => {
  queryClient.invalidateQueries({ queryKey: ["feed"] });

  // queryClient.invalidateQueries({ queryKey: ["feed"] });
  // queryClient.invalidateQueries({ queryKey: ["user-posts"] });
  // ["posts", "feed"]
  // [("posts", userName)];
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

// optimistic update
// counters update
// feed sync
// notifications
