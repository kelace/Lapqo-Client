import { Bell, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import { ChannelItem } from "../sidebar/ui/ChannelItem";
import { InfoSection } from "./ui/InfoSection";

export function ChannelInfoPanel() {
  return (
    <aside className="sticky top-0 flex h-screen w-[320px] flex-col overflow-y-auto border border-gray-400/20 bg-[#0d1426] p-5">
      {/* Header */}
      <div className="flexitems-center border-border-gray flex-col gap-2 border-b px-3 py-4 text-center">
        <Avatar className="mx-auto mb-2 h-35 w-35">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="mb-2">
          <p className="text-[18px] font-medium">The Bartender's Bible channel</p>
          <p className="mt-0.5 text-[12px] text-neutral-400">Subscription: 200</p>
        </div>
        <div className="flex justify-center gap-1.5">
          <button className="flex min-w-30 cursor-pointer items-center gap-1 rounded-lg bg-red-100 px-4 py-2 text-[14px] font-medium">
            <Bell size={13} /> Subscribe 2
          </button>
          <button className="flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg border border-gray-400/20 px-4 py-2 text-[14px]">
            <Edit size={13} /> Write
          </button>
        </div>
      </div>

      <InfoSection title="Sup channels">
        {Array.from({ length: 2 }).map((_, i) => (
          <ChannelItem key={i} avatar="https://github.com/shadcn.png" name="Drinking beer channel" lastMessage="Tutorial #1 how drink beer without ..." />
        ))}
      </InfoSection>

      <InfoSection title="These posts of this author are trending">
        <ChannelItem avatar="https://github.com/shadcn.png" name="Drinking beer channel" lastMessage="Tutorial #1 how drink beer without ..." />
      </InfoSection>

      <InfoSection title="Local replies">
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-neutral-100">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5 text-[12px]">
            <span className="font-medium text-neutral-800">Ivan Prokop </span>
            <span className="text-neutral-400">Create article dude</span>
          </div>
        </div>
      </InfoSection>
    </aside>
  );
}
