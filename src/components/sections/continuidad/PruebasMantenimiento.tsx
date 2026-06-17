import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { pruebasMantenimiento } from "@/content/continuidad/plan-continuidad";

export function PruebasMantenimiento() {
  const rows = pruebasMantenimiento.map((prueba) => ({
    tipo: (
      <span className="text-[13px] font-medium text-text-primary">{prueba.tipo}</span>
    ),
    frecuencia: (
      <span className="font-mono text-[11px] font-semibold text-accent-primary">
        {prueba.frecuencia}
      </span>
    ),
    alcance: (
      <span className="text-[12px] text-text-secondary">{prueba.alcance}</span>
    ),
    responsable: (
      <span className="text-[11px] text-text-secondary">{prueba.responsable}</span>
    ),
    evidencia: (
      <span className="text-[12px] text-text-secondary">{prueba.evidencia}</span>
    ),
  }));

  const columns = [
    { key: "tipo", label: "Tipo de Prueba", className: "min-w-[200px]" },
    { key: "frecuencia", label: "Frecuencia", className: "w-32" },
    { key: "alcance", label: "Alcance", className: "min-w-[240px]" },
    { key: "responsable", label: "Responsable", className: "w-32" },
    { key: "evidencia", label: "Evidencia Requerida", className: "min-w-[220px]" },
  ];

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Pruebas, mantenimiento y revisión del plan
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <div className="rounded-lg bg-accent-subtle border border-accent-primary p-4">
          <p className="text-[12px] text-accent-primary font-semibold mb-2">
            Actualización del plan:
          </p>
          <p className="text-[11px] text-accent-primary/80">
            El PCN debe actualizarse obligatoriamente ante: cambios en el personal del ERIC, 
            incorporación de nuevos clientes/procesos, cambio de proveedor, resultados de simulacros, 
            incidentes reales de activación, o actualizaciones normativas. <strong>Responsable:</strong> Jesús Ochoa (Coordinador).
          </p>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={columns} rows={rows} />
      </Reveal>
    </section>
  );
}
