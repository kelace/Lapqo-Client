export function FilterTabs() {
  const tabs = ["All", "Accounts", "Channels"];

  return (
    <div className="flex gap-1 py-2 border-b border-neutral-100">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`text-[12px] px-2.5 py-1 rounded-full transition-colors ${
            i === 0
              ? "bg-blue-50 text-blue-600 font-medium"
              : "text-neutral-500 hover:bg-neutral-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
