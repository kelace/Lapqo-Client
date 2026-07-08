import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import type { AuthState, JWTPayload, Me } from "./auth.types";

const getInitialUser = (): Me | null => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  const payload = jwtDecode<JWTPayload>(token);
  return { id: payload.sub, name: payload.name };
};
// ---------------------------------------
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),

  currentUser: getInitialUser(),

  setAuth: (token) => {
    localStorage.setItem("accessToken", token);
    const payload = jwtDecode<JWTPayload>(token);

    set({
      accessToken: token,
      currentUser: { id: payload.sub, name: payload.name },
    });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    set({
      accessToken: null,
      currentUser: null,
    });
  },
}));
