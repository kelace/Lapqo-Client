import { Heart } from "lucide-react";
import { useRequireOrRedirectToAuth } from "@/shared/hooks/use-authentication/use-required-or-redirect-auth";
import {
  usePostLike,
  usePostUnlike,
} from "@/entities/post/model/use-post-like";
import { cn } from "@/shared/shadcn/lib/utils";
import { Button } from "@/shared/shadcn/ui/button";

type Props = {
  postId: string;
  liked: boolean;
  likesCount: number;
};

export function PostLikeButton({ postId, liked, likesCount }: Props) {
  const likeMutation = usePostLike();
  const unlikeMutation = usePostUnlike();

  const isPending = likeMutation.isPending || unlikeMutation.isPending;
  const requireAuth = useRequireOrRedirectToAuth();

  const handleLike = () => {
    if (requireAuth()) return;

    if (liked) {
      unlikeMutation.mutate(postId);
    } else {
      likeMutation.mutate(postId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={liked ? "unlike" : "like"}
      disabled={isPending}
      onClick={handleLike}
      className={cn(
        "h-8 gap-1.5 rounded-lg px-2.5",
        "text-muted-foreground",
        "transition-all duration-200",
        "cursor-pointer hover:bg-rose-500/10 hover:text-rose-500",
        "active:scale-95",
        liked && ["text-rose-500", "hover:bg-rose-500/15 hover:text-rose-600"],
      )}
    >
      <Heart
        size={16}
        className={cn("transition-all duration-200", liked && "fill-current")}
      />
      <span className="text-xs font-medium tabular-nums">{likesCount}</span>
    </Button>
  );
}
