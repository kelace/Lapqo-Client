import { api } from "@/shared/api/axios";
import type { CreatePostCommentPayload, PostComment } from "../model/types";

export const commentApi = {
  getPostComments: async (postId: string, page: number, pageSize: number) => {
    const { data } = await api.get<PostComment[]>(`/posts/${postId}/comments`, {
      params: { page, pageSize },
    });
    return data;
  },

  createPostComment: async (
    payload: CreatePostCommentPayload,
  ): Promise<PostComment> => {
    const { data } = await api.post(`/posts/${payload.postId}/comments`, {
      content: payload.content,
    });
    return data;
  },
};
