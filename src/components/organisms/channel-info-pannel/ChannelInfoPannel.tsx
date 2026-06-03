import { Bell, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { ChannelItem } from "../sidebar/ui/ChannelItem";
import { InfoSection } from "./ui/InfoSection";

export function ChannelInfoPanel() {
  return (
    <aside
      className="sticky top-0 h-screen w-[320px] flex flex-col overflow-y-auto 
    border border-gray-400/20 bg-[#0d1426] p-5
    "
    >
      {/* Header */}
      <div className="flex-col gap-2 px-3 py-4 text-center flexitems-center border-b border-gray-400/20">
        <Avatar className="mx-auto mb-2 w-35 h-35">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="mb-2">
          <p className="text-[18px] font-medium ">
            The Bartender's Bible channel
          </p>
          <p className="text-[12px] text-neutral-400 mt-0.5">
            Subscription: 200
          </p>
        </div>
        <div className="flex gap-1.5 justify-center">
          <button className="flex min-w-30 items-center gap-1 text-[14px] px-4 py-2 rounded-lg bg-[#5d2ac3] text-white font-medium  cursor-pointer">
            <Bell size={13} /> Subscribe
          </button>
          <button className="flex min-w-30 items-center justify-center gap-1 text-[14px] px-4 py-2 rounded-lg border border-gray-400/20  cursor-pointer">
            <Edit size={13} /> Write
          </button>
        </div>
      </div>

      <InfoSection title="Sup channels">
        {Array.from({ length: 2 }).map((_, i) => (
          <ChannelItem
            key={i}
            avatar="https://github.com/shadcn.png"
            name="Drinking beer channel"
            lastMessage="Tutorial #1 how drink beer without ..."
          />
        ))}
      </InfoSection>

      <InfoSection title="These posts of this author are trending">
        <ChannelItem
          avatar="https://github.com/shadcn.png"
          name="Drinking beer channel"
          lastMessage="Tutorial #1 how drink beer without ..."
        />
      </InfoSection>

      <InfoSection title="Local replies">
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-neutral-100">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-[12px] flex flex-col gap-0.5">
            <span className="font-medium text-neutral-800">Ivan Prokop </span>
            <span className="text-neutral-400">Create article dude</span>
          </div>
        </div>
      </InfoSection>
    </aside>
  );
}
