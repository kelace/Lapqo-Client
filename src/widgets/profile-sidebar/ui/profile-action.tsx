import confetti from "canvas-confetti";
import { Settings2 } from "lucide-react";
import { SubscribeButton } from "@/features/subscribe-user";
import { Button } from "@/shared/shadcn/ui/button";

let lastLaunch = 0;

export function launchConfetti() {
  const now = Date.now();

  if (now - lastLaunch < 1000) return;

  lastLaunch = now;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

export function ProfileAction({
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
        className="w-full cursor-pointer rounded-xl py-5"
      >
        <Settings2 />
        Edit profile
      </Button>
    );
  }

  return <SubscribeButton userId={userId} isSubscribed={isSubscribed} />;
}
