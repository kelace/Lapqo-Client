import type { Post } from "../../model/post.types";
import { PostItem } from "../post-item";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <ul className="space-y-3 py-3">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
