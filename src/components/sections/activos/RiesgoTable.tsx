import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { riesgos } from "@/content/activos/matriz-riesgos";
import type { NivelRiesgo } from "@/types/riesgos";

const NIVEL_RIESGO_STYLE: Record<NivelRiesgo, string> = {
  Bajo: "bg-green-50 text-green-700 border border-green-200",
  Medio: "bg-amber-50 text-amber-700 border border-amber-200",
  Alto: "bg-orange-50 text-orange-700 border border-orange-200",
  Crítico: "bg-red-50 text-red-700 border border-red-200",
};

const PROBABILIDAD_STYLE: Record<string, string> = {
  Baja: "text-green-600",
  Media: "text-amber-600",
  Alta: "text-red-600",
};

const IMPACTO_STYLE: Record<string, string> = {
  Bajo: "text-green-600",
  Medio: "text-amber-600",
  Alto: "text-red-600",
};

const PROCESO_LABEL: Record<string, string> = {
  MAN_01: "Mantenimiento",
  SOP_02: "Mesa de Ayuda",
  INV_03: "Inventario Tecnológico",
};

function NivelBadge({ nivel }: { nivel: NivelRiesgo }) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${NIVEL_RIESGO_STYLE[nivel]}`}
    >
      {nivel}
    </span>
  );
}

function ProcesoTag({ procesoId }: { procesoId: string }) {
  return (
    <span className="font-mono inline-flex items-center rounded px-2 py-0.5 text-[10px] font-medium bg-surface-2 text-text-secondary">
      {PROCESO_LABEL[procesoId] || procesoId}
    </span>
  );
}

const COLUMNS = [
  { key: "id", label: "ID", className: "w-20 whitespace-nowrap" },
  { key: "proceso", label: "Proceso", className: "w-32" },
  { key: "descripcion", label: "Descripción del Riesgo", className: "min-w-[280px]" },
  { key: "causa", label: "Causa Raíz", className: "min-w-[220px]" },
  { key: "probabilidad", label: "Probabilidad", align: "center" as const, className: "w-24" },
  { key: "impacto", label: "Impacto", align: "center" as const, className: "w-24" },
  { key: "nivel", label: "Nivel Global", align: "center" as const, className: "w-28" },
  { key: "mitigacion", label: "Plan de Mitigación", className: "min-w-[240px]" },
];

export function RiesgoTable() {
  const rows = riesgos.map((riesgo) => ({
    id: (
      <span className="font-mono text-[11px] font-semibold text-text-primary">
        {riesgo.id}
      </span>
    ),
    proceso: <ProcesoTag procesoId={riesgo.proceso} />,
    descripcion: (
      <span className="text-[13px] font-medium text-text-primary">{riesgo.descripcion}</span>
    ),
    causa: <span className="text-[13px] text-text-secondary">{riesgo.causa}</span>,
    probabilidad: (
      <span className={`font-mono font-medium text-[11px] ${PROBABILIDAD_STYLE[riesgo.probabilidad]}`}>
        {riesgo.probabilidad}
      </span>
    ),
    impacto: (
      <span className={`font-mono font-medium text-[11px] ${IMPACTO_STYLE[riesgo.impacto]}`}>
        {riesgo.impacto}
      </span>
    ),
    nivel: <NivelBadge nivel={riesgo.nivelGlobal} />,
    mitigacion: <span className="text-[13px] text-text-secondary">{riesgo.mitigacion}</span>,
  }));

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Matriz de riesgos identificados
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>

      {/* Leyenda de colores */}
      <Reveal className="mt-8">
        <div className="flex flex-col gap-4 rounded-lg bg-surface-2 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary mb-3">
            Niveles de Riesgo
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {(["Bajo", "Medio", "Alto", "Crítico"] as const).map((nivel) => (
              <div key={nivel} className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded ${NIVEL_RIESGO_STYLE[nivel].split(" ")[0]}`} />
                <span className="text-[12px] text-text-secondary">{nivel}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-text-tertiary mt-3">
            El color de cada fila indica el nivel global de riesgo. Los riesgos <strong>Críticos</strong> requieren atención inmediata.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
