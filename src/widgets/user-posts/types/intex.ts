import type { PostComment } from "@/entities/comment";
import type { Post } from "@/entities/post/model/post.types";

// import type { Post } from "@/entities/post/types";

type PostActivityItem = {
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
