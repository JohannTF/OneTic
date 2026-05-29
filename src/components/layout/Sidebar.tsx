"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Home, List, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { nav } from "@/content/nav";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/layout/Logo";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import type { NavChapter } from "@/types/nav";

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

function SidebarChapter({
  chapter,
  collapsed,
  pathname,
}: {
  chapter: NavChapter;
  collapsed: boolean;
  pathname: string;
}) {
  return (
    <div className={cn(collapsed ? "border-border-subtle mt-4 border-t pt-4" : "mt-7")}>
      {!collapsed && (
        <Eyebrow as="h3" tone="muted" size="xs" className="mb-2 block px-3">
          {chapter.label}
        </Eyebrow>
      )}
      <ul className="space-y-0.5">
        {chapter.items.map((item) => (
          <li key={item.id}>
            <SidebarLink
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              collapsed={collapsed}
              number={item.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToggleButton({ collapsed, onClick }: { collapsed: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={collapsed ? "Expandir barra lateral" : "Colapsar barra lateral"}
      aria-expanded={!collapsed}
      onClick={onClick}
      className="border-border-subtle bg-surface-base hover:bg-accent-subtle hover:border-accent-border focus-visible:ring-accent-border absolute top-7 -right-3 z-20 hidden h-6 w-6 items-center justify-center rounded-full border shadow-sm transition-all duration-200 ease-out hover:shadow-md focus:outline-none focus-visible:ring-2 lg:flex"
    >
      <ChevronLeft
        className={cn(
          "text-text-secondary h-3.5 w-3.5 transition-transform duration-300 ease-out",
          collapsed && "rotate-180",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

type SidebarLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  collapsed: boolean;
  icon?: LucideIcon;
  number?: string;
};

function SidebarLink({ href, label, isActive, collapsed, icon: Icon, number }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      aria-label={collapsed ? label : undefined}
      className={cn(
        "group relative flex items-center rounded-md text-sm transition-colors duration-200 ease-out",
        collapsed ? "mx-auto h-9 w-9 justify-center" : "gap-3 px-3 py-1.5",
        isActive
          ? "bg-accent-subtle text-accent-deep font-medium"
          : "text-text-secondary hover:bg-surface-2 hover:text-text-primary",
      )}
    >
      {Icon ? (
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      ) : number ? (
        <span
          className={cn(
            "shrink-0 font-mono text-[11px]",
            !collapsed && !isActive && "text-text-tertiary",
          )}
        >
          {number}
        </span>
      ) : null}

      {!collapsed && <span className="truncate">{label}</span>}

      {collapsed && <SidebarTooltip>{label}</SidebarTooltip>}
    </Link>
  );
}

function SidebarTooltip({ children }: { children: React.ReactNode }) {
  return (
    <span
      role="tooltip"
      className="bg-surface-inverse text-surface-base pointer-events-none absolute top-1/2 left-full z-50 ml-3 -translate-x-1 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
    >
      {children}
    </span>
  );
}
