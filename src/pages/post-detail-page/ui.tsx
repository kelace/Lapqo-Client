import { useParams } from "react-router-dom";
import { PostDetail } from "@/widgets/post-detail/ui/post-detail";

export function PostDetailPage() {
  const { id } = useParams();
  if (!id) return <div>RouteError</div>;

  return <PostDetail postId={id} />;
}
