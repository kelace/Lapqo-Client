import { Bell } from "lucide-react";
import { useSubscribeUser } from "../model/use-subscribe-user";
import { useUnsubscribeUser } from "../model/use-unsubscribe-user";

type Props = {
  userId: string;
  isSubscribed: boolean | undefined;
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
      disabled={isPending}
      onClick={handleSubscribe}
      className="group bg-destructive/10 text-destructive hover:bg-destructive/20 hover:text-destructive/90 active:scale-[0.97]from-primary/20 via-primary/10 to-background flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border bg-linear-to-br px-5 py-2.5 font-semibold transition-all"
    >
      <Bell size={13} /> {isSubscribed ? "Following" : "Follow"}
    </button>
  );
}
