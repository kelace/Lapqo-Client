export type RegistenData = {
  email: string;
  password: string;
  name: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  refreshToken: string;
  expires: string;
};

export type RegisterResponse = {
  succeeded: boolean;
  userId: string;
  errors: string[];
};
