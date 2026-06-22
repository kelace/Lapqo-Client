import { useProfileOwner } from "@/components/entities/user/model/useProfileUser";

import { UserProfilePanel } from "../user-profile-panel/UserProfilePanel";

export function RightSidebar() {
  const { userName } = useProfileOwner();

  return (
    <div className="hidden w-75 shrink-0 lg:block">
      <UserProfilePanel userName={userName} />
    </div>
  );
}
