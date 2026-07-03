export type PostComment = {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
  parentCommentId: string | null;
  replies: Comment[];
};

export type CreateCommentPayload = {
  postId: string;
  content: string;
};
