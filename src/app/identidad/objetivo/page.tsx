import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { ObjetivosGrid } from "@/components/sections/identidad/ObjetivosGrid";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { ScaleIn } from "@/components/ui/interactions/ScaleIn";
import { objetivos } from "@/content/identidad/objetivos";

export const metadata = {
  title: "Objetivo — OneTic",
};

export default function ObjetivoPage() {
  return (
    <div className="flex flex-col gap-20">
      <IdentidadHero
        eyebrow={objetivos.eyebrow}
        title={objetivos.title}
        lead={objetivos.lead}
      />

      {/* Objetivo general — display editorial */}
      <ScaleIn>
        <div className="border-accent-primary rounded-2xl border-l-[3px] bg-accent-subtle/30 px-8 py-10 lg:px-12">
          <span className="font-mono mb-4 block text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
            Objetivo general
          </span>
          <p className="font-display text-text-primary text-balance text-[20px] font-semibold leading-[1.5] tracking-[-0.01em] sm:text-[22px] lg:text-[24px]">
            {objetivos.general}
          </p>
        </div>
      </ScaleIn>

      {/* Objetivos específicos */}
      <ObjetivosGrid items={objetivos.especificos} />

      <SectionNav currentHref="/identidad/objetivo" chapterIndex={0} />
    </div>
  );
}
