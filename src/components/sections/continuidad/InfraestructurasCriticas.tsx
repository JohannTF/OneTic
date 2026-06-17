import { Reveal } from "@/components/ui/interactions/Reveal";
import { infraestructurasCriticas } from "@/content/continuidad/plan-continuidad";
import type { NivelCriticidad } from "@/types/riesgos";

const CRITICIDAD_COLOR: Record<string, string> = {
  "IV — Alto": "bg-orange-50 text-orange-700 border border-orange-200",
  "V — Muy Alto": "bg-red-50 text-red-700 border border-red-200",
};

export function InfraestructurasCriticas() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Procedimientos de recuperación por infraestructura crítica
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col gap-8">
        {infraestructurasCriticas.map((infra) => (
          <Reveal key={infra.id}>
            <div className="rounded-lg border border-surface-3 overflow-hidden">
              {/* Header */}
              <div className="bg-surface-2 px-6 py-4 border-b border-surface-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[12px] font-semibold text-accent-primary">
                        {infra.id}
                      </span>
                      <h3 className="text-[14px] font-semibold text-text-primary">
                        {infra.nombre}
                      </h3>
                    </div>
                    <p className="text-[12px] text-text-secondary mb-2">
                      <strong>Amenaza principal:</strong> {infra.amenaza}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-mono inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${CRITICIDAD_COLOR[infra.criticidad]}`}
                    >
                      {infra.criticidad}
                    </span>
                    <p className="text-[11px] text-text-tertiary mt-2 font-mono">
                      Riesgo: {infra.riesgoTotal}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fases de recuperación */}
              <div className="divide-y divide-surface-3">
                {infra.fases.map((fase, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-surface-2 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-subtle">
                          <span className="font-mono text-[11px] font-semibold text-accent-primary">
                            {idx + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow">
                            <h4 className="text-[12px] font-semibold text-text-primary mb-1">
                              {fase.nombre}
                            </h4>
                            <p className="text-[12px] text-text-secondary leading-relaxed">
                              {fase.accion}
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <span className="font-mono text-[11px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded whitespace-nowrap">
                              {fase.tiempoObjetivo}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
