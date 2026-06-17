import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { analisRiesgos } from "@/content/activos/matriz-riesgos";

const PROCESO_LABEL: Record<string, string> = {
  SNB_MAN_01: "Mantenimiento",
  SNB_SOP_02: "Mesa de Ayuda",
  SNB_INV_03: "Inventario Tecnológico",
};

function ProcesoTag({ procesoId }: { procesoId: string }) {
  return (
    <span className="font-mono inline-flex items-center rounded px-2 py-0.5 text-[10px] font-medium bg-surface-2 text-text-secondary">
      {PROCESO_LABEL[procesoId] || procesoId}
    </span>
  );
}

function ValorBadge({ valor }: { valor: string; numero: number }) {
  const colorMap: Record<string, string> = {
    "Alto": "bg-red-50 text-red-700",
    "Medio": "bg-amber-50 text-amber-700",
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className={`font-mono inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold ${colorMap[valor] || "bg-surface-2 text-text-secondary"}`}>
        {valor}
      </span>
    </div>
  );
}

const COLUMNS = [
  { key: "id", label: "ID", className: "w-20 whitespace-nowrap" },
  { key: "proceso", label: "Proceso", className: "w-32" },
  { key: "nombre", label: "Activo", className: "min-w-[180px]" },
  { key: "valores", label: "C-I-D", align: "center" as const, className: "w-24" },
  { key: "valor1", label: "Valor", align: "center" as const, className: "w-24" },
  { key: "vulnerabilidades", label: "Vulnerabilidades", className: "min-w-[220px]" },
  { key: "amenazas", label: "Amenazas", className: "min-w-[220px]" },
  { key: "eventoAmenaza", label: "Evento de Riesgo", className: "min-w-[240px]" },
  { key: "controles", label: "Controles", className: "min-w-[240px]" },
];

export function AnalisRiesgosTable() {
  const rows = analisRiesgos.map((riesgo) => ({
    id: (
      <span className="font-mono text-[11px] font-semibold text-text-primary">
        {riesgo.idActivo}
      </span>
    ),
    proceso: <ProcesoTag procesoId={riesgo.idProceso} />,
    nombre: (
      <span className="text-[13px] font-medium text-text-primary">{riesgo.nombre}</span>
    ),
    valores: (
      <span className="font-mono font-semibold text-[11px] text-text-primary">
        {riesgo.confidencialidad}-{riesgo.integridad}-{riesgo.disponibilidad}
      </span>
    ),
    valor1: <ValorBadge valor={riesgo.valor1} numero={riesgo.valor2} />,
    vulnerabilidades: (
      <span className="text-[12px] text-text-secondary">{riesgo.vulnerabilidades}</span>
    ),
    amenazas: (
      <span className="text-[12px] text-text-secondary">{riesgo.amenazas}</span>
    ),
    eventoAmenaza: (
      <span className="text-[12px] font-medium text-text-primary">{riesgo.eventoAmenaza}</span>
    ),
    controles: (
      <span className="text-[12px] text-text-secondary">{riesgo.controles}</span>
    ),
  }));

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Análisis de vulnerabilidades, amenazas y riesgos
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="font-mono text-[11px] text-text-secondary mb-2 font-semibold">
            Leyenda:
          </p>
          <p className="font-mono text-[11px] text-text-tertiary">
            <strong>C-I-D:</strong> Confidencialidad-Integridad-Disponibilidad (escala 1-5) · 
            <strong>Valor:</strong> Nivel global de riesgo para el negocio (Alto/Medio)
          </p>
        </div>
      </Reveal>
    </section>
  );
}
