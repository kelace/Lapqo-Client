import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/entities/post/api/postApi";

export const usePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.like,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },

    onError: (err) => {
      console.error("Like failed:", err);
    },
  });
};

export const usePostUnlike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.unLike,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },

    onError: (err) => {
      console.error("Unlike failed:", err);
    },
  });
};

// optimistic update
// counters update
// feed sync
// notifications
