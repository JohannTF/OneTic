import { Wrench, Headphones, ClipboardList, CheckCircle2, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { procesos } from "@/content/activos/inventario";
import type { ProcesoId } from "@/types/activos";
import type { LucideIcon } from "lucide-react";

const PROCESO_ICON: Record<ProcesoId, LucideIcon> = {
  MAN_01: Wrench,
  SOP_02: Headphones,
  INV_03: ClipboardList,
};

// Renderiza "1A4 – Diagnóstico de falla" con el código en mono resaltado
function ActividadItem({ texto }: { texto: string }) {
  const dashIdx = texto.indexOf("–");
  if (dashIdx === -1) return <span>{texto}</span>;
  const codigo = texto.slice(0, dashIdx).trim();
  const desc = texto.slice(dashIdx + 1).trim();
  return (
    <>
      <span className="font-mono text-[10px] font-semibold text-accent-primary bg-accent-subtle px-1.5 py-0.5 rounded mr-2">
        {codigo}
      </span>
      {desc}
    </>
  );
}

export function ProcesosRelacion() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Relación entre procesos
          </span>
        </div>
      </Reveal>

      <Stagger className="flex flex-col gap-5">
        {procesos.map((proceso) => {
          const Icon = PROCESO_ICON[proceso.id];
          return (
            <StaggerItem key={proceso.id}>
              <article className="border-border-subtle overflow-hidden rounded-2xl border bg-surface-base">
                {/* Header */}
                <div className="flex items-start gap-4 border-b border-border-subtle bg-surface-1 px-6 py-5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle">
                    <Icon size={20} className="text-accent-primary" />
                  </div>
                  <div>
                    <span className="font-mono mb-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-primary">
                      {proceso.id}
                    </span>
                    <h3 className="font-body text-[15px] font-semibold leading-snug text-text-primary">
                      {proceso.nombre}
                    </h3>
                  </div>
                </div>

                {/* Descripción */}
                <div className="px-6 py-5">
                  <p className="text-[14px] leading-[1.7] text-text-secondary">
                    {proceso.descripcion}
                  </p>
                </div>

                {/* Divisor hairline */}
                <div className="mx-6 h-px bg-border-subtle" />

                {/* Actividades y Factores */}
                <div className="grid gap-px bg-border-subtle sm:grid-cols-2">
                  {/* Actividades críticas */}
                  <div className="bg-surface-base px-6 py-5">
                    <div className="mb-4 flex items-center gap-2">
                      <Zap size={13} className="text-warning" />
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                        Actividades críticas
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {proceso.actividadesCriticas.map((act, i) => (
                        <li
                          key={i}
                          className="flex items-baseline gap-2 text-[13px] leading-[1.6] text-text-secondary"
                        >
                          <ActividadItem texto={act} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Factores de éxito */}
                  <div className="bg-surface-1 px-6 py-5">
                    <div className="mb-4 flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-success" />
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                        Factores de éxito
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {proceso.factoresExito.map((factor, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] leading-[1.6] text-text-secondary"
                        >
                          <span
                            aria-hidden
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border-strong"
                          />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
