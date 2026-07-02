import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import { SidebarMenuItem, useSidebar } from "@/shared/shadcn/ui/sidebar";

type ChannelItemProps = {
  name: string;
  avatar?: string;
  lastMessage?: string;
  time?: string;
};

export function ChannelItem({ name, avatar }: ChannelItemProps) {
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenuItem className="flex items-center justify-center border p-2">
      <button
        className={cn(
          "flex w-full items-center rounded-lg",
          isCollapsed ? "justify-center" : "justify-start gap-2",
        )}
      >
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>

        {!isCollapsed && <span>{name}</span>}
      </button>
    </SidebarMenuItem>
  );
}
