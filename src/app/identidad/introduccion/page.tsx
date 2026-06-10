import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { TimelineEvolucion } from "@/components/sections/identidad/TimelineEvolucion";
import { BrechaCallout } from "@/components/sections/identidad/BrechaCallout";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { introduccion } from "@/content/identidad/introduccion";

export const metadata = {
  title: "Introducción — OneTic",
};

export default function IntroduccionPage() {
  return (
    <div className="flex flex-col gap-20">
      <IdentidadHero
        eyebrow={introduccion.eyebrow}
        title={introduccion.title}
        lead={introduccion.lead}
      />

      {/* Contexto */}
      <Reveal>
        <p className="text-text-secondary max-w-[65ch] text-[17px] leading-[1.85]">
          {introduccion.context}
        </p>
      </Reveal>

      {/* Timeline */}
      <TimelineEvolucion steps={introduccion.timeline} />

      {/* Brecha + justificación */}
      <BrechaCallout
        title={introduccion.brecha.title}
        description={introduccion.brecha.description}
        items={introduccion.brecha.items}
        justificacion={introduccion.justificacion}
      />

      <SectionNav currentHref="/identidad/introduccion" chapterIndex={0} />
    </div>
  );
}
