import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { InformacionGeneral } from "@/components/sections/documentacion/InformacionGeneral";
import { Antecedentes } from "@/components/sections/documentacion/Antecedentes";
import { JustificacionTecnica } from "@/components/sections/documentacion/JustificacionTecnica";
import { Alcance } from "@/components/sections/documentacion/Alcance";
import { ObjetivosServicio } from "@/components/sections/documentacion/ObjetivosServicio";
import { RiesgosIdentificados } from "@/components/sections/documentacion/RiesgosIdentificados";
import { BeneficiosEsperados } from "@/components/sections/documentacion/BeneficiosEsperados";
import { PersonalInvolucrado } from "@/components/sections/documentacion/PersonalInvolucrado";
import { JustificacionEconomica } from "@/components/sections/documentacion/JustificacionEconomica";
import { GlosarioTecnico } from "@/components/sections/documentacion/GlosarioTecnico";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "Caso de Negocio — OneTic",
};

const TOC: TocItem[] = [
  { id: "info-general", label: "Información general" },
  { id: "antecedentes", label: "Antecedentes y evolución" },
  { id: "justificacion-tecnica", label: "Justificación técnica" },
  { id: "alcance", label: "Alcance" },
  { id: "objetivos", label: "Objetivos" },
  { id: "riesgos", label: "Riesgos identificados" },
  { id: "beneficios", label: "Beneficios esperados" },
  { id: "personal", label: "Personal involucrado" },
  { id: "justificacion-economica", label: "Justificación económica" },
  { id: "glosario", label: "Glosario técnico" },
];

export default function CasoDeNegocioPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 02 · Documentación"
        title="Caso de Negocio"
        lead="Análisis integral de viabilidad, justificación técnica y económica de los servicios de soporte técnico IT. Incluye riesgos identificados, beneficios esperados y estructura de recursos necesarios para la operación."
      />

      <div id="info-general" className="scroll-mt-24">
        <InformacionGeneral />
      </div>

      <div id="antecedentes" className="scroll-mt-24">
        <Antecedentes />
      </div>

      <div id="justificacion-tecnica" className="scroll-mt-24">
        <JustificacionTecnica />
      </div>

      <div id="alcance" className="scroll-mt-24">
        <Alcance />
      </div>

      <div id="objetivos" className="scroll-mt-24">
        <ObjetivosServicio />
      </div>

      <div id="riesgos" className="scroll-mt-24">
        <RiesgosIdentificados />
      </div>

      <div id="beneficios" className="scroll-mt-24">
        <BeneficiosEsperados />
      </div>

      <div id="personal" className="scroll-mt-24">
        <PersonalInvolucrado />
      </div>

      <div id="justificacion-economica" className="scroll-mt-24">
        <JustificacionEconomica />
      </div>

      <div id="glosario" className="scroll-mt-24">
        <GlosarioTecnico />
      </div>

      <SectionNav currentHref="/documentacion/caso-de-negocio" chapterIndex={1} />
    </ChapterLayout>
  );
}
