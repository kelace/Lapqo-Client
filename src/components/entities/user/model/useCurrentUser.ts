import { useAuthStore } from "@/app/store/auth";
import { jwtDecode } from "jwt-decode";

type JWTPayload = {
  name: string;
  sub: string;
};

export const useCurrentUser = () => {
  const token = useAuthStore((state) => state.accessToken);

  // if (!token) {
  //   return { userName: null, token: null };
  // }

  const payload = token ? jwtDecode<JWTPayload>(token) : null;

  return {
    token,
    data: payload?.name,
    payload,
  };
};
