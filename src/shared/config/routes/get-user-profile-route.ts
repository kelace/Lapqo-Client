import { routes } from "@/shared/config/routes";

export function getUserProfileRoute(userName?: string): string {
  return userName ? routes.users.detail(userName) : routes.login;
}
