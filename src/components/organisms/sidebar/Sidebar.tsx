import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/shared/shadcn/ui/avatar";
import { SettingsBar } from "./ui/SettingsBar";
import { FilterTabs } from "./ui/FilterTabs";
import { ChannelItem } from "./ui/ChannelItem";
import { SideLinks } from "./ui/SideLinks";
import { useCurrentUser } from "@/shared/hooks/useCurrentUser";
import { useUser } from "@/shared/hooks/query/useUser";

export function Sidebar() {
  const { userName: me } = useCurrentUser();
  const { data: user } = useUser(me);

  const channels = Array(5).fill({
    name: "Discovery channel",
    preview: "The World is Just Awesome",
  });

  return (
    <aside className="border-border-gray bg-sidebar flex h-screen min-w-[320px] flex-col gap-4 overflow-hidden rounded-xl border p-5">
      <div className="flex items-start justify-between space-y-2.5">
        <div className="flex gap-3">
          <Avatar className="h-15 w-15">
            <AvatarImage src={undefined} />
            <AvatarFallback>{user?.namePreview}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[14px] font-medium uppercase">
              {user?.userName}
            </p>
            <p className="text-text-gray y text-[12px]">@{user?.userName}</p>
          </div>
        </div>
        <SettingsBar />
      </div>
      <FilterTabs />
      <SideLinks />
      {/* ChannelList */}
      <ul className="border-border-gray flex-1 overflow-y-auto rounded-lg border p-4">
        <h3 className="text-text-gray mb-3 text-[11px] font-medium tracking-wide uppercase">
          Your channels
        </h3>
        {channels.map((ch, i) => (
          <ChannelItem
            key={i}
            name={ch.name}
            avatar={ch.img}
            lastMessage={ch.preview}
          />
        ))}
      </ul>
    </aside>
  );
}
