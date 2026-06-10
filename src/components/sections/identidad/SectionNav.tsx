import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nav } from "@/content/nav";

type SectionNavProps = {
  currentHref: string;
  chapterIndex?: number;
};

export function SectionNav({ currentHref, chapterIndex = 0 }: SectionNavProps) {
  const items = nav[chapterIndex]?.items ?? [];
  const idx = items.findIndex((item) => item.href === currentHref);
  const prev = idx > 0 ? items[idx - 1] : null;
  const next = idx < items.length - 1 ? items[idx + 1] : null;

  return (
    <nav
      aria-label="Navegación entre secciones"
      className="border-border-subtle mt-20 flex items-stretch justify-between gap-4 border-t pt-8"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group border-border-subtle hover:border-border-default hover:bg-surface-1 flex min-w-0 flex-1 flex-col gap-1.5 rounded-xl border px-5 py-4 transition-colors duration-150"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-disabled transition-colors duration-150 group-hover:text-text-tertiary">
            ← Anterior
          </span>
          <span className="text-text-primary flex items-center gap-2 text-[14px] font-semibold">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group border-border-subtle hover:border-border-default hover:bg-surface-1 flex min-w-0 flex-1 flex-col items-end gap-1.5 rounded-xl border px-5 py-4 transition-colors duration-150"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-disabled transition-colors duration-150 group-hover:text-text-tertiary">
            Siguiente →
          </span>
          <span className="text-text-primary flex items-center gap-2 text-[14px] font-semibold">
            {next.label}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
