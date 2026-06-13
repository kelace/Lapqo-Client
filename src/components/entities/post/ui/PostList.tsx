import type { Post } from "../types";
import { PostItem } from "./PostItem";

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

// const { likeMutation, unlikeMutation } = useToggleLikePost();

// const handleToggleLike = (id: string, liked: boolean) => {
//   liked ? unlikeMutation.mutate(id) : likeMutation.mutate(id);
// };

// <PostItem post={post} onToggleLike={handleToggleLike} />;

// features / toggle - like - post / ui / ToggleLikeButton.tsx;

{
  /* <PostItem post={post}>
  <ToggleLikeButton post={post} />
</PostItem>; */
}
