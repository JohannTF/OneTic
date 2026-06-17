import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { activos, procesos } from "@/content/activos/inventario";
import type { ClasificacionActivo, ProcesoId } from "@/types/activos";

const CLASIFICACION_STYLE: Record<ClasificacionActivo, string> = {
  Crítico: "bg-accent-subtle text-accent-primary",
  "No crítico": "bg-surface-2 text-text-tertiary",
};

function ClasificacionBadge({ valor }: { valor: ClasificacionActivo }) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] ${CLASIFICACION_STYLE[valor]}`}
    >
      {valor}
    </span>
  );
}

function RelacionBadge({ ids }: { ids: string }) {
  if (ids === "—") return <span className="text-text-disabled">—</span>;
  return (
    <span className="font-mono text-[11px] text-text-tertiary">{ids}</span>
  );
}

const COLUMNS = [
  { key: "idActivo", label: "ID Activo", className: "w-24 whitespace-nowrap" },
  { key: "nombre", label: "Activo de Información" },
  { key: "descripcion", label: "Descripción", className: "min-w-[280px]" },
  { key: "clasificacion", label: "Clasificación", align: "center" as const, className: "w-36" },
  { key: "relacionIds", label: "Relacionado con", align: "center" as const, className: "w-36" },
];

const PROCESO_LABEL: Record<ProcesoId, string> = {
  MAN_01: "Mantenimiento preventivo y correctivo de equipos de cómputo",
  SOP_02: "Gestión de mesa de ayuda y sistema de tickets",
  INV_03: "Gestión de inventario tecnológico",
};

export function ActivosTable() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Activos de información por proceso
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col gap-10">
        {procesos.map((proceso) => {
          const rows = activos
            .filter((a) => a.idProceso === proceso.id)
            .map((a) => ({
              idActivo: (
                <span className="font-mono text-[11px] font-semibold text-text-primary">
                  {a.idActivo}
                </span>
              ),
              nombre: (
                <span className="font-medium text-text-primary">{a.nombre}</span>
              ),
              descripcion: a.descripcion,
              clasificacion: <ClasificacionBadge valor={a.clasificacion} />,
              relacionIds: <RelacionBadge ids={a.relacionIds} />,
            }));

          return (
            <Reveal key={proceso.id}>
              <div>
                {/* Cabecera de grupo */}
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-primary bg-accent-subtle px-2.5 py-1 rounded-md">
                    {proceso.id}
                  </span>
                  <span className="text-[13px] text-text-secondary">
                    {PROCESO_LABEL[proceso.id]}
                  </span>
                </div>
                <DataTable columns={COLUMNS} rows={rows} />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Leyenda */}
      <Reveal>
        <p className="font-mono mt-6 text-[11px] text-text-tertiary">
          La columna &ldquo;Relacionado con&rdquo; indica los IDs de otros activos con
          dependencia directa dentro del mismo sistema de información.
        </p>
      </Reveal>
    </section>
  );
}
