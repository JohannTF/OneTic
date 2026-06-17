import { Reveal } from "@/components/ui/interactions/Reveal";

export function IntroduccionPlan() {
  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Introducción y alcance
          </span>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h3 className="text-[14px] font-semibold text-text-primary mb-4">
              Objetivo del Plan
            </h3>
            <ul className="space-y-2 text-[12px] text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent-primary flex-shrink-0">•</span>
                <span>Garantizar continuidad operativa ante interrupciones planificadas y no planificadas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-primary flex-shrink-0">•</span>
                <span>Minimizar impacto económico, reputacional y regulatorio</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-primary flex-shrink-0">•</span>
                <span>Establecer RTO y MBCO para procesos críticos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-primary flex-shrink-0">•</span>
                <span>Definir roles, responsabilidades y cadenas de activación</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h3 className="text-[14px] font-semibold text-text-primary mb-4">
              Procesos Cubiertos
            </h3>
            <div className="space-y-3">
              <div>
                <span className="font-mono text-[11px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded">
                  MAN_01
                </span>
                <p className="text-[12px] text-text-secondary mt-1">
                  Mantenimiento preventivo y correctivo de activos
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded">
                  SOP_02
                </span>
                <p className="text-[12px] text-text-secondary mt-1">
                  Gestión de mesa de ayuda y sistema de tickets (ITSM)
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded">
                  INV_03
                </span>
                <p className="text-[12px] text-text-secondary mt-1">
                  Gestión de inventario tecnológico de los clientes
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <div className="rounded-lg bg-surface-2 p-6">
          <h3 className="text-[14px] font-semibold text-text-primary mb-4">
            Infraestructuras Críticas Identificadas
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "A-007", nombre: "Base de datos de inventario", criticidad: "V", riesgo: 1050 },
              { id: "A-004", nombre: "Plataforma ITSM", criticidad: "V", riesgo: 720 },
              { id: "A-005", nombre: "Historial de tickets", criticidad: "V", riesgo: 520 },
              { id: "A-003", nombre: "Reporte técnico", criticidad: "IV", riesgo: 330 },
            ].map((infra) => (
              <div key={infra.id} className="flex gap-3 p-3 bg-surface-3 rounded">
                <div>
                  <span className="font-mono text-[11px] font-semibold text-accent-primary">
                    {infra.id}
                  </span>
                  <p className="text-[11px] text-text-secondary">{infra.nombre}</p>
                </div>
                <div className="ml-auto text-right">
                  <span className={`font-mono text-[10px] font-bold ${infra.criticidad === "V" ? "text-red-600" : "text-orange-600"}`}>
                    {infra.criticidad}
                  </span>
                  <p className="text-[10px] text-text-tertiary">Riesgo: {infra.riesgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
