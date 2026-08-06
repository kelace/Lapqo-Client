import { useAuthStore } from "@/app/store/auth";
import { ProfileSidebar } from "@/widgets/profile-sidebar/ui";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";

// ProfileSidebar
export function ProfileSidebarSlot() {
  const { profileUserName } = useActiveProfile();

  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));

  if (!isAuthenticated) return null;

  return (
    <div className="hidden shrink-0 lg:block">
      <ProfileSidebar userName={profileUserName} />
    </div>
  );
}
