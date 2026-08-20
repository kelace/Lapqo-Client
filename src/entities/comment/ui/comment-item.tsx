import { Link } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { formatCommentDate } from "@/shared/lib/createdAt";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import type { PostComment } from "../model/types";

type Props = {
  comment: PostComment;
};

export function CommentItem({ comment }: Props) {
  return (
    <div className="flex gap-3 border p-4">
      <Link
        to={routes.users.detail(comment.authorUserName)}
        className="shrink-0"
        aria-label={`Open ${comment.authorUserName}'s profile`}
      >
        <Avatar className="size-8">
          <AvatarFallback>{comment.authorShortName}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to={routes.users.detail(comment.authorUserName)}
            className="min-w-0 truncate text-sm font-semibold hover:underline"
          >
            {comment.authorUserName}
          </Link>

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
