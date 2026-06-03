import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/cn";

type ToggleButtonProps = {
  collapsed: boolean;
  onClick: () => void;
};

export function ToggleButton({ collapsed, onClick }: ToggleButtonProps) {
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
