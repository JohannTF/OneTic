import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { MetasGrid } from "@/components/sections/estrategia/MetasGrid";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { metasCorporativas } from "@/content/estrategia/metas-corporativas";

export const metadata = {
  title: "Metas Corporativas — OneTic",
};

export default function MetasCorporativasPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero
        eyebrow={metasCorporativas.eyebrow}
        title={metasCorporativas.title}
        lead={metasCorporativas.lead}
      />

      <Reveal>
        <p className="text-text-secondary max-w-[65ch] text-[17px] leading-[1.85]">
          {metasCorporativas.intro}
        </p>
      </Reveal>

      <MetasGrid label="Metas por dimensión" items={metasCorporativas.items} />

      <SectionNav currentHref="/estrategia/metas-corporativas" chapterIndex={1} />
    </div>
  );
}
