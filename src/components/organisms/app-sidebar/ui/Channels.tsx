import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/shared/shadcn/ui/sidebar";
import { ChannelItem } from "./ChannelItem";

export function Channels() {
  const channels = Array(5).fill({
    name: "Discovery channel",
    preview: "The World is Just Awesome",
  });

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[11px] font-medium tracking-wide uppercase">
        Your channels
      </SidebarGroupLabel>

      <SidebarMenu className="flex flex-col gap-2">
        {channels.map((ch, i) => (
          <ChannelItem key={i} name={ch.name} lastMessage={ch.preview} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
