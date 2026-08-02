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
    <aside className="bg-background/60 sticky top-0 h-screen w-80 overflow-y-auto border backdrop-blur-xl">
      <div className="flex flex-col items-center gap-8 p-8 pt-12">
        <div className="relative">
          <Avatar className="ring-background size-32 shadow-2xl ring-[6px] transition-transform duration-300 hover:scale-105">
            <AvatarFallback className="from-primary/20 via-primary/10 to-background text-primary bg-linear-to-br text-3xl font-bold">
              {user.namePreview ?? <PawPrint className="size-8 opacity-70" />}
            </AvatarFallback>
          </Avatar>

          {isOwnProfile && (
            <span className="bg-primary text-primary-foreground ring-background absolute -right-1 -bottom-1 flex h-6 items-center gap-1 rounded-full px-2.5 text-xs font-bold shadow-lg ring-[3px]">
              <PawPrint className="size-4" />
              you
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-xl font-bold uppercase">{user.userName}</h1>
          <p className="text-muted-foreground text-sm font-medium">
            <span className="text-foreground font-semibold tabular-nums">
              {subscribersCount}
            </span>{" "}
            <span className="text-muted-foreground/70">
              {subscribersCount === 1 ? "subscriber" : "subscribers"}
            </span>
          </p>
        </div>

        <div className="w-full">
          <ProfileAction
            isOwnProfile={isOwnProfile}
            userId={user.id}
            isSubscribed={user.isSubscribed}
          />
        </div>
      </div>
    </aside>
  );
}
