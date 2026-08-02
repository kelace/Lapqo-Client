import { LogOut } from "lucide-react";
import { useModalStack } from "@/app/providers";
import { useRequireAuth } from "@/app/routes/guards/use-required-auth";
import { ConfirmModal } from "@/features/confirm-modal/ui";
import { cn } from "@/shared/shadcn/lib/utils";
import { useLogout } from "../model/use-logout";

export function LogoutButton() {
  const { mutate: logout, isPending } = useLogout();
  const { openModal, closeModal } = useModalStack();

  const requireAuth = useRequireAuth();

  const handleModalOpen = () => {
    if (requireAuth()) return;

    const id = openModal(
      <ConfirmModal
        title="Logout ?"
        description="Are you sure you want to logout?"
        confirmText="Logout"
        onConfirm={async () => {
          closeModal(id);
          logout();
        }}
        onCancel={() => closeModal(id)}
      />,
      { closeOnOverlayClick: false },
    );
  };

  return (
    <button
      aria-label="logout"
      onClick={handleModalOpen}
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
