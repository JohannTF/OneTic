import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { CascadaTable } from "@/components/sections/estrategia/CascadaTable";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { cascadaDeMetas } from "@/content/estrategia/cascada-de-metas";

export const metadata = {
  title: "Cascada de Metas — OneTic",
};

export default function CascadaDeMetasPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero
        eyebrow={cascadaDeMetas.eyebrow}
        title={cascadaDeMetas.title}
        lead={cascadaDeMetas.lead}
      />

      <CascadaTable label="Cascada de metas corporativas" rows={cascadaDeMetas.corporativas} />

      <CascadaTable label="Cascada de metas de TI" rows={cascadaDeMetas.it} />

      <SectionNav currentHref="/estrategia/cascada-de-metas" chapterIndex={1} />
    </div>
  );
}
