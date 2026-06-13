export const routes = {
  home: "/",
  login: "/login",
  feed: "/feed",
  register: "/register",
  users: {
    base: "/users",
    param: "/users/:name",
    detail: (name: string) => `/users/${name}`,
  },
  notFound: "*",
};
