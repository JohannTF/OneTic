import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { MapaEstrategico } from "@/components/sections/estrategia/MapaEstrategico";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { mapaEstrategico } from "@/content/estrategia/mapa-estrategico";

export const metadata = {
  title: "Mapa Estratégico — OneTic",
};

export default function MapaEstrategicoPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero
        eyebrow={mapaEstrategico.eyebrow}
        title={mapaEstrategico.title}
        lead={mapaEstrategico.lead}
      />

      <MapaEstrategico label="Mapa corporativo" perspectivas={mapaEstrategico.corporativa} />

      <MapaEstrategico label="Mapa del servicio de TI" perspectivas={mapaEstrategico.it} />

      <SectionNav currentHref="/estrategia/mapa-estrategico" chapterIndex={1} />
    </div>
  );
}
