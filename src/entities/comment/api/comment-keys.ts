export const commentKeys = {
  all: ["comments"] as const,
  lists: () => [...commentKeys.all, "list"] as const,
  post: (postId: string) => [...commentKeys.all, "post", postId] as const,
};
