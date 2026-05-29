import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Badge } from "@/components/ui/typography/Badge";
import type { IndiceChapter } from "@/types/indice";

type ChapterCardProps = {
  chapter: IndiceChapter;
};

export function ChapterCard({ chapter }: ChapterCardProps) {
  const firstHref = chapter.items[0]?.href ?? "/indice";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-base p-6 transition-all duration-300 ease-out hover:border-accent-border hover:shadow-lg lg:p-8">
      {/* Número decorativo de fondo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -bottom-8 select-none font-mono text-[160px] font-bold leading-none text-surface-3 transition-colors duration-500 ease-out group-hover:text-accent-border"
      >
        {chapter.id}
      </span>

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Identidad del capítulo */}
        <div className="flex flex-col gap-2 lg:w-52 lg:shrink-0">
          <Eyebrow tone="muted" size="xs">
            Capítulo {chapter.id}
          </Eyebrow>
          <h2 className="font-display text-text-primary text-[22px] font-bold leading-tight">
            {chapter.label}
          </h2>
        </div>

        {/* Descripción y badges */}
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-text-secondary text-[15px] leading-[1.6]">
            {chapter.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {chapter.items.map((item) => (
              <Badge key={item.id}>{item.label}</Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={firstHref}
          aria-label={`Ver ${chapter.label}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full border border-border-subtle bg-surface-1 text-text-tertiary transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-border group-hover:border-accent-border group-hover:bg-accent-subtle group-hover:text-accent-primary lg:self-center"
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
