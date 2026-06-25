export const userKeys = {
  all: ["user"] as const, // ❌
  byUserName: (name: string) => ["user", name] as const, // ✔
};
