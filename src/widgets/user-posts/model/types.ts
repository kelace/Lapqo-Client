import type { PostComment } from "@/entities/comment";
import type { Post } from "@/entities/post/model/types";

export type PostActivityItem = {
  createdAt: string;
  type: "Post";
  item: Post;
};

type CommentActivityItem = {
  createdAt: string;
  type: "Comments";
  item: PostComment;
};

export type UserActivityItem = PostActivityItem | CommentActivityItem;
