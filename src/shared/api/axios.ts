import { useAuthStore } from "@/app/store/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  console.log("interceptor");
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config

//     if (
//       error.response.status === 401
//     ) {
//       const refreshToken =
//         useAuthStore.getState()
//           .refreshToken

//       if (!refreshToken) {
//         return Promise.reject(error)
//       }

//       try {
//         const response =
//           await authApi.refresh(
//             refreshToken
//           )

//         const {
//           token,
//           refreshToken: newRefresh,
//         } = response.data

//         useAuthStore
//           .getState()
//           .setTokens(
//             token,
//             newRefresh
//           )

//         originalRequest.headers.Authorization =
//           `Bearer ${token}`

//         return api(originalRequest)

//       } catch (err) {
//         useAuthStore
//           .getState()
//           .logout()

//         return Promise.reject(err)
//       }
//     }

//     return Promise.reject(error)
//   }
// )
