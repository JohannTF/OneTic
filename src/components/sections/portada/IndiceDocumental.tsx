import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { FadeIn } from "@/components/ui/interactions/FadeIn";
import type { NavChapter } from "@/types/nav";

type IndiceDocumentalProps = {
  chapters: NavChapter[];
};

export function IndiceDocumental({ chapters }: IndiceDocumentalProps) {
  const totalSections = chapters.reduce((sum, ch) => sum + ch.items.length, 0);

  return (
    <FadeIn delay={0.1}>
      <div className="border-border-subtle overflow-hidden rounded-2xl border bg-surface-base shadow-sm">
        {/* Header */}
        <div className="border-border-subtle flex items-center justify-between border-b px-5 py-3.5">
          <Eyebrow as="h2" tone="muted" size="xs">
            Índice documental
          </Eyebrow>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-disabled">
            {totalSections} secciones
          </span>
        </div>

        {/* Chapter list */}
        <ul className="divide-y divide-border-subtle/60">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                href="/indice"
                className="group flex items-start gap-4 px-5 py-4 transition-colors duration-150 hover:bg-surface-1"
              >
                <span className="font-mono text-[11px] font-medium text-accent-primary mt-px shrink-0 tabular-nums">
                  {chapter.id}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-text-primary text-[13px] font-semibold leading-snug">
                    {chapter.label}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-[1.5] text-text-tertiary line-clamp-1">
                    {chapter.description}
                  </p>
                </div>
                <ArrowRight
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-disabled transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="border-border-subtle border-t px-5 py-3">
          <Link
            href="/indice"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary transition-colors duration-150 hover:text-accent-primary"
          >
            Ver índice completo
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
