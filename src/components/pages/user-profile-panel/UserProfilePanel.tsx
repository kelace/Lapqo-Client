import { useAuthStore } from "@/app/store/auth";
import { api } from "@/shared/api/axios";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/avatar";

import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { Bell, Edit } from "lucide-react";
import { useParams } from "react-router-dom";

type User = {
  id: string;
  userName: string;
  namePreview: string;
  subscribersCount: number;
  isSubscribed: boolean;
};

const getUser = async (useName: string): Promise<User> => {
  const data = await api.get<User>(`/users/${useName}`);
  return data.data;
};

export const useUser = (userName: string) => {
  return useQuery({
    queryKey: ["user", userName],
    queryFn: () => getUser(userName),
  });
};

type JWTPayload = {
  name: string;
};

export function UserProfilePanel() {
  const token = useAuthStore((state) => state.accessToken);
  const me = token ? jwtDecode<JWTPayload>(token) : null;

  const { id } = useParams();

  const isSelfProfile = !id || id === me?.name;

  const userName = isSelfProfile ? me?.name : id;

  // if (!token) {
  //   // користувач не залогінений
  //   return null; // або loading / redirect
  // }

  if (!userName) return <div>User not found</div>;

  const { data: user } = useUser(userName);

  return (
    <aside className="sticky top-0 h-screen w-[320px]">
      <div className="max-w-5xl mx-auto p-6 bg-[#0d1426] border border-gray-400/20 rounded-lg h-screen">
        <div className="flex flex-col gap-6 p-6 border-b border-gray-400/20">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <Avatar className="size-35 ">
              {/* <AvatarImage src={user?.avatarUrl ?? undefined} /> */}
              <AvatarFallback className="text-2xl">
                {user?.namePreview}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold uppercase">{user?.userName}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Followers {user?.subscribersCount}
            </p>
          </div>

          <div className="flex items-start justify-center gap-4 ">
            <div className="flex gap-1.5 justify-center">
              <button className="flex min-w-30 items-center justify-center gap-1 text-[14px] px-4 py-2 rounded-lg bg-[#5d2ac3] text-white font-medium  cursor-pointer">
                <Bell size={13} /> {user?.isSubscribed ? "Following" : "Follow"}
              </button>
              <button className="flex min-w-30 items-center justify-center gap-1 text-[14px] px-4 py-2 rounded-lg border border-gray-400/20  cursor-pointer">
                <Edit size={13} /> Write
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function FakePosts() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className="px-4 py-10 border shadow-sm rounded-xl">
          <h3 className="mb-2 text-lg font-semibold">Post #{index + 1}</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            voluptatem.
          </p>
        </div>
      ))}
    </div>
  );
}
