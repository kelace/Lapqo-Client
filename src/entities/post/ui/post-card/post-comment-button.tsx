import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/shadcn/lib/utils";
import { Button } from "@/shared/shadcn/ui/button";

type Props = {
  commentsCount: number;
  postId: string;
};

export function PostCommentButton({ commentsCount, postId }: Props) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={cn(
        "h-8 gap-1.5 rounded-lg px-2.5",
        "text-muted-foreground",
        "transition-all duration-200",
        "cursor-pointer",
        "active:scale-95",
      )}
    >
      <Link to={routes.posts.detail(postId)}>
        <MessageCircle className="h-4 w-4" />
        <span>{commentsCount}</span>
      </Link>
    </Button>
  );
}
