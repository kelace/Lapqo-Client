export const postsKeys = {
  all: ["posts"] as const,
  feed: () => [...postsKeys.all, "feed"] as const,
  byId: (id: string) => [...postsKeys.all, id] as const,
  user: (name: string) => [...postsKeys.all, "user", name] as const,
  searchFeed: (query: string) =>
    [...postsKeys.all, "feed", "search", query] as const,
  searchUserPost: (query: string) =>
    [...postsKeys.all, "user", "search", query] as const,
};
