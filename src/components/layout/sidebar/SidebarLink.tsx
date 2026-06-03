import Link from "next/link";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

type SidebarLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  collapsed: boolean;
  icon?: LucideIcon;
  number?: string;
};

export function SidebarLink({ href, label, isActive, collapsed, icon: Icon, number }: SidebarLinkProps) {
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
