import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable, type DataTableColumn } from "@/components/ui/data-display/DataTable";
import { MatrixBadge } from "@/components/ui/data-display/MatrixBadge";
import type { CascadaPrioridad, CascadaRow } from "@/types/estrategia";

const COLUMNS: DataTableColumn[] = [
  { key: "dimension", label: "Dimensión", className: "w-[1%] whitespace-nowrap" },
  { key: "meta", label: "Meta (objetivo)" },
  { key: "beneficios", label: "Beneficios", align: "center" },
  { key: "riesgos", label: "Riesgos", align: "center" },
  { key: "recursos", label: "Recursos", align: "center" },
];

function Prioridad({ value }: { value: CascadaPrioridad }) {
  if (value === "—") {
    return <span className="text-text-disabled text-[13px]">—</span>;
  }
  return (
    <MatrixBadge tone={value === "P" ? "primario" : "secundario"}>{value}</MatrixBadge>
  );
}

type CascadaTableProps = {
  label: string;
  rows: CascadaRow[];
};

export function CascadaTable({ label, rows }: CascadaTableProps) {
  const tableRows = rows.map((row) => ({
    dimension: (
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-tertiary">
        {row.dimension}
      </span>
    ),
    meta: <span className="text-text-secondary">{row.meta}</span>,
    beneficios: <Prioridad value={row.beneficios} />,
    riesgos: <Prioridad value={row.riesgos} />,
    recursos: <Prioridad value={row.recursos} />,
  }));

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            {label}
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={tableRows} />
      </Reveal>

      <Reveal className="mt-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-2">
            <MatrixBadge tone="primario">P</MatrixBadge>
            <span className="text-text-tertiary text-[12px]">Primario</span>
          </span>
          <span className="flex items-center gap-2">
            <MatrixBadge tone="secundario">S</MatrixBadge>
            <span className="text-text-tertiary text-[12px]">Secundario</span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
