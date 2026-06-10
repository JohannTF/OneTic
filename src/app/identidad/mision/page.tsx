import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { DeclaracionDisplay } from "@/components/sections/identidad/DeclaracionDisplay";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { mision } from "@/content/identidad/mision";

export const metadata = {
  title: "Misión — OneTic",
};

export default function MisionPage() {
  return (
    <div className="flex flex-col gap-20">
      <IdentidadHero eyebrow={mision.eyebrow} title={mision.title} />

      <DeclaracionDisplay
        statement={mision.statement}
        pillars={mision.pillars}
        meta="Declaración de misión"
      />

      <SectionNav currentHref="/identidad/mision" chapterIndex={0} />
    </div>
  );
}
