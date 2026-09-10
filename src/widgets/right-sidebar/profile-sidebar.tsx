import { PawPrint } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import { useActiveProfile } from "@/entities/user";
import { useUserByUsername } from "@/entities/user/model/use-user-by-username";
import { useIsUserAuthenticated } from "@/shared/hooks/use-authentication/use-is-user-authenticated";
import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { Sidebar, SidebarContent } from "@/shared/shadcn/ui/sidebar";
import { Skeleton } from "@/shared/shadcn/ui/skeleton";
import { LoginPromo } from "./login-promo";

type Props = {
  className?: string;
};

export function ProfileSidebar({ className }: Props) {
  const { isOwnProfile, profileUserName } = useActiveProfile();
  const { data: user, isLoading } = useUserByUsername(profileUserName);

  const isAuthenticated = useIsUserAuthenticated();

  let display: JSX.Element = (
    <aside className={cn("surface overflow-y-auto", className)}>
      <div className="flex flex-col items-center gap-6 p-8 pt-10">
        {isLoading ? (
          <>
            <Skeleton className="size-32 rounded-full" />

            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </>
        ) : !user ? null : (
          <>
            <div className="relative">
              <Avatar className="ring-background size-32 shadow-2xl">
                <AvatarFallback className="from-primary/20 via-primary/10 to-background text-primary bg-linear-to-br text-3xl font-bold">
                  {user.namePreview ?? (
                    <PawPrint className="size-8 opacity-70" />
                  )}
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
                  {user.subscribersCount ?? 0}
                </span>{" "}
                <span className="text-muted-foreground/70">
                  {(user.subscribersCount ?? 0) === 1
                    ? "subscriber"
                    : "subscribers"}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </aside>
  );

  const loadingElement = (
    <>
      <Skeleton className="size-32 rounded-full" />

      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </>
  );

  const userProfileElement = (
    <>
      <div className="relative flex justify-center mb-1 pt-7">
        <Avatar className=" ring-background size-32 shadow-2xl">
          <AvatarFallback className="bg-muted text-accent-foreground bg-linear-to-br text-3xl font-bold">
            {user?.namePreview ?? <PawPrint className="size-8 opacity-70" />}
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
        <h1 className="text-xl font-semibold">{user?.userName}</h1>

        <p className="text-muted-foreground text-sm font-medium">
          <span className="text-foreground font-semibold tabular-nums">
            {user?.subscribersCount ?? 0}
          </span>{" "}
          <span className="text-muted-foreground/70">
            {(user?.subscribersCount ?? 0) === 1 ? "subscriber" : "subscribers"}
          </span>
        </p>
        <p className="mt-2.5 text-sm leading-relaxed">
          Bio: One idea is better than nothing ✨
        </p>
      </div>
    </>
  );

  const ContentElement = isLoading ? (
    loadingElement
  ) : user ? (
    userProfileElement
  ) : (
    <></>
  );

  return (
    <Sidebar variant="sidebar" side="right" className="top-[63px] bg-sidebar">
      <SidebarContent>
        {ContentElement}
        {!isAuthenticated ? <LoginPromo /> : null}
      </SidebarContent>
    </Sidebar>
  );
}
