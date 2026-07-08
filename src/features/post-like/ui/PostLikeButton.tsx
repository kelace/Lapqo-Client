import { Heart } from "lucide-react";
import { useRequireAuth } from "@/shared/hooks/auth/use-require-auth";
import { cn } from "@/shared/shadcn/lib/utils";
import { usePostLike } from "../model/usePostLike";

type Props = {
  postId: string;
  liked: boolean;
  likesCount: number;
};

// 256
export function PostLikeButton({ postId, liked, likesCount }: Props) {
  const { likeMutation, unlikeMutation } = usePostLike();

  const { requireAuth } = useRequireAuth();

  const handleLike = () => {
    if (liked) {
      requireAuth(() => unlikeMutation.mutate(postId));
      // unlikeMutation.mutate(postId);
    } else {
      requireAuth(() => likeMutation.mutate(postId));
      // likeMutation.mutate(postId);
    }
  };

  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-full bg-[#333d42] px-3 py-1 text-sm transition-colors hover:text-rose-500",
        liked && "text-rose-500",
      )}
      aria-label={liked ? "unlike" : "like"}
      onClick={handleLike}
    >
      <Heart size={16} className={cn(liked && "fill-rose-500")} />
      <span>{likesCount}</span>
    </button>
  );
}
