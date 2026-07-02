export const postsKeys = {
  all: ["posts"] as const, // ✔
  byId: (id: string) => ["posts", id] as const, // ✔
  feed: () => ["posts", "feed"] as const, // ✔
  user: (name: string) => ["posts", "user", name] as const, // ✔
};
