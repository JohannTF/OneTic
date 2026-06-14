import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { InfoGeneralPanel } from "@/components/sections/documentacion/InfoGeneralPanel";
import { SubserviciosGrid } from "@/components/sections/identidad/SubserviciosGrid";
import { FichaResumen } from "@/components/sections/documentacion/FichaResumen";
import { RaciMatrix } from "@/components/sections/documentacion/RaciMatrix";
import { ContactosTable } from "@/components/sections/documentacion/ContactosTable";
import { CondicionesList } from "@/components/sections/documentacion/CondicionesList";
import { ArquitecturaServicio } from "@/components/sections/documentacion/ArquitecturaServicio";
import { SlaTable } from "@/components/sections/documentacion/SlaTable";
import { OlaTable } from "@/components/sections/documentacion/OlaTable";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { Reveal } from "@/components/ui/interactions/Reveal";
import type { TocItem } from "@/components/sections/shared/OnThisPage";
import { cedulaDeServicio } from "@/content/documentacion/cedula-de-servicio";

export const metadata = {
  title: "Cédula de Servicio — OneTic",
};

const TOC: TocItem[] = [
  { id: "info-general", label: "Información general" },
  { id: "descripcion", label: "Descripción" },
  { id: "objetivo-alcance", label: "Objetivo y alcance" },
  { id: "raci", label: "Matriz RACI" },
  { id: "contactos", label: "Directorio de roles" },
  { id: "condiciones", label: "Condiciones generales" },
  { id: "arquitectura", label: "Arquitectura" },
  { id: "sla", label: "Niveles · SLA" },
  { id: "ola", label: "Niveles · OLA" },
];

export default function CedulaDeServicioPage() {
  const c = cedulaDeServicio;

  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <div id="info-general" className="scroll-mt-24">
        <InfoGeneralPanel
          empresa={c.infoGeneral.empresa}
          departamento={c.infoGeneral.departamento}
          nombreServicio={c.infoGeneral.nombreServicio}
          tipos={c.infoGeneral.tipos}
          tipoActivo={c.infoGeneral.tipoActivo}
          subservicios={c.infoGeneral.subservicios}
        />
      </div>

      {/* Descripción y subservicios */}
      <section id="descripcion" className="flex scroll-mt-24 flex-col gap-10">
        <Reveal>
          <p className="text-text-secondary max-w-[65ch] text-[17px] leading-[1.85]">
            {c.descripcion}
          </p>
        </Reveal>
        <SubserviciosGrid items={c.subservicios} />
      </section>

      <div id="objetivo-alcance" className="scroll-mt-24">
        <FichaResumen
          objetivo={c.ficha.objetivo}
          usuarios={c.ficha.usuarios}
          beneficios={c.ficha.beneficios}
          demanda={c.ficha.demanda}
        />
      </div>

      <div id="raci" className="scroll-mt-24">
        <RaciMatrix actividades={c.raci} />
      </div>

      <div id="contactos" className="scroll-mt-24">
        <ContactosTable contactos={c.contactos} />
      </div>

      <div id="condiciones" className="scroll-mt-24">
        <CondicionesList condiciones={c.condiciones} />
      </div>

      <div id="arquitectura" className="scroll-mt-24">
        <ArquitecturaServicio />
      </div>

      <div id="sla" className="scroll-mt-24">
        <SlaTable items={c.sla} />
      </div>

      {/* Niveles de servicio · OLA */}
      <section id="ola" className="flex scroll-mt-24 flex-col gap-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
              Niveles de servicio · OLA
            </span>
          </div>
        </Reveal>
        <OlaTable label="Aplicaciones" items={c.olaAplicaciones} />
        <OlaTable label="Software / aplicación" items={c.olaSoftware} />
      </section>

      <SectionNav currentHref="/documentacion/cedula-de-servicio" chapterIndex={2} />
    </ChapterLayout>
  );
}
