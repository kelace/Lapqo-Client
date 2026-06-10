import { PostItem } from "./PostItem";
import type { FeedPost } from "../types";

type FeedListProps = {
  posts: FeedPost[];
};

export function FeedList({ posts }: FeedListProps) {
  return (
    <ul className="divide-y border">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
