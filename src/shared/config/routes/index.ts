export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  users: {
    base: "/users",
    param: "/users/:id",
    detail: (id: string | number) => `/users/${id}`,
  },
  notFound: "*",
};
