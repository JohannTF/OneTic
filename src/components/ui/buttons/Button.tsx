import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "hero";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-border";

const variants: Record<ButtonVariant, string> = {
  primary:
    "h-11 px-5 bg-accent-primary text-surface-base hover:bg-accent-hover border border-transparent",
  secondary:
    "h-11 px-5 bg-surface-base text-text-primary border border-border-default hover:border-border-strong",
  hero: "h-12 px-6 text-surface-base border border-accent-deep/20 bg-linear-to-br from-accent-primary to-accent-hover shadow-lg shadow-accent-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-primary/35",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {variant === "hero" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
        >
          <span className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        </span>
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
