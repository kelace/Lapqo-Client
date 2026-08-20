import { SubscriptionsList } from "@/entities/subscribe/ui/subscriptions-list";
import { LoginPromo } from "../login-promo";
import { SidebarNav } from "../navigation";

type Props = {
  isAuthenticated: boolean;
  isCollapsed: boolean;
  userName?: string;
};

export function SidebarBody({ isAuthenticated, isCollapsed, userName }: Props) {
  if (!isAuthenticated) {
    return <LoginPromo />;
  }

  return (
    <>
      <SidebarNav isCollapsed={isCollapsed} userName={userName} />
      <SubscriptionsList isCollapsed={isCollapsed} />
    </>
  );
}
