import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchFeedItem } from "@/entities/feed/ui/search-feed-item";
import { SearchFeedItemSkeleton } from "@/entities/feed/ui/search-feed-item-skeleton";
import { useActiveProfile } from "@/entities/user";
import { routes } from "@/shared/config/routes";
import { useDebouncedSearch } from "@/shared/hooks";
import { Button } from "@/shared/shadcn/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/shadcn/ui/command";
import { SearchButton } from "@/shared/ui";
import { RouteError } from "@/shared/ui/route-error/route-error";
import { useSearchUserPosts } from "../model/use-search-user-posts";

export function SearchUserPosts() {
  const [open, setOpen] = useState(false);
  const { query, setQuery, debouncedQuery } = useDebouncedSearch();
  const { profileUserName } = useActiveProfile();

  if (!profileUserName) return <RouteError />;

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useSearchUserPosts(profileUserName, debouncedQuery);

  const posts = data?.pages.flat() ?? [];

  const isInitialLoading = isLoading && posts.length === 0;

  const navitate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <SearchButton
        onClick={() => setOpen(true)}
        placeholder="Search posts..."
      />
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="w-500 border"
      >
        <Command shouldFilter={false}>
          <div className="relative">
            <CommandInput
              placeholder="Type a command or search..."
              value={query}
              onValueChange={setQuery}
            />

            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {isInitialLoading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <SearchFeedItemSkeleton key={i} />
                    ))
                  : posts.map((post) => (
                      <CommandItem
                        key={post.id}
                        className="mb-2 border"
                        onSelect={() => {
                          setOpen(false);
                          navitate(routes.posts.detail(post.id));
                        }}
                      >
                        <SearchFeedItem post={post} query={query} />
                      </CommandItem>
                    ))}
              </CommandGroup>

              {hasNextPage && (
                <div className="p-2">
                  <Button
                    className="w-full cursor-pointer"
                    variant="ghost"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                  >
                    {isFetchingNextPage ? "Loading..." : "Load more"}
                  </Button>
                </div>
              )}
            </CommandList>
          </div>
        </Command>
      </CommandDialog>
    </div>
  );
}
