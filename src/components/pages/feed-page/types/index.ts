export type FeedPost = {
  id: string;
  authorId: string;
  authorUserName: string;
  content: string;
  createdAt: string;
  likedByCurrentUser: boolean;
  likesCount: number;
};
