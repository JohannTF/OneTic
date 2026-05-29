import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { FadeIn } from "@/components/ui/interactions/FadeIn";
import type { NavChapter } from "@/types/nav";

type IndiceDocumentalProps = {
  chapters: NavChapter[];
};

export function IndiceDocumental({ chapters }: IndiceDocumentalProps) {
  return (
    <FadeIn delay={0.1}>
      <div className="border-border-subtle bg-surface-base/80 rounded-2xl border p-7 shadow-sm backdrop-blur-xl">
        <Eyebrow as="h2" tone="muted" size="xs" className="mb-5 block">
          Índice documental
        </Eyebrow>

        <ul className="flex flex-col gap-2">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                href="/indice"
                className="group border-border-subtle bg-surface-1/60 hover:border-accent-border hover:bg-accent-subtle flex items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-accent-primary font-mono text-sm font-medium">
                    {chapter.id}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-text-primary text-sm font-semibold">
                      {chapter.label}
                    </span>
                    <span className="text-text-tertiary text-xs">
                      {chapter.items.length} secciones
                    </span>
                  </div>
                </div>
                <ArrowRight
                  className="text-text-tertiary group-hover:text-accent-primary h-4 w-4 transition-all duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
