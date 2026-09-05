import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import type { AuthState, JWTPayload, Me } from "./types";

const parseCurrentUser = (accessToken: string): Me => {
  const payload = jwtDecode<JWTPayload>(accessToken);

  return {
    id: payload.sub,
    name: payload.name,
    expires: payload.expires
  };
};

const getStoredAccessToken = (): string | null => {
  const token = localStorage.getItem("accessToken");

  if (!token || token === "undefined") {
    localStorage.removeItem("accessToken");
    return null;
  }

  return token;
};

const getInitialUser = (): Me | null => {
  const token = getStoredAccessToken();
  if (!token) return null;

  try {
    return parseCurrentUser(token);
  } catch {
    localStorage.removeItem("accessToken");
    return null;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: getStoredAccessToken(),

  currentUser: getInitialUser(),

  isUserAuthenticated: () =>{
    const user = getInitialUser();

    if(!user || !user.expires || user.expires.getTime() <= Date.now()){
      return false;
    }

    return true;
  },

  setAuth: (accessToken) => {
    if (!accessToken) {
      localStorage.removeItem("accessToken");

      set({
        accessToken: null,
        currentUser: null,
      });

      return;
    }

    try {
      const currentUser = parseCurrentUser(accessToken);
      localStorage.setItem("accessToken", accessToken);

      set({
        accessToken,
        currentUser,
      });
    } catch {
      localStorage.removeItem("accessToken");

      set({
        accessToken: null,
        currentUser: null,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    set({
      accessToken: null,
      currentUser: null,
    });
  },
}));
