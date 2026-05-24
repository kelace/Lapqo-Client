import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

type ChannelItemProps = {
  name: string;
  avatar: string;
  lastMessage?: string;
  time?: string;
  unreadCount?: number;
};

export function ChannelItem({
  name,
  avatar,
  lastMessage,
  time,
  unreadCount,
}: ChannelItemProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-100">
      <Avatar className="size-10">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium truncate">{name}</span>

          {time && <span className="text-[11px] text-neutral-400">{time}</span>}
        </div>

        {lastMessage && (
          <p className="text-xs truncate text-neutral-500">{lastMessage}</p>
        )}
      </div>

      {unreadCount ? (
        <div className="ml-auto">
          <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs text-white">
            {unreadCount}
          </span>
        </div>
      ) : null}
    </div>
  );
}
