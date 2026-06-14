"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TocItem = {
  id: string;
  label: string;
};

type OnThisPageProps = {
  items: TocItem[];
  title?: string;
};

// Índice lateral "en esta página" con scrollspy. Resalta la subsección visible
// mediante IntersectionObserver. Pensado para páginas con 5+ subsecciones.
export function OnThisPage({ items, title = "En esta página" }: OnThisPageProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    // Mapa de visibilidad de cada subsección; se actualiza en cada callback.
    const visibility = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting);
        }
        // Activa la primera subsección visible en orden de documento.
        const current = items.find((item) => visibility.get(item.id));
        if (current) {
          setActiveId(current.id);
        }
      },
      // Banda activa bajo el TopBar sticky (≈ del 80px al 45% del viewport).
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={title}>
      <p className="font-mono mb-4 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
        {title}
      </p>
      <ul className="border-border-subtle border-l">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l-2 py-1.5 pl-4 text-[12.5px] leading-snug transition-colors duration-150",
                  active
                    ? "border-accent-primary text-accent-primary font-medium"
                    : "border-transparent text-text-tertiary hover:text-text-secondary",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
