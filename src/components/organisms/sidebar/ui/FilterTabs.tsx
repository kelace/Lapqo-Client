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
    <div className="flex flex-col border border-gray-400/20 rounded-lg p-1 gap-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.label;

        return (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`
              w-full flex items-center gap-2
              text-[14px] px-2.5 py-2 rounded-lg
              transition-all duration-200 ease-out

              ${
                isActive
                  ? "text-white bg-gray-400/20"
                  : "text-neutral-500 hover:text-white hover:bg-neutral-900/10"
              }
            `}
          >
            <div
              className={`
                w-7 h-7 flex items-center justify-center rounded-full
                transition-all duration-200

                ${
                  isActive
                    ? "bg-[#6432c5]"
                    : "bg-transparent hover:bg-neutral-800/20"
                }
              `}
            >
              <Icon
                className={`w-4 h-4 transition-colors ${
                  isActive ? "text-white" : "text-neutral-500"
                }`}
              />
            </div>

            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
