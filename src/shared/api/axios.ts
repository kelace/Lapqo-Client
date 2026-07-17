import axios from "axios";
import { useAuthStore } from "@/app/store/auth";
import { ENV } from "@/shared/config/env/env";

type RefreshResponseDto = {
  token: string;
};

export const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

// request interceptor
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// response interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config;

    if (error.response.status === 401 && !original._retry) {
      original._retry = true;

      const { data } = await api.post<RefreshResponseDto>("/auth/refresh", {});
      const accessToken = data.token;

      useAuthStore.getState().setAuth(accessToken);
      original.headers.Authorization = `Bearer ${accessToken}`;

      return api(original);
    }

    return Promise.reject(error);
  },
);
