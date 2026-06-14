import { cn } from "@/lib/cn";

type Align = "left" | "center" | "right";

export type DataTableColumn = {
  key: string;
  label: string;
  align?: Align;
  className?: string;
};

type DataTableProps = {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  caption?: string;
  className?: string;
};

const alignClass: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// Tabla on-brand reutilizable. El wrapper hace scroll horizontal en móvil sin
// romper el ancho de la página. Las celdas aceptan ReactNode (p. ej. MatrixBadge).
export function DataTable({ columns, rows, caption, className }: DataTableProps) {
  return (
    <div
      className={cn(
        "border-border-subtle overflow-x-auto rounded-2xl border bg-surface-base",
        className,
      )}
    >
      <table className="w-full border-collapse text-left">
        {caption && (
          <caption className="text-text-tertiary px-6 pt-5 pb-3 text-left text-[13px] leading-[1.6]">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-border-subtle border-b bg-surface-1">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  "font-mono px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary whitespace-nowrap",
                  alignClass[col.align ?? "left"],
                  col.className,
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-border-subtle divide-y">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-surface-1 transition-colors duration-150">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "text-text-secondary px-5 py-4 align-top text-[13px] leading-[1.6]",
                    alignClass[col.align ?? "left"],
                    col.className,
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
