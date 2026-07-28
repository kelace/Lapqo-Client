import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postApi } from "@/entities/post/api/postApi";
import { postsKeys } from "@/entities/post/api/postsKeys";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsKeys.all });
    },
    onError: () => {
      toast.error("Failed to update the post.");
    },
  });
};
