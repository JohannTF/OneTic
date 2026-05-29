import { cn } from "@/lib/cn";

type EyebrowTone = "accent" | "muted";
type EyebrowSize = "xs" | "sm";
type EyebrowElement = "span" | "h2" | "h3" | "h4" | "p" | "dt" | "div";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: EyebrowTone;
  size?: EyebrowSize;
  as?: EyebrowElement;
  className?: string;
};

const toneClass: Record<EyebrowTone, string> = {
  accent: "text-accent-primary",
  muted: "text-text-tertiary",
};

const sizeClass: Record<EyebrowSize, string> = {
  xs: "text-[10px]",
  sm: "text-[11px]",
};

export function Eyebrow({
  children,
  tone = "accent",
  size = "sm",
  as: Component = "span",
  className,
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "font-mono font-medium tracking-[0.08em] uppercase",
        sizeClass[size],
        toneClass[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
