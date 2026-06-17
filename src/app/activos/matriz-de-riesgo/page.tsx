import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { ActivosValoradosTable } from "@/components/sections/activos/ActivosValoradosTable";
import { MatrizImpacto } from "@/components/sections/activos/MatrizImpacto";
import { EscalasReferencia } from "@/components/sections/activos/EscalasReferencia";
import { AnalisRiesgosTable } from "@/components/sections/activos/AnalisRiesgosTable";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "Matriz de Riesgo — OneTic",
};

const TOC: TocItem[] = [
  { id: "activos-valorados", label: "Activos valorados" },
  { id: "matriz-impacto", label: "Matriz de impacto" },
  { id: "escalas-referencia", label: "Escalas de referencia" },
  { id: "analisis-riesgos", label: "Análisis de riesgos" },
];

export default function MatrizDeRiesgoPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 04 · Activos y Riesgos"
        title="Matriz de Riesgo"
        lead="Identificación, evaluación y clasificación de riesgos asociados a los activos de información y procesos del servicio. Análisis integral de vulnerabilidades, amenazas y controles bajo marco ISO 27000."
      />

      <div id="activos-valorados" className="scroll-mt-24">
        <ActivosValoradosTable />
      </div>

      <div id="matriz-impacto" className="scroll-mt-24">
        <MatrizImpacto />
      </div>

      <div id="escalas-referencia" className="scroll-mt-24">
        <EscalasReferencia />
      </div>

      <div id="analisis-riesgos" className="scroll-mt-24">
        <AnalisRiesgosTable />
      </div>

      <SectionNav currentHref="/activos/matriz-de-riesgo" chapterIndex={3} />
    </ChapterLayout>
  );
}
