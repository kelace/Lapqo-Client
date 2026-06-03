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
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              w-full flex items-center gap-2
              text-[14px] px-2.5 py-1 rounded-full
              transition-all duration-200

              ${
                isActive
                  ? "text-white bg-neutral-900/10"
                  : "text-neutral-500 hover:text-white hover:bg-neutral-900/10"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`
                    w-7 h-7 flex items-center justify-center rounded-full
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-[#6432c5]"
                        : "bg-transparent group-hover:bg-neutral-800/20"
                    }
                  `}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-white" : "text-neutral-500"
                    }`}
                  />
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
