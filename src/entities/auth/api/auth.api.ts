import { api } from "@/shared/api/axios";
import type {
  LoginData,
  LoginResponse,
  RegistenData,
  RegisterResponse,
} from "../model/types";

export const authApi = {
  register: async (credentials: RegistenData) => {
    const { data } = await api.post<RegisterResponse>(
      "/auth/register",
      credentials,
    );
    return data;
  },

  login: async (credentials: LoginData) => {
    const { data } = await api.post<LoginResponse>("/auth/login", credentials);
    return data;
  },
};

// revoke: (refreshToken: string) => {
//   return api.post("/auth/revoke", { refreshToken });
// },
// refresh: (refreshToken: string) => {
//   return api.post("/auth/refresh", { refreshToken });
// },
