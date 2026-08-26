import { UserRoundX } from "lucide-react";

export function UserNotFound() {
  return (
    <div className="z-10 flex min-h-80 flex-col items-center justify-center rounded-2xl border px-4 text-center">
      <div className="bg-muted mb-4 flex size-14 items-center justify-center rounded-full">
        <UserRoundX className="text-muted-foreground size-7" />
      </div>

      <h2 className="text-lg font-semibold">User not found</h2>

      <p className="text-muted-foreground mt-1 max-w-sm text-sm">
        This profile doesn't exist or may have been removed.
      </p>
    </div>
  );
}
