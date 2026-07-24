import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import type { AuthState, JWTPayload, Me } from "./types";

// import type { AuthState, JWTPayload, Me } from "./auth.types";

// JWT parce get {id, currentUser}
const parseCurrentUser = (accessToken: string): Me => {
  const payload = jwtDecode<JWTPayload>(accessToken);

  return {
    id: payload.sub,
    name: payload.name,
  };
};

// get token from localStorage
const getStoredAccessToken = (): string | null => {
  const token = localStorage.getItem("accessToken");

  if (!token || token === "undefined") {
    localStorage.removeItem("accessToken");
    return null;
  }

  return token;
};

// get initial value current user
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
