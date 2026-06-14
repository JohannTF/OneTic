import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable, type DataTableColumn } from "@/components/ui/data-display/DataTable";
import type { OlaItem } from "@/types/documentacion";

const COLUMNS: DataTableColumn[] = [
  { key: "aspecto", label: "Aspecto", className: "min-w-[140px] align-top" },
  { key: "compromiso", label: "Compromiso del nivel de servicio" },
  { key: "metrica", label: "Métrica", className: "min-w-[180px]" },
];

type OlaTableProps = {
  label: string;
  items: OlaItem[];
};

export function OlaTable({ label, items }: OlaTableProps) {
  const rows = items.map((item) => ({
    aspecto: <span className="text-text-primary font-medium">{item.aspecto}</span>,
    compromiso: <span className="text-text-secondary">{item.compromiso}</span>,
    metrica: <span className="text-text-tertiary">{item.metrica}</span>,
  }));

  return (
    <div className="flex flex-col gap-4">
      <Reveal>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
          {label}
        </span>
      </Reveal>
      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>
    </div>
  );
}
