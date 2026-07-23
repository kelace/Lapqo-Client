import { LogOut } from "lucide-react";
import { useRequireAuth } from "@/app/routes/guards/use-required-auth";
import { cn } from "@/shared/shadcn/lib/utils";
import { useLogout } from "../model/use-logout";

export function LogoutButton() {
  const { mutate: logout, isPending } = useLogout();
  const requireAuth = useRequireAuth();

  const handleLogout = () => {
    if (requireAuth()) return;
    logout();
  };

  return (
    <button
      title="logout"
      onClick={handleLogout}
      disabled={isPending}
      className={cn(
        "flex items-center justify-center",
        "h-8 w-8",
        "rounded-md border",
        "cursor-pointer",
        "hover:bg-accent hover:text-white",
        "transition-colors",
      )}
    >
      <LogOut size={18} />
    </button>
  );
}
