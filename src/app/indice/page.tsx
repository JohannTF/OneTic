import { ChapterCard } from "@/components/sections/indice/ChapterCard";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { FadeIn } from "@/components/ui/interactions/FadeIn";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { indiceChapters, totalSections } from "@/content/indice";

export const metadata = {
  title: "Índice — OneTic",
};

export default function IndicePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Encabezado */}
      <header className="flex flex-col gap-5">
        <FadeIn>
          <Eyebrow>Navegación global</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="font-display text-text-primary text-[28px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[32px] lg:text-[40px] lg:leading-[1.15]">
            Índice de la documentación
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="text-text-secondary max-w-[600px] text-[17px] leading-[1.75]">
            {indiceChapters.length} capítulos organizan las {totalSections} secciones documentales del
            servicio. Cada capítulo agrupa contenido relacionado bajo un mismo marco conceptual.
          </p>
        </FadeIn>
      </header>

      {/* Tarjetas de capítulo */}
      <Stagger className="flex flex-col gap-4">
        {indiceChapters.map((chapter) => (
          <StaggerItem key={chapter.id}>
            <ChapterCard chapter={chapter} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
