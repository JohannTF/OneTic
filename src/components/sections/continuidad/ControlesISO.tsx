import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { controlesISO } from "@/content/continuidad/plan-continuidad";

export function ControlesISO() {
  const rows = controlesISO.map((control) => ({
    id: (
      <span className="font-mono font-semibold text-[11px] text-accent-primary">
        {control.id}
      </span>
    ),
    nombre: (
      <span className="text-[13px] font-medium text-text-primary">{control.nombre}</span>
    ),
    descripcion: (
      <span className="text-[12px] text-text-secondary">{control.descripcion}</span>
    ),
    activos: (
      <div className="flex flex-wrap gap-1">
        {control.activosProtegidos.map((activo) => (
          <span
            key={activo}
            className="font-mono text-[10px] font-semibold bg-surface-2 text-text-secondary px-1.5 py-0.5 rounded"
          >
            {activo}
          </span>
        ))}
      </div>
    ),
    implementacion: (
      <span className="text-[12px] text-text-secondary">{control.implementacion}</span>
    ),
    responsable: (
      <span className="font-mono text-[11px] text-text-secondary">
        {control.responsable}
      </span>
    ),
  }));

  const columns = [
    { key: "id", label: "Control ISO", className: "w-20" },
    { key: "nombre", label: "Nombre", className: "min-w-[200px]" },
    { key: "descripcion", label: "Descripción", className: "min-w-[280px]" },
    { key: "activos", label: "Activos Protegidos", className: "w-32" },
    { key: "implementacion", label: "Implementación", className: "min-w-[220px]" },
    { key: "responsable", label: "Responsable", className: "w-32" },
  ];

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Controles de seguridad — ISO/IEC 27001:2022
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="text-[12px] text-text-secondary">
            Los siguientes controles de ISO/IEC 27001:2022 se implementan para dar soporte a este 
            PCN y mitigar los riesgos identificados en la Matriz de Activos:
          </p>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={columns} rows={rows} />
      </Reveal>
    </section>
  );
}
