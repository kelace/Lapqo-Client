export type Post = {
  id: string;
  authorId: string;
  authorUserName: string;
  content: string;
  createdAt: string;
  commentsCount: number;
  likedByCurrentUser: boolean;
  likesCount: number;
  shortName: string;
};

export type PostId = Post["id"];
export type PostContent = Pick<Post, "content">;

export type UpdatePostPayload = {
  id: PostId;
  updates: PostContent;
};
