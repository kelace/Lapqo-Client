import { Edit } from "lucide-react";
import { SubscribeButton } from "@/features/user-subscription/ui/subscribe-button";
import { useUser } from "@/entities/user/model/useUser";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";

export function ProfileSidebar({ userName }: { userName?: string }) {
  const { data: user } = useUser(userName);

  if (!user) return null;

  return (
    <aside className="bg-sidebar border-border-gray sticky top-0 h-screen w-[320px] border">
      <div className="mx-auto max-w-5xl rounded-lg p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <Avatar className="size-35">
              <AvatarFallback className="text-2xl">
                {user ? user.namePreview : "?"}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold uppercase">{user?.userName}</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Followers {user?.subscribersCount}
            </p>
          </div>

          <div className="flex items-start justify-center gap-4">
            <div className="flex justify-center gap-1.5">
              <SubscribeButton
                userId={user.id}
                isSubscribed={user.isSubscribed}
              />
              <button className="flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg border border-gray-400/20 px-4 py-2 text-[14px]">
                <Edit size={13} /> Write
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
