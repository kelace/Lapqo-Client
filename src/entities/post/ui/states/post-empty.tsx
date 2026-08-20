import { FileText } from "lucide-react";

export function PostEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-10 text-center">
      <div className="bg-muted flex size-12 items-center justify-center rounded-full">
        <FileText className="text-muted-foreground size-6" />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold">No posts yet</h3>

        <p className="text-muted-foreground max-w-md text-sm">
          This user hasn’t published anything yet.
        </p>
      </div>
    </div>
  );
}
