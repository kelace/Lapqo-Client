import { SubscriptionsList } from "@/entities/subscribe/ui/subscriptions-list";
import { SidebarNav } from "../navigation";

type Props = {
  isAuthenticated: boolean;
  isCollapsed: boolean;
  userName?: string;
};

export function SidebarBody({ isCollapsed, userName }: Props) {
  return (
    <>
      <SidebarNav isCollapsed={isCollapsed} userName={userName} />
      <SubscriptionsList isCollapsed={isCollapsed} />
    </>
  );
}
