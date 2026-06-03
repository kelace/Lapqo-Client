import { PostItem } from "./PostItem";
import type { FeedPost } from "../types";

export function FeedList({ posts }: { posts: FeedPost[] }) {
  return (
    <ul className="divide-y">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
