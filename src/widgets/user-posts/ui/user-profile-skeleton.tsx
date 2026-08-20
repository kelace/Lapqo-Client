export function UserProfileSkeleton() {
  return (
    <div className="relative">
      <div className="surface h-40 w-full animate-pulse sm:h-50" />

      <div className="px-4 pb-5">
        <div className="-mt-12 flex items-end justify-between">
          <div className="bg-muted border-background size-24 animate-pulse rounded-full border-4" />

          <div className="bg-muted h-10 w-28 animate-pulse rounded-xl" />
        </div>

        <div className="mt-3 space-y-2">
          <div className="bg-muted h-6 w-32 animate-pulse rounded-md" />
          <div className="bg-muted h-4 w-24 animate-pulse rounded-md" />
        </div>

        <div className="mt-3 space-y-2">
          <div className="bg-muted h-4 w-full max-w-md animate-pulse rounded-md" />
          <div className="bg-muted h-4 w-2/3 max-w-sm animate-pulse rounded-md" />
        </div>

        <div className="mt-4">
          <div className="bg-muted h-4 w-32 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
}
