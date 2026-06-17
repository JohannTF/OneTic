import { Reveal } from "@/components/ui/interactions/Reveal";
import { infoGeneral } from "@/content/documentacion/caso-negocio";

export function InformacionGeneral() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Información general
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="rounded-lg border border-surface-3 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                Nombre del servicio
              </p>
              <p className="text-[13px] font-medium text-text-primary">
                {infoGeneral.nombreServicio}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                Administrador
              </p>
              <p className="text-[13px] font-medium text-text-primary">
                {infoGeneral.administrador}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                Fecha de elaboración
              </p>
              <p className="text-[13px] text-text-secondary">
                {infoGeneral.fechaElaboracion}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                Período de ejecución
              </p>
              <p className="text-[13px] text-text-secondary">
                {infoGeneral.fechaInicio} — {infoGeneral.fechaFinalizacion}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
