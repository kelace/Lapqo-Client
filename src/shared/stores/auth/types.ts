export type Me = {
  id: string;
  name: string;
  expires: Date
};

export type AuthState = {
  accessToken: string | null;
  currentUser: Me | null;
  setAuth: (access: string) => void;
  isUserAuthenticated: ()  => boolean;
  logout: () => void;
};

export type JWTPayload = {
  name: string;
  sub: string;
  expires: Date;
};
