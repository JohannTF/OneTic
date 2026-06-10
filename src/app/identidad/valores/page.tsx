import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { ValoresGrid } from "@/components/sections/identidad/ValoresGrid";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { valores } from "@/content/identidad/valores";

export const metadata = {
  title: "Valores — OneTic",
};

export default function ValoresPage() {
  return (
    <div className="flex flex-col gap-16">
      <IdentidadHero
        eyebrow={valores.eyebrow}
        title={valores.title}
        lead={valores.lead}
      />

      <ValoresGrid items={valores.items} />

      <SectionNav currentHref="/identidad/valores" chapterIndex={0} />
    </div>
  );
}
