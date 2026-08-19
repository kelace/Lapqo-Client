import { SettingsBar } from "@/widgets/app-sidebar/ui/settings-bar";
import { CreatePostDialog } from "@/features/create-post-dialog/create-post-dialog";
import { SearchFeedDialog } from "@/features/search-feed/ui/SearchFeedDialog";

export function Header() {
  return (
    <header className="surface fixed inset-x-0 top-0 z-50 h-16 rounded-none border-b">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5">
        <div className="">
          <a href="/" className="text-xl font-bold tracking-tight">
            LQ
          </a>
        </div>

        <div className="absolute top-1/2 left-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-5">
          <SearchFeedDialog />
        </div>

        <div className="flex items-center gap-1">
          <CreatePostDialog />

          <SettingsBar />
        </div>
      </div>
    </header>
  );
}
