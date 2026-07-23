import { api } from "@/shared/api/axios";
import type {
  CreatePostCommentPayload,
  PostComment,
} from "../types/comment-types";

export const commentApi = {
  getPostComments: async (postId: string) => {
    const { data } = await api.get<PostComment[]>(`/posts/${postId}/comments`);
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
