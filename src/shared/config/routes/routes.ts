export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  feed: "/feed",
  posts: {
    base: "/posts",
    param: "/:name/posts/:id",
    detail: (id: string, userName: string) => `/${userName}/posts/${id}`,
  },
  users: {
    base: "/users",
    param: "/users/:name",
    detail: (name: string) => `/users/${name}`,
  },
  notFound: "*",
} as const;
