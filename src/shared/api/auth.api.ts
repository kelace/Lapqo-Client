import { api } from "./axios";

type RegistenData = {
  email: string;
  password: string;
  name: string;
};

type LoginData = {
  email: string;
  password: string;
};

export const authApi = {
  register: (data: RegistenData) => {
    // console.log("Registering user with data:", data);
    return api.post("/auth/register", data);
  },
  login: (data: LoginData) => api.post("/auth/login", data),
  revoke: (refreshToken: string) => api.post("/auth/revoke", { refreshToken }),
  refresh: (refreshToken: string) =>
    api.post("/auth/refresh", { refreshToken }),
};
