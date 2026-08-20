import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CreatePostDialog } from "@/features/create-post-dialog/create-post-dialog";
import { useUserByUsername } from "@/entities/user";
import { routes } from "@/shared/config/routes";
import { UserNotFound } from "./user-not-found";
import { UserProfileAction } from "./user-profile-action";
import { UserProfileSkeleton } from "./user-profile-skeleton";

type Props = {
  profileUserName: string;
  isOwnProfile: boolean;
};

export function UserProfile({ profileUserName, isOwnProfile }: Props) {
  const { data: user, isLoading } = useUserByUsername(profileUserName);

  if (isLoading) return <UserProfileSkeleton />;

  if (!user) return <UserNotFound />;

  const subscribersCount = user.subscribersCount ?? 0;

  return (
    <div className="surface relative z-10 mb-4 overflow-hidden">
      <div className="h-40 w-full bg-[linear-gradient(120deg,#ff0080,#ff8a00,#ffe600,#00e676,#00c8ff,#635bff,#d500f9)]" />

      <Link
        to={routes.feed}
        aria-label="Back to feed"
        className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <ArrowLeft className="size-5" />
      </Link>

      <div className="px-4 pb-5">
        <div className="-mt-10 flex items-end justify-between">
          <div className="border-background bg-muted flex size-24 items-center justify-center overflow-hidden rounded-full border-4 text-2xl shadow-md">
            {user?.namePreview}
          </div>

          <UserProfileAction
            isOwnProfile={isOwnProfile}
            userId={user.id}
            isSubscribed={user.isSubscribed}
          />
        </div>

        <div className="mt-3">
          <h1 className="text-xl font-bold">{user?.userName}</h1>
          <p className="text-muted-foreground text-sm">@{user?.userName}</p>
        </div>

        <p className="mt-2.5 text-sm leading-relaxed">
          Bio: One idea is better than nothing ✨
        </p>

        <div className="flex items-end justify-between">
          <div className="mt-4 flex w-full items-center justify-between gap-5 text-sm">
            <div className="flex gap-1">
              <span className="text-muted-foreground">Subscribers:</span>

              <span className="font-bold">{subscribersCount}</span>
            </div>
            <CreatePostDialog />
          </div>
        </div>
      </div>
    </div>
  );
}
