export const userKeys = {
  all: ["user"] as const, // ❌
  byUserName: (name: string) => ["user", name] as const, // ✔
  subscriptions: () => ["user", "subscriptions"] as const, // ✔
};
