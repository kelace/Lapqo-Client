import { useFeedQuery } from "./model/useFeedQuery";
import { FeedList } from "./ui/FeedList";

export function FeedPage() {
  const { data, isLoading, isError } = useFeedQuery();

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground">Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-destructive">
        Failed to load feed. Please try again later.
      </div>
    );
  }

  return <FeedList posts={data ?? []} />;
}
