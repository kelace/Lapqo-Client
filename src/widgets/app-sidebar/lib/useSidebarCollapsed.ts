import { useSidebar } from "@/shared/shadcn/ui/sidebar";

// shared/lib/useSidebarCollapsed.ts
export function useSidebarCollapsed() {
  const { state, isMobile } = useSidebar();
  const isDesktopCollapsed = state === "collapsed";
  return isDesktopCollapsed && !isMobile;
}
