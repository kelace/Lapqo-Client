import { Heart } from "lucide-react";
import { useRequireAuth } from "@/app/routes/guards/use-required-auth";
import {
  usePostLike,
  usePostUnlike,
} from "@/entities/post/model/use-post-like";
import { cn } from "@/shared/shadcn/lib/utils";

type Props = {
  postId: string;
  liked: boolean;
  likesCount: number;
};

export function PostLikeButton({ postId, liked, likesCount }: Props) {
  const likeMutation = usePostLike();
  const unlikeMutation = usePostUnlike();

  const isPending = likeMutation.isPending || unlikeMutation.isPending;
  const requireAuth = useRequireAuth();

  const handleLike = () => {
    if (requireAuth()) return;

    if (liked) {
      unlikeMutation.mutate(postId);
    } else {
      likeMutation.mutate(postId);
    }
  };

  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-full bg-[#333d42] px-3 py-1 text-sm transition-colors hover:text-rose-500",
        liked && "text-rose-500",
      )}
      aria-label={liked ? "unlike" : "like"}
      disabled={isPending}
      onClick={handleLike}
    >
      <Heart size={16} className={cn(liked && "fill-rose-500")} />
      <span>{likesCount}</span>
    </button>
  );
}
