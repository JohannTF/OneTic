import { cn } from "@/lib/cn";

export type MatrixTone =
  | "responsable" // R
  | "aprobado" // A
  | "consultado" // C
  | "informado" // I
  | "primario" // P
  | "secundario"; // S

type MatrixBadgeProps = {
  tone: MatrixTone;
  children: React.ReactNode;
  className?: string;
};

const toneClass: Record<MatrixTone, string> = {
  responsable: "bg-accent-subtle text-accent-primary",
  aprobado: "bg-success-subtle text-success",
  consultado: "bg-warning-subtle text-warning",
  informado: "bg-surface-2 text-text-tertiary",
  primario: "bg-accent-subtle text-accent-primary",
  secundario: "bg-surface-2 text-text-tertiary",
};

// Insignia compacta para celdas de matrices (RACI: R/A/C/I, cascada: P/S).
export function MatrixBadge({ tone, children, className }: MatrixBadgeProps) {
  return (
    <span
      className={cn(
        "font-mono inline-flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-semibold",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
