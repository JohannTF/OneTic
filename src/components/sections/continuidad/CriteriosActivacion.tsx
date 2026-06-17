import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { criteriosActivacion } from "@/content/continuidad/plan-continuidad";
import type { NivelSeveridad } from "@/types/continuidad";

const NIVEL_COLOR: Record<NivelSeveridad, string> = {
  CRÍTICO: "bg-red-50 text-red-700 border border-red-200",
  ALTO: "bg-orange-50 text-orange-700 border border-orange-200",
  MEDIO: "bg-amber-50 text-amber-700 border border-amber-200",
};

function NivelBadge({ nivel }: { nivel: NivelSeveridad }) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${NIVEL_COLOR[nivel]}`}
    >
      {nivel}
    </span>
  );
}

const COLUMNS = [
  { key: "escenario", label: "Escenario de Activación", className: "min-w-[240px]" },
  { key: "procesosAfectados", label: "Procesos Afectados", className: "w-32" },
  { key: "umbral", label: "Umbral de Activación", className: "min-w-[240px]" },
  { key: "nivel", label: "Nivel", align: "center" as const, className: "w-24" },
];

export function CriteriosActivacion() {
  const rows = criteriosActivacion.map((criterio) => ({
    escenario: (
      <span className="text-[13px] font-medium text-text-primary">{criterio.escenario}</span>
    ),
    procesosAfectados: (
      <div className="flex flex-wrap gap-1">
        {criterio.procesosAfectados.map((proc) => (
          <span
            key={proc}
            className="font-mono text-[10px] font-semibold bg-surface-2 text-text-secondary px-2 py-1 rounded"
          >
            {proc}
          </span>
        ))}
      </div>
    ),
    umbral: (
      <span className="text-[12px] text-text-secondary">{criterio.umbral}</span>
    ),
    nivel: <NivelBadge nivel={criterio.nivel} />,
  }));

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Criterios de activación del PCN
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <div className="rounded-lg bg-accent-subtle p-4 border border-accent-primary">
          <p className="text-[12px] text-accent-primary font-semibold mb-2">
            Procedimiento de activación:
          </p>
          <ol className="text-[12px] text-accent-primary/80 space-y-1 ml-4">
            <li>1. Detección del evento → Notificación al Coordinador (inmediata)</li>
            <li>2. Evaluación inicial → Confirmación del umbral (máx. 15 min)</li>
            <li>3. Declaración formal → Convocatoria del ERIC</li>
            <li>4. Notificación a clientes → En los primeros 30 min</li>
            <li>5. Activación de opciones → Ejecución de procedimientos de continuidad</li>
            <li>6. Registro → Bitácora de incidente con marca de tiempo</li>
          </ol>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>
    </section>
  );
}
