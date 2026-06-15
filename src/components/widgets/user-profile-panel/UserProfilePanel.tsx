import { Bell, Edit } from "lucide-react";
import { useUser } from "@/shared/hooks/query/useUser";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { useSubscribeUser } from "@/components/features/subscription-user/model/useSubscribeUser";
import { useUnsubscribeUser } from "@/components/features/subscription-user/model/useUnsubscribeUser";

export function UserProfilePanel({ userName }: { userName?: string }) {
  // const { payload } = useCurrentUser();
  const { data: user } = useUser(userName);

  const subscribeMutation = useSubscribeUser(user?.id ?? "", userName);
  const unsubscribeUser = useUnsubscribeUser(user?.id ?? "", userName);

  const isPending = subscribeMutation.isPending || unsubscribeUser.isPending;

  const handleSubscribe = () => {
    if (!user?.id) return;

    if (user?.isSubscribed) {
      unsubscribeUser.mutate();
    } else {
      subscribeMutation.mutate();
    }
  };

  return (
    <aside className="bg-sidebar sticky top-0 h-screen w-[320px] border">
      <div className="border-border-gray mx-auto h-screen max-w-5xl rounded-lg border p-6">
        <div className="border-border-gray flex flex-col gap-6 border-b p-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <Avatar className="size-35">
              {/* <AvatarImage src={user?.avatarUrl ?? undefined} /> */}
              <AvatarFallback className="text-2xl">
                {user?.namePreview}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold uppercase">{user?.userName}</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Followers {user?.subscribersCount}
            </p>
          </div>

          <div className="flex items-start justify-center gap-4">
            <div className="flex justify-center gap-1.5">
              <button
                className="bg-primary flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-[14px] font-medium text-white"
                disabled={isPending}
                onClick={handleSubscribe}
              >
                <Bell size={13} /> {user?.isSubscribed ? "Following" : "Follow"}
              </button>
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
