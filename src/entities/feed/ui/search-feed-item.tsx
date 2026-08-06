import { Heart, MessageCircle } from "lucide-react";
import type { Post } from "@/entities/post/model/types";
import { formatPostDate } from "@/shared/lib/createdAt";
import { truncateText } from "@/shared/lib/truncateText";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { HighlightText } from "@/shared/ui/highlight-text/HighlightText";

type Props = {
  post: Post;
  query: string;
};

export function SearchFeedItem({ post, query }: Props) {
  return (
    <div className="group hover:bg-accent/50 flex cursor-pointer flex-col gap-2 rounded-lg px-2 py-2 transition-colors">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback className="text-xs font-bold text-white">
              {post.authorUserName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="text-foreground text-sm font-semibold">
              {post.authorUserName}
            </span>
            <span className="text-muted-foreground text-xs">
              {formatPostDate(post.createdAt)}
            </span>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 line-clamp-2 text-sm leading-relaxed">
            <HighlightText text={truncateText(post.content)} query={query} />
          </p>

          <div className="mt-1 flex items-center gap-4">
            <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <Heart />
              <span>{post.likesCount}</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <MessageCircle /> <span>{post.commentsCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
