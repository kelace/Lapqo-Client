import { Skeleton } from "@/shared/shadcn/ui/skeleton";

export function PostsSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="rounded-xl border p-4 py-10">
          <div className="flex gap-3">
            <Skeleton className="size-10 shrink-0 rounded-full" />

            <div className="flex flex-1 flex-col gap-3">
              {/* Username */}
              <Skeleton className="h-4 w-28" />

              {/* Description */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
