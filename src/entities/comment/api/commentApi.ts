import { api } from "@/shared/api/axios";
import type { CreateCommentPayload, PostComment } from "../types/comment-types";

export const commentApi = {
  getComments: async (postId: string) => {
    const { data } = await api.get<PostComment[]>(`/posts/${postId}/comments`);
    return data;
  },

  createComment: async ({
    postId,
    content,
  }: CreateCommentPayload): Promise<PostComment> => {
    const { data } = await api.post(`/posts/${postId}/comments`, { content });
    return data;
  },
};
