import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/shared/ui/avatar";
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
    <aside className="flex flex-col h-screen gap-4 overflow-hidden border border-gray-400/20 bg-[#0d1426] p-5 min-w-[320px]">
      <div className="space-y-2.5 flex items-start justify-between">
        <div className="flex gap-3 ">
          <Avatar className="w-15 h-15">
            <AvatarImage src={undefined} />
            <AvatarFallback>{user?.namePreview}</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <div>
            <p className="text-[14px] font-medium text-neutral-800">
              {user?.userName}
            </p>
            <p className="text-[12px] text-neutral-400">@hyakkimaru</p>
          </div>
        </div>
        <SettingsBar />
      </div>
      {/* Replies preview */}
      <div className="px-3 py-2 border border-gray-400/20 rounded-lg">
        <h3 className="text-[11px] font-medium uppercase tracking-wide text-neutral-400 mb-2">
          Replies
        </h3>
        <div className="flex items-center gap-1.5 px-2 py-2 ">
          <AvatarGroup>
            {Array.from({ length: 4 }).map((_, index) => (
              <Avatar key={index} className="size-7">
                <AvatarImage src={undefined} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      </div>

      <FilterTabs />

      <SideLinks />

      {/* ChannelList */}
      <ul className="flex-1 overflow-y-auto border border-gray-400/20 rounded-lg p-4">
        <h3 className="text-[11px] font-medium uppercase tracking-wide text-neutral-400 mb-3">
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
