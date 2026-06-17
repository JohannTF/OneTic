import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { IntroduccionPlan } from "@/components/sections/continuidad/IntroduccionPlan";
import { EquipoERIC } from "@/components/sections/continuidad/EquipoERIC";
import { CriteriosActivacion } from "@/components/sections/continuidad/CriteriosActivacion";
import { ProcedimientosRecuperacion } from "@/components/sections/continuidad/ProcedimientosRecuperacion";
import { ControlesISO } from "@/components/sections/continuidad/ControlesISO";
import { InfraestructurasCriticas } from "@/components/sections/continuidad/InfraestructurasCriticas";
import { PruebasMantenimiento } from "@/components/sections/continuidad/PruebasMantenimiento";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "Plan de Continuidad del Negocio — OneTic",
};

const TOC: TocItem[] = [
  { id: "introduccion", label: "Introducción y alcance" },
  { id: "equipo-eric", label: "Equipo ERIC" },
  { id: "criterios-activacion", label: "Criterios de activación" },
  { id: "procedimientos", label: "Procedimientos de recuperación" },
  { id: "controles-iso", label: "Controles ISO" },
  { id: "infraestructuras", label: "Infraestructuras críticas" },
  { id: "pruebas", label: "Pruebas y mantenimiento" },
];

export default function PlanContinuidadPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 05 · Continuidad del Negocio"
        title="Plan de Continuidad del Negocio"
        lead="Estrategias, procedimientos y responsabilidades para garantizar la continuidad operativa de los procesos críticos MAN_01, SOP_02 e INV_03 ante eventos disruptivos. Alineado con ISO/IEC 27001:2022 y ISO 22301."
      />

      <div id="introduccion" className="scroll-mt-24">
        <IntroduccionPlan />
      </div>

      <div id="equipo-eric" className="scroll-mt-24">
        <EquipoERIC />
      </div>

      <div id="criterios-activacion" className="scroll-mt-24">
        <CriteriosActivacion />
      </div>

      <div id="procedimientos" className="scroll-mt-24">
        <ProcedimientosRecuperacion />
      </div>

      <div id="controles-iso" className="scroll-mt-24">
        <ControlesISO />
      </div>

      <div id="infraestructuras" className="scroll-mt-24">
        <InfraestructurasCriticas />
      </div>

      <div id="pruebas" className="scroll-mt-24">
        <PruebasMantenimiento />
      </div>

      <SectionNav currentHref="/continuidad/plan-de-continuidad" chapterIndex={4} />
    </ChapterLayout>
  );
}
