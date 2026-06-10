import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { DeclaracionDisplay } from "@/components/sections/identidad/DeclaracionDisplay";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { vision } from "@/content/identidad/vision";

export const metadata = {
  title: "Visión — OneTic",
};

export default function VisionPage() {
  return (
    <div className="flex flex-col gap-20">
      <IdentidadHero eyebrow={vision.eyebrow} title={vision.title} />

      <DeclaracionDisplay
        statement={vision.statement}
        pillars={vision.pillars}
        meta={`Horizonte a futuro`}
      />

      <SectionNav currentHref="/identidad/vision" chapterIndex={0} />
    </div>
  );
}
