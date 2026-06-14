import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable, type DataTableColumn } from "@/components/ui/data-display/DataTable";
import { MatrixBadge, type MatrixTone } from "@/components/ui/data-display/MatrixBadge";
import type { RaciActividad, RaciRol, RaciValor } from "@/types/documentacion";

const COLUMNS: DataTableColumn[] = [
  { key: "actividad", label: "Actividad", className: "min-w-[260px]" },
  { key: "admin", label: "Admin.", align: "center" },
  { key: "tecnico", label: "Técnico", align: "center" },
  { key: "especialista", label: "Especialista", align: "center" },
  { key: "auxiliar", label: "Auxiliar", align: "center" },
];

const VALUE_TONE: Record<RaciValor, MatrixTone> = {
  R: "responsable",
  A: "aprobado",
  C: "consultado",
  I: "informado",
};

const LEGEND: { valor: RaciValor; label: string }[] = [
  { valor: "R", label: "Responsable" },
  { valor: "A", label: "Aprobado" },
  { valor: "C", label: "Consultado" },
  { valor: "I", label: "Informado" },
];

function Cell({ value }: { value?: RaciValor }) {
  if (!value) {
    return <span className="text-text-disabled text-[13px]">—</span>;
  }
  return <MatrixBadge tone={VALUE_TONE[value]}>{value}</MatrixBadge>;
}

type RaciMatrixProps = {
  actividades: RaciActividad[];
};

export function RaciMatrix({ actividades }: RaciMatrixProps) {
  const roles: RaciRol[] = ["admin", "tecnico", "especialista", "auxiliar"];

  const rows = actividades.map((item) => {
    const row: Record<string, React.ReactNode> = {
      actividad: <span className="text-text-secondary">{item.actividad}</span>,
    };
    for (const rol of roles) {
      row[rol] = <Cell value={item.asignaciones[rol]} />;
    }
    return row;
  });

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Responsables · Matriz RACI
          </span>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={COLUMNS} rows={rows} />
      </Reveal>

      <Reveal className="mt-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LEGEND.map(({ valor, label }) => (
            <span key={valor} className="flex items-center gap-2">
              <MatrixBadge tone={VALUE_TONE[valor]}>{valor}</MatrixBadge>
              <span className="text-text-tertiary text-[12px]">{label}</span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
