import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { ericTeam } from "@/content/continuidad/plan-continuidad";

const ROLE_COLOR: Record<string, string> = {
  Coordinador: "bg-red-50 text-red-700",
  "Responsable Técnico": "bg-blue-50 text-blue-700",
  "Responsable Operativo": "bg-green-50 text-green-700",
  "Responsable Administrativo": "bg-amber-50 text-amber-700",
};

function RoleBadge({ rol }: { rol: string }) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${ROLE_COLOR[rol] || "bg-surface-2 text-text-secondary"}`}
    >
      {rol}
    </span>
  );
}

const COLUMNS = [
  { key: "rol", label: "Rol en ERIC", className: "w-40" },
  { key: "nombre", label: "Nombre", className: "w-32" },
  { key: "cargo", label: "Cargo Operativo", className: "w-40" },
  { key: "contacto", label: "Contacto Emergencia", align: "center" as const, className: "w-32" },
  { key: "responsabilidades", label: "Responsabilidades Principales", className: "min-w-[280px]" },
];

export function EquipoERIC() {
  const rows = ericTeam.map((miembro) => ({
    rol: <RoleBadge rol={miembro.rol} />,
    nombre: (
      <span className="text-[13px] font-medium text-text-primary">{miembro.nombre}</span>
    ),
    cargo: <span className="text-[12px] text-text-secondary">{miembro.cargo}</span>,
    contacto: (
      <span className="font-mono text-[11px] font-semibold text-text-primary">
        {miembro.contacto}
      </span>
    ),
    responsabilidades: (
      <div className="text-[12px] text-text-secondary space-y-1">
        {miembro.responsabilidades.map((resp, idx) => (
          <div key={idx} className="flex gap-2">
            <span className="text-accent-primary">•</span>
            <span>{resp}</span>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Equipo de Respuesta a Incidentes de Continuidad (ERIC)
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="font-mono text-[11px] text-text-secondary font-semibold mb-2">
            Nota sobre cadena de mando:
          </p>
          <p className="text-[12px] text-text-tertiary">
            En ausencia del Coordinador del PCN, el Responsable Técnico asume la coordinación. 
            La cadena de mando sigue el orden: <strong>Coordinador → Responsable Técnico → Responsable Operativo</strong>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
