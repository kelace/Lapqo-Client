import { Skeleton } from "@/shared/shadcn/ui/skeleton";

export function SidebarAccountSkeleton({
  isCollapsed,
}: {
  isCollapsed: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-2 py-2">
      <Skeleton className="size-8 shrink-0 rounded-full" />

      {!isCollapsed && (
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      )}
    </div>
  );
}
