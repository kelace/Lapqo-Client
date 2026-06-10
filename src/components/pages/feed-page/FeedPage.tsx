import { useFeedQuery } from "./model/useFeedQuery";
import { FeedList } from "./ui/FeedList";

export function FeedPage() {
  const { data, isLoading, isError } = useFeedQuery();

  if (isLoading) {
    return (
      <div className="text-muted-foreground p-8 text-center">Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-destructive p-8 text-center">
        Failed to load feed. Please try again later.
      </div>
    );
  }

  return (
    <>
      <FeedList posts={data ?? []} />
    </>
  );
}
