"use client";

import { usePathname } from "next/navigation";
import { Home, List, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

import { nav } from "@/content/nav";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/layout/Logo";
import { SidebarChapter } from "@/components/layout/sidebar/SidebarChapter";
import { SidebarLink } from "@/components/layout/sidebar/SidebarLink";
import { ToggleButton } from "@/components/layout/sidebar/ToggleButton";

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

const ROOT_LINKS: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "Portada", href: "/", icon: Home },
  { label: "Índice", href: "/indice", icon: List },
];

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

  // Close drawer on navigation (mobile)
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onMobileClose();
    }
  }, [pathname, onMobileClose]);

  return (
    <>
      {/* Backdrop — mobile only */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-surface-inverse/20 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={cn(
          "flex flex-col border-r border-border-subtle bg-surface-1 transition-all duration-300 ease-out",
          // Mobile: fixed drawer
          "fixed top-0 left-0 bottom-0 z-40 w-72",
          // Desktop: sticky sidebar
          "lg:sticky lg:top-0 lg:bottom-auto lg:left-auto lg:z-auto lg:h-screen lg:shrink-0 lg:self-start",
          // Desktop width (collapsed state only applies on desktop)
          collapsed ? "lg:w-16" : "lg:w-65",
          // Mobile visibility via transform
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div
          className={cn(
            "border-border-subtle flex items-center border-b py-5 transition-all duration-300 ease-out",
            collapsed ? "lg:justify-center lg:px-3" : "px-6",
          )}
        >
          {/* On mobile drawer, always show full logo regardless of desktop collapsed state */}
          <Logo collapsed={collapsed && !mobileOpen} />
        </div>

        {/* Collapse toggle — desktop only */}
        <ToggleButton collapsed={collapsed} onClick={onToggle} />

        <nav
          className={cn(
            "flex-1 overflow-y-auto py-6 transition-all duration-300 ease-out",
            collapsed ? "lg:px-2" : "px-4",
          )}
        >
          <ul className="space-y-1">
            {ROOT_LINKS.map((link) => (
              <li key={link.href}>
                <SidebarLink
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                  collapsed={collapsed && !mobileOpen}
                  icon={link.icon}
                />
              </li>
            ))}
          </ul>

          {nav.map((chapter) => (
            <SidebarChapter
              key={chapter.id}
              chapter={chapter}
              collapsed={collapsed && !mobileOpen}
              pathname={pathname}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
