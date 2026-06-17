import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { activosValorados } from "@/content/activos/matriz-riesgos";
import type { NivelCriticidad } from "@/types/riesgos";

const CRITICIDAD_STYLE: Record<NivelCriticidad, string> = {
  I: "bg-green-50 text-green-700 border border-green-200",
  II: "bg-lime-50 text-lime-700 border border-lime-200",
  III: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  IV: "bg-orange-50 text-orange-700 border border-orange-200",
  V: "bg-red-50 text-red-700 border border-red-200",
};

const PROCESO_LABEL: Record<string, string> = {
  SNB_MAN_01: "Mantenimiento",
  SNB_SOP_02: "Mesa de Ayuda",
  SNB_INV_03: "Inventario Tecnológico",
};

function CriticidadBadge({ nivel }: { nivel: NivelCriticidad }) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${CRITICIDAD_STYLE[nivel]}`}
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
  { key: "nombre", label: "Activo de Información", className: "min-w-[200px]" },
  { key: "areaGeografica", label: "Área Geográfica", align: "center" as const, className: "w-20" },
  { key: "periodoAfectacion", label: "Período Afectación", align: "center" as const, className: "w-20" },
  { key: "impacto", label: "Impacto", align: "center" as const, className: "w-16" },
  { key: "cantidadIc", label: "Cantidad IC Afectadas", align: "center" as const, className: "w-20" },
  { key: "camposAfectados", label: "Campos Afectados", align: "center" as const, className: "w-20" },
  { key: "interdependencia", label: "Interdependencia", align: "center" as const, className: "w-20" },
  { key: "criticidad", label: "Criticidad", align: "center" as const, className: "w-24" },
  { key: "infraestructura", label: "Infraestructuras Críticas", className: "min-w-[200px]" },
  { key: "gradoCriticidad", label: "Grado", align: "center" as const, className: "w-16" },
  { key: "controles", label: "Controles a Implementar", className: "min-w-[240px]" },
];

export function ActivosValoradosTable() {
  const rows = activosValorados.map((activo) => ({
    id: (
      <span className="font-mono text-[11px] font-semibold text-text-primary">
        {activo.idActivo}
      </span>
    ),
    proceso: <ProcesoTag procesoId={activo.idProceso} />,
    nombre: (
      <span className="text-[13px] font-medium text-text-primary">{activo.nombre}</span>
    ),
    areaGeografica: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.areaGeografica}
      </span>
    ),
    periodoAfectacion: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.periodoAfectacion}
      </span>
    ),
    impacto: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.impacto}
      </span>
    ),
    cantidadIc: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.cantidadIcAfectadas}
      </span>
    ),
    camposAfectados: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.camposAfectados}
      </span>
    ),
    interdependencia: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.interdependencia}
      </span>
    ),
    criticidad: <CriticidadBadge nivel={activo.criticidad} />,
    infraestructura: (
      <span className="text-[13px] text-text-secondary">{activo.infraestructurasCriticas}</span>
    ),
    gradoCriticidad: (
      <span className="font-mono font-semibold text-[12px] text-text-primary">
        {activo.gradoCriticidad}
      </span>
    ),
    controles: (
      <span className="text-[12px] text-text-secondary">{activo.controlesImplementar || "—"}</span>
    ),
  }));

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Activos valorados y criticidad
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="font-mono text-[11px] text-text-secondary mb-2 font-semibold">
            Escalas de ponderación:
          </p>
          <div className="grid gap-3 text-[11px] text-text-tertiary">
            <div><strong>Área Geográfica:</strong> 1=1 zona, 2=Más de una zona, 3=Todas las zonas</div>
            <div><strong>Período Afectación:</strong> 1=24h o menos, 2=Hasta 72h, 3=Más de 72h</div>
            <div><strong>Impacto/Interdependencia:</strong> Escala 1-5 (1=Bajo, 5=Crítico)</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
