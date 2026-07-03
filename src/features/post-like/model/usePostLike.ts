import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/entities/post/api/postApi";
import type { Post } from "@/entities/post/types";

// 256
export const usePostLike = () => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: postApi.like,
    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueriesData({ queryKey: ["posts"] });

      queryClient.setQueriesData<Post[]>({ queryKey: ["posts"] }, (old) => {
        if (!Array.isArray(old)) return old;
        return old?.map((post) => {
          return post.id === postId
            ? {
                ...post,
                likedByCurrentUser: true,
                likesCount: post.likesCount + 1,
              }
            : post;
        });
      });

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
    mutationFn: postApi.unLike,

    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueriesData({ queryKey: ["posts"] });

      queryClient.setQueriesData<Post[]>({ queryKey: ["posts"] }, (old) => {
        if (!Array.isArray(old)) return old;
        return old?.map((post) => {
          return post.id === postId
            ? {
                ...post,
                likedByCurrentUser: false,
                likesCount: post.likesCount - 1,
              }
            : post;
        });
      });

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
