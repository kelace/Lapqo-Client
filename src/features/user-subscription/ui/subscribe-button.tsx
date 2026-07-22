import { Bell } from "lucide-react";
import { useSubscribeUser } from "../model/useSubscribeUser";
import { useUnsubscribeUser } from "../model/useUnsubscribeUser";

type Props = {
  userId: string;
  isSubscribed: boolean;
};

export function SubscribeButton({ userId, isSubscribed }: Props) {
  const subscribeUser = useSubscribeUser(userId);
  const unsubscribeUser = useUnsubscribeUser(userId);

  const isPending = subscribeUser.isPending || unsubscribeUser.isPending;

  const handleSubscribe = () => {
    if (isSubscribed) {
      unsubscribeUser.mutate();
    } else {
      subscribeUser.mutate();
    }
  };

  return (
    <button
      className="bg-primary flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-[14px] font-medium text-white"
      disabled={isPending}
      onClick={handleSubscribe}
    >
      <Bell size={13} /> {isSubscribed ? "Following" : "Follow"}
    </button>
  );
}
