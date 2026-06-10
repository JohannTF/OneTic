import { ChapterCard } from "@/components/sections/indice/ChapterCard";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { FadeIn } from "@/components/ui/interactions/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { nav } from "@/content/nav";

const totalSections = nav.reduce((sum, ch) => sum + ch.items.length, 0);

export const metadata = {
  title: "Índice — OneTic",
};

export default function IndicePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Encabezado */}
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
              <Eyebrow>Navegación global</Eyebrow>
            </div>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h1 className="font-display text-text-primary text-[28px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[34px] lg:text-[40px] lg:leading-[1.15]">
              Índice de la documentación
            </h1>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="text-text-secondary max-w-[52ch] text-[16px] leading-[1.8] lg:text-[17px]">
              {nav.length} capítulos organizan las {totalSections} secciones documentales del
              servicio. Cada capítulo agrupa contenido relacionado bajo un mismo marco conceptual.
            </p>
          </FadeIn>
        </div>

        {/* Pills de métricas */}
        <FadeIn delay={0.19}>
          <div className="flex flex-wrap gap-2.5">
            {[
              { value: String(totalSections), label: "secciones" },
              { value: String(nav.length), label: "capítulos" },
              { value: "3", label: "marcos normativos" },
            ].map((s) => (
              <div
                key={s.label}
                className="border-border-subtle flex items-center gap-2 rounded-full border bg-surface-1 px-4 py-2"
              >
                <span className="font-display text-text-primary text-[14px] font-bold leading-none">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </header>

      {/* Tarjetas de capítulo */}
      <Stagger className="flex flex-col gap-4">
        {nav.map((chapter) => (
          <StaggerItem key={chapter.id}>
            <ChapterCard chapter={chapter} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
