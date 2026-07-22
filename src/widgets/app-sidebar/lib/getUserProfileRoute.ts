import { routes } from "@/shared/config/routes";

// entities/user/lib/getUserProfileRoute.ts
export function getUserProfileRoute(userName?: string): string {
  return userName ? routes.users.detail(userName) : routes.login;
}
