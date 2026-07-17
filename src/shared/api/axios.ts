import axios from "axios";
import { useAuthStore } from "@/app/store/auth";
import { ENV } from "@/shared/config/env/env";

type RefreshResponseDto = {
  token: string;
};

type PendingRequest = {
  resolve: (accessToken: string) => void;
  reject: (error: unknown) => void;
};

export const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let pendingRequests: PendingRequest[] = [];

const processQueue = (error: unknown, accessToken?: string) => {
  pendingRequests.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(accessToken!);
    }
  });

  pendingRequests = [];
};

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
    const originalRequest = error.config;

    if (!originalRequest) return Promise.reject(error);
    if (error.response?.status !== 401) return Promise.reject(error);
    if (originalRequest._retry) return Promise.reject(error);

    if (originalRequest.url === "/auth/refresh") {
      useAuthStore.getState().logout();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingRequests.push({
          resolve: (accessToken) => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            resolve(api(originalRequest));
          },
          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // const { accessToken } = await refreshAccessToken();
      const { data } = await api.post<RefreshResponseDto>("/auth/refresh", {});
      const accessToken = data.token;

      processQueue(null, accessToken);
      useAuthStore.getState().setAuth(accessToken);

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError);
      useAuthStore.getState().logout();

      return Promise.reject(refreshError);
    }
  },
);
