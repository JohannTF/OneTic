import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable, type DataTableColumn } from "@/components/ui/data-display/DataTable";
import type { SlaItem } from "@/types/documentacion";

const COLUMNS: DataTableColumn[] = [
  { key: "tipo", label: "Tipo de nivel de servicio", className: "min-w-[200px] align-top" },
  { key: "compromiso", label: "Compromiso del nivel de servicio" },
];

type SlaTableProps = {
  items: SlaItem[];
};

export function SlaTable({ items }: SlaTableProps) {
  const rows = items.map((item) => ({
    tipo: <span className="text-text-primary font-medium">{item.tipo}</span>,
    compromiso: <span className="text-text-secondary">{item.compromiso}</span>,
  }));

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Niveles de servicio · SLA
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>
    </section>
  );
}
