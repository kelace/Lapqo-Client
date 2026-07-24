import { ProfileSidebar } from "@/widgets/profile-sidebar/ui";
import { useActiveProfile } from "@/entities/user/model/use-active-profile";

// ProfileSidebar
export function ProfileSidebarSlot() {
  const { profileUserName } = useActiveProfile();

  return (
    <div className="hidden w-75 shrink-0 lg:block">
      <ProfileSidebar userName={profileUserName} />
    </div>
  );
}
