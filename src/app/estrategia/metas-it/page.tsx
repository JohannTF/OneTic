import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { MetasGrid } from "@/components/sections/estrategia/MetasGrid";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { metasIt } from "@/content/estrategia/metas-it";

export const metadata = {
  title: "Metas IT — OneTic",
};

export default function MetasItPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero eyebrow={metasIt.eyebrow} title={metasIt.title} lead={metasIt.lead} />

      <Reveal>
        <p className="text-text-secondary max-w-[65ch] text-[17px] leading-[1.85]">
          {metasIt.intro}
        </p>
      </Reveal>

      <MetasGrid label="Metas por dimensión" items={metasIt.items} />

      <SectionNav currentHref="/estrategia/metas-it" chapterIndex={1} />
    </div>
  );
}
