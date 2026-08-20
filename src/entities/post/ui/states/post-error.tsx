import { CircleAlert } from "lucide-react";

type Props = {
  error: Error | null;
};

export function PostError({ error }: Props) {
  return (
    <div className="z-10 flex flex-col items-center justify-center gap-4 rounded-xl border p-10 text-center">
      <div className="bg-destructive/10 flex size-12 items-center justify-center rounded-full">
        <CircleAlert className="text-destructive size-6 animate-pulse" />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold">Failed to load posts</h3>

        <p className="text-muted-foreground max-w-md text-sm">
          {error?.message ?? "Unknown error"}
        </p>
      </div>
    </div>
  );
}
