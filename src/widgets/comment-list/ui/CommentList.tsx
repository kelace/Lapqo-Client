import { useGetComments } from "@/entities/comment";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";

export function CommentList({ postId }: { postId: string }) {
  const { data: comments = [], isLoading } = useGetComments(postId);

  if (isLoading) return <div>Завантаження коментарів...</div>;

  return (
    <ul className="space-y-5 py-4">
      {comments.map((comment) => (
        <li key={comment.id} className="flex gap-3 border p-2">
          <Avatar className="size-9">
            <AvatarFallback>X</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Anonymous</span>

              <span className="text-muted-foreground text-xs">
                {comment.createdAt}
              </span>
            </div>

            <p className="mt-1 text-sm leading-6 whitespace-pre-wrap">
              {comment.content}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
