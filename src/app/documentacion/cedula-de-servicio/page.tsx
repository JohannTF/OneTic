import { ChapterHero } from "@/components/sections/shared/ChapterHero";
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
import { cedulaDeServicio } from "@/content/documentacion/cedula-de-servicio";

export const metadata = {
  title: "Cédula de Servicio — OneTic",
};

export default function CedulaDeServicioPage() {
  const c = cedulaDeServicio;

  return (
    <div className="flex flex-col gap-20">
      <ChapterHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <InfoGeneralPanel
        empresa={c.infoGeneral.empresa}
        departamento={c.infoGeneral.departamento}
        nombreServicio={c.infoGeneral.nombreServicio}
        tipos={c.infoGeneral.tipos}
        tipoActivo={c.infoGeneral.tipoActivo}
        subservicios={c.infoGeneral.subservicios}
      />

      {/* Descripción y subservicios */}
      <section className="flex flex-col gap-10">
        <Reveal>
          <p className="text-text-secondary max-w-[65ch] text-[17px] leading-[1.85]">
            {c.descripcion}
          </p>
        </Reveal>
        <SubserviciosGrid items={c.subservicios} />
      </section>

      <FichaResumen
        objetivo={c.ficha.objetivo}
        usuarios={c.ficha.usuarios}
        beneficios={c.ficha.beneficios}
        demanda={c.ficha.demanda}
      />

      <RaciMatrix actividades={c.raci} />

      <ContactosTable contactos={c.contactos} />

      <CondicionesList condiciones={c.condiciones} />

      <ArquitecturaServicio />

      <SlaTable items={c.sla} />

      {/* Niveles de servicio · OLA */}
      <section className="flex flex-col gap-8">
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
    </div>
  );
}
