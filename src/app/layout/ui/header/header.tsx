import { PanelLeft, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchFeedDialog } from "@/features/search-feed/ui/SearchFeedDialog";
import { routes } from "@/shared/config/routes";
import { SidebarTrigger } from "@/shared/shadcn/ui/sidebar";
import { SettingsBar } from "./settings-bar";

export function Header() {
  return (
    <header className="surface fixed inset-x-0 top-0 z-50 h-16 rounded-none border-b">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5">
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to={routes.feed}
            className="hidden border px-3 py-1 text-xl font-black xl:block"
          >
            Lapqo <span className="text-primary">.</span>
          </Link>

          <SidebarTrigger className="group bg-accent relative flex size-9 cursor-pointer items-center justify-center rounded-none border xl:hidden">
            <PawPrint className="absolute size-5 transition-all duration-150 group-hover:scale-0 group-hover:opacity-0" />

            <PanelLeft className="absolute size-5 scale-0 opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100" />
          </SidebarTrigger>
          <SearchFeedDialog />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <SettingsBar />
        </div>
      </div>
    </header>
  );
}
