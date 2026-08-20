import { Settings2 } from "lucide-react";
import { SubscribeButton } from "@/features/subscribe-user";
import { Button } from "@/shared/shadcn/ui/button";

export function UserProfileAction({
  isOwnProfile,
  userId,
  isSubscribed,
}: {
  isOwnProfile: boolean;
  userId: string;
  isSubscribed?: boolean;
}) {
  if (isOwnProfile) {
    return (
      <Button
        variant="outline"
        className="cursor-cursor rounded-xl py-5"
        disabled
      >
        <Settings2 />
        Edit profile
      </Button>
    );
  }

  return <SubscribeButton userId={userId} isSubscribed={isSubscribed} />;
}
