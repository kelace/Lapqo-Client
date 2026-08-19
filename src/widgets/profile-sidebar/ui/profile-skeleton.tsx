export function ProfileSkeleton() {
  return (
    <aside className="surface border-border/60 bg-background/60 sticky top-0 h-screen w-80 border-r backdrop-blur-xl">
      <div className="flex flex-col items-center gap-6 p-8 pt-12">
        <div className="ring-background size-32 animate-pulse rounded-full bg-gray-500 shadow-xl ring-4" />
        <div className="h-6 w-36 animate-pulse rounded-lg bg-gray-500" />
        <div className="h-4 w-24 animate-pulse rounded-md bg-gray-500" />
        <div className="mt-2 h-10 w-full animate-pulse rounded-xl bg-gray-500" />
      </div>
    </aside>
  );
}
