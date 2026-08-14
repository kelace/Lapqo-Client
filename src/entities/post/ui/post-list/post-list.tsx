import type { Post } from "../../model/types";
import { PostCard } from "../post-card/post-card";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <ul className="space-y-7 py-3 pt-5 max-w-[660px] mx-auto">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
