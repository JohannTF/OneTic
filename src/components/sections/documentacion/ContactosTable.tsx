import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable, type DataTableColumn } from "@/components/ui/data-display/DataTable";
import type { RolContacto } from "@/types/documentacion";

const COLUMNS: DataTableColumn[] = [
  { key: "rol", label: "Rol", className: "min-w-[200px]" },
  { key: "nombre", label: "Nombre" },
  { key: "correo", label: "Correo electrónico" },
  { key: "telefono", label: "Teléfono" },
  { key: "horario", label: "Horario" },
];

type ContactosTableProps = {
  contactos: RolContacto[];
};

export function ContactosTable({ contactos }: ContactosTableProps) {
  const rows = contactos.map((c) => ({
    rol: <span className="text-text-primary font-medium">{c.rol}</span>,
    nombre: <span className="text-text-secondary">{c.nombre}</span>,
    correo: <span className="font-mono text-text-tertiary text-[12px]">{c.correo}</span>,
    telefono: <span className="font-mono text-text-tertiary text-[12px]">{c.telefono}</span>,
    horario: <span className="text-text-tertiary whitespace-nowrap">{c.horario}</span>,
  }));

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Directorio de roles
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>
    </section>
  );
}
