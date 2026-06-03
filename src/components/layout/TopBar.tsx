"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import { getBreadcrumb } from "@/lib/breadcrumb";
import { SearchField } from "@/components/ui/forms/SearchField";

type TopBarProps = {
  onMobileMenuToggle: () => void;
};

export function TopBar({ onMobileMenuToggle }: TopBarProps) {
  const pathname = usePathname();
  const crumbs = getBreadcrumb(pathname);

  return (
    <header className="border-border-subtle bg-surface-base/90 sticky top-0 z-10 flex h-15 items-center justify-between border-b px-4 backdrop-blur lg:px-9">
      <div className="flex items-center gap-2">
        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={onMobileMenuToggle}
          aria-label="Abrir menú"
          className="text-text-secondary hover:text-text-primary hover:bg-surface-2 -ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors duration-150 lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <nav aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <li key={`${idx}-${crumb.href}`} className="flex items-center gap-2">
                  {idx > 0 && (
                    <ChevronRight
                      className="text-text-tertiary h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  )}
                  {isLast ? (
                    <span className="text-text-primary font-medium">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-text-tertiary hover:text-text-primary hidden transition-colors duration-150 ease-out sm:inline"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <SearchField />
    </header>
  );
}
