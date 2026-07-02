export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  feed: "/feed",
  posts: {
    base: "/posts",
    param: "/posts/:id",
    detail: (id: string) => `/posts/${id}`,
  },
  users: {
    base: "/users",
    param: "/users/:name",
    detail: (name: string) => `/users/${name}`,
  },
  notFound: "*",
};
