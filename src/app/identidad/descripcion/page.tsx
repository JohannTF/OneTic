import { IdentidadHero } from "@/components/sections/identidad/IdentidadHero";
import { SubserviciosGrid } from "@/components/sections/identidad/SubserviciosGrid";
import { AlcancePanel } from "@/components/sections/identidad/AlcancePanel";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { descripcion } from "@/content/identidad/descripcion";

export const metadata = {
  title: "Descripción — OneTic",
};

export default function DescripcionPage() {
  return (
    <div className="flex flex-col gap-20">
      <IdentidadHero
        eyebrow={descripcion.eyebrow}
        title={descripcion.title}
        lead={descripcion.lead}
      />

      {/* Sub-servicios */}
      <SubserviciosGrid items={descripcion.subservicios} />

      {/* Alcance */}
      <AlcancePanel
        incluye={descripcion.alcance.incluye}
        excluye={descripcion.alcance.excluye}
      />

      {/* Usuarios */}
      <section>
        <Reveal className="mb-8">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
              Usuarios del servicio
            </span>
          </div>
        </Reveal>
        <Reveal>
          <ul className="flex flex-col gap-3">
            {descripcion.usuarios.map((u) => (
              <li
                key={u}
                className="border-border-subtle bg-surface-1 flex items-center gap-4 rounded-xl border px-5 py-4"
              >
                <div className="bg-accent-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                <span className="text-text-secondary text-[15px]">{u}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <SectionNav currentHref="/identidad/descripcion" chapterIndex={0} />
    </div>
  );
}
