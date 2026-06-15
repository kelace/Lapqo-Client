import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost, unlikePost } from "../api";
import type { Post } from "@/components/entities/post/types";

export const useToggleLikePost = () => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: likePost,
    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueriesData({
        queryKey: ["posts"],
      });

      queryClient.setQueriesData<Post[]>({ queryKey: ["posts"] }, (old) =>
        old?.map((post) => {
          return post.id === postId
            ? {
                ...post,
                likedByCurrentUser: true,
                likesCount: post.likesCount + 1,
              }
            : post;
        }),
      );

      return { previousPosts };
    },

    onError: (_err, _vars, context) => {
      context?.previousPosts.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },

    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ["posts"] });
    // },

    onSettled: (_data, error) => {
      if (error) queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: unlikePost,

    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueriesData({ queryKey: ["posts"] });

      queryClient.setQueriesData<Post[]>({ queryKey: ["posts"] }, (old) =>
        old?.map((post) =>
          post.id === postId
            ? {
                ...post,
                likedByCurrentUser: false,
                likesCount: post.likesCount - 1,
              }
            : post,
        ),
      );

      return { previousPosts };
    },

    onError: (_err, _vars, context) => {
      context?.previousPosts.forEach(([queryKey, data]) => {
        queryClient.setQueryData(queryKey, data);
      });
    },

    onSettled: (_data, error) => {
      if (error) queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { likeMutation, unlikeMutation };
};

// optimistic update
// counters update
// feed sync
// notifications
