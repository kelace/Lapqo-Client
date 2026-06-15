import { Heart } from "lucide-react";
import { useToggleLikePost } from "../model/useToggleLikePost";
import { cn } from "@/shared/shadcn/lib/utils";

type Props = {
  postId: string;
  liked: boolean;
  likesCount: number;
};

export function ToggleLikeButton({ postId, liked, likesCount }: Props) {
  const { likeMutation, unlikeMutation } = useToggleLikePost();

  const handleLike = () => {
    if (liked) {
      unlikeMutation.mutate(postId);
    } else {
      likeMutation.mutate(postId);
    }
  };

  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1 text-sm transition-colors hover:text-rose-500",
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
