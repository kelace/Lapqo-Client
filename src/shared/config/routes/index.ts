export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  users: {
    base: "/users",
    param: "/users/:name",
    detail: (name: string) => `/users/${name}`,
  },
  notFound: "*",
};
