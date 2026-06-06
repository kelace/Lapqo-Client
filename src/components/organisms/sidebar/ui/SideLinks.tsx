import { NavLink } from "react-router-dom";
import { Home, Rss } from "lucide-react";

export function SideLinks() {
  const links = [
    { to: "/", label: "Index", icon: Home },
    { to: "/feed", label: "Feed", icon: Rss },
  ];

  return (
    <nav className="flex flex-col gap-1 pt-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => `flex w-full items-center gap-2 rounded-full px-2.5 py-2 text-[14px] transition-all duration-200 ${isActive ? "bg-hover" : "text-neutral-500 hover:bg-neutral-900/10 hover:text-white"} `}>
            {({ isActive }) => (
              <>
                <div className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${isActive ? "bg-primary" : "bg-transparent group-hover:bg-neutral-800/20"} `}>
                  <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-white" : "text-neutral-500"}`} />
                </div>

                {link.label}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
