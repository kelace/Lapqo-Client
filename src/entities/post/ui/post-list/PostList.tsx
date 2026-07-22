import type { Post } from "../../model/post.types";
import { PostCard } from "../post-card/PostCard";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <ul className="space-y-4 py-3">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
