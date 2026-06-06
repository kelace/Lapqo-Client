import { useState } from "react";
import { House, User, Hash } from "lucide-react";

export function FilterTabs() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { label: "All", icon: House },
    { label: "Accounts", icon: User },
    { label: "Channels", icon: Hash },
  ];

  return (
    <div className="border-border-gray flex flex-col gap-1 rounded-xl border p-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.label;

        return (
          <button key={tab.label} onClick={() => setActiveTab(tab.label)} className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-[14px] transition-all duration-200 ease-out ${isActive ? "bg-gray-400/20 text-white" : "text-neutral-500 hover:bg-neutral-900/10 hover:text-white"} `}>
            <div className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${isActive ? "bg-[#6432c5]" : "bg-transparent hover:bg-neutral-800/20"} `}>
              <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-white" : "text-neutral-500"}`} />
            </div>

            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
