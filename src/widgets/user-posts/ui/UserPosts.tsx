import { CommentCarousel } from "@/widgets/comment-carousel/CommentCarousel";
import { CreatePost } from "@/features/post-create/ui/CreatePost";
import {
  PostEmpty,
  PostError,
  PostList,
  PostLoading,
} from "@/entities/post/ui/post-list";
import { useProfileOwner } from "@/entities/user/model/useProfileUser";
import { RouteError } from "@/shared/ui/route-error/RouteError";
import { useUserPosts } from "../model/useUserPosts";

export function UserPosts() {
  const { userName, isSelfProfile } = useProfileOwner();

  if (!userName) return <RouteError />;

  const { data, isLoading, isError, error } = useUserPosts(userName);
  const posts = data?.posts?.map((post) => post.item) ?? [];
  const comments = data?.comments?.map((comment) => comment.item) ?? [];

  if (isLoading) return <PostLoading />;
  if (isError) return <PostError error={error} />;

  return (
    <div className="flex flex-col gap-6">
      {isSelfProfile && <CreatePost />}

      {comments.length > 0 && (
        <section>
          <CommentCarousel comments={comments} />
        </section>
      )}

      <section>
        <h2 className="mb-3 text-center text-lg font-semibold">User Posts</h2>

        {posts.length > 0 ? <PostList posts={posts} /> : <PostEmpty />}
      </section>
    </div>
  );
}
