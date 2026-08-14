import { Bell } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";
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
    <Button
      disabled={isPending}
      onClick={handleSubscribe}
      variant="outline"
      className="w-full cursor-pointer rounded-xl py-5"
    >
      <Bell />
      {isSubscribed ? "Following" : "Follow"}
    </Button>
  );
}
