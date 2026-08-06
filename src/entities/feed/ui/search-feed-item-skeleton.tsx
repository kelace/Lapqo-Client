import { Skeleton } from "@/shared/shadcn/ui/skeleton";

export function SearchFeedItemSkeleton() {
  return (
    <div className="space-y-3 py-3">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <Skeleton className="h-4 w-full" />

      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}
