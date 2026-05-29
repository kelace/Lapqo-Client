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

export function Sidebar() {
  const channels = Array(5).fill({
    name: "Drinking beer channel",
    img: "https://github.com/shadcn.png",
    preview: "Tutorial #1 how drink beer without ...",
  });

  return (
    <aside className="flex flex-col overflow-hidden border-r border-neutral-400">
      <div className="pt-4 border-b border-neutral-100 space-y-2.5 flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <div>
            <p className="text-[14px] font-medium text-neutral-800">Bohdan</p>
            <p className="text-[12px] text-neutral-400">@hyakkimaru</p>
          </div>
        </div>
        <SettingsBar />
      </div>
      {/* Replies preview */}
      <div className="px-3 py-2">
        <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
          Replies
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-200">
        <AvatarGroup>
          {Array.from({ length: 4 }).map((_, index) => (
            <Avatar key={index} className="size-5">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
      <FilterTabs />

      {/* ChannelList */}
      <ul className="flex-1 overflow-y-auto">
        {channels.map((ch, i) => (
          // <li>{ch.name}</li>
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
