import { formatCommentDate } from "@/shared/lib/createdAt";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import type { PostComment } from "../model/types";

type Props = {
  comment: PostComment;
};

export function CommentItem({ comment }: Props) {
  return (
    <div className="flex gap-3 border p-2">
      <Avatar className="size-9 shrink-0">
        <AvatarFallback>{comment.authorShortName}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <span className="min-w-0 truncate text-sm font-semibold">
            {comment.authorUserName}
          </span>

          <span className="text-muted-foreground shrink-0 text-xs">
            {formatCommentDate(comment.createdAt)}
          </span>
        </div>

        <p className="mt-1 text-sm leading-6 wrap-break-word whitespace-pre-wrap">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
