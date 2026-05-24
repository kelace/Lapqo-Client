import { LogOut, Settings } from "lucide-react";

export function SettingsBar() {
  return (
    <div
      className="
      flex 
      items-center 
      gap-2 
      bg-neutral-100 
      rounded-lg 
      px-3 py-2 
      text-[13px] 
      text-neutral-400"
    >
      <Settings size={14} />
      <LogOut size={14} />
    </div>
  );
}
