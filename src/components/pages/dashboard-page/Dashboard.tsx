import { ChannelInfoPanel } from "@/components/organisms/channel-info-pannel/ChannelInfoPannel";
import { Sidebar } from "@/components/organisms/sidebar/Sidebar";

export function Dashboard() {
  return (
    <div className="flex w-full h-screen mx-auto max-w-275">
      <Sidebar />

      <main className="flex-1 overflow-y-auto border-r ">
        <div className="space-y-4">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="p-4 border shadow-sm rounded-xl">
              <h3 className="mb-2 text-lg font-semibold">Post #{index + 1}</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, voluptatem.
              </p>
            </div>
          ))}
        </div>
      </main>
      <aside className="sticky top-0 h-screen w-[320px]">
        <ChannelInfoPanel />
      </aside>
    </div>
  );
}
