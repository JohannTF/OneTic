import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-subtle bg-surface-1 px-2.5 py-1 text-[12px] leading-none text-text-tertiary",
        className,
      )}
    >
      {children}
    </span>
  );
}
