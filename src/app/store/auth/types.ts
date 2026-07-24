export type Me = {
  id: string;
  name: string;
};

export type AuthState = {
  accessToken: string | null;
  currentUser: Me | null;
  setAuth: (access: string) => void;
  logout: () => void;
};

export type JWTPayload = {
  name: string;
  sub: string;
};
