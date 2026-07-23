import type { Post } from "../../model/types";
import { PostCard } from "../post-card/post-card";

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
