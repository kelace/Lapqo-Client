import { PawPrint } from "lucide-react";
import { useActiveProfile } from "@/entities/user";
import { useUserByUsername } from "@/entities/user/model/use-user-by-username";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { ProfileAction } from "./ui/profile-action";
import { ProfileSkeleton } from "./ui/profile-skeleton";

export function ProfileSidebar({ userName }: { userName?: string }) {
  const { data: user, isLoading } = useUserByUsername(userName);
  const { isOwnProfile } = useActiveProfile();

  if (isLoading) return <ProfileSkeleton />;

  if (!user) return null;

  const subscribersCount = user.subscribersCount ?? 0;

  return (
    <aside className="surface sticky top-4 h-[calc(100vh-2rem)] w-80 overflow-y-auto backdrop-blur-xl">
      <div className="flex flex-col items-center gap-6 p-8 pt-10">
        <div className="relative">
          <Avatar className="ring-background size-32 shadow-2xl">
            <AvatarFallback className="from-primary/20 via-primary/10 to-background text-primary bg-linear-to-br text-3xl font-bold">
              {user.namePreview ?? <PawPrint className="size-8 opacity-70" />}
            </AvatarFallback>
          </Avatar>
          {isOwnProfile && (
            <span className="bg-background text-foreground ring-background border-border absolute -right-1.5 -bottom-1 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-semibold shadow-sm ring-2">
              <PawPrint className="text-primary size-3" />
              You
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-xl font-semibold">{user.userName}</h1>
          <p className="text-muted-foreground text-sm font-medium">
            <span className="text-foreground font-semibold tabular-nums">
              {subscribersCount}
            </span>{" "}
            <span className="text-muted-foreground/70">
              {subscribersCount === 1 ? "subscriber" : "subscribers"}
            </span>
          </p>
        </div>

        <ProfileAction
          isOwnProfile={isOwnProfile}
          userId={user.id}
          isSubscribed={user.isSubscribed}
        />
      </div>
    </aside>
  );
}
