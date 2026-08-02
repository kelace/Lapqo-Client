import confetti from "canvas-confetti";
import { SubscribeButton } from "@/features/subscribe-user";

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
  const handleClick = () => {
    launchConfetti();
  };

  if (isOwnProfile) {
    return (
      <button
        onClick={handleClick}
        className="group text-destructive to-background flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-2.5 font-semibold transition-all disabled:opacity-50"
      >
        Welcome
      </button>
    );
  }

  return <SubscribeButton userId={userId} isSubscribed={isSubscribed} />;
}
