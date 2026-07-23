export type PostComment = {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
  parentCommentId: string | null;
  replies: Comment[];
  authorUserName: string;
  authorShortName: string;
};

export type CreatePostCommentPayload = {
  postId: string;
  content: string;
};
