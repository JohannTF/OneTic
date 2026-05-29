import Link from "next/link";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";

type LogoProps = {
  collapsed?: boolean;
};

export function Logo({ collapsed = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-opacity duration-200 ease-out hover:opacity-85"
      aria-label="OneTic — Inicio"
    >
      <div
        className="bg-surface-inverse flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        aria-hidden="true"
      >
        <span className="font-display text-surface-base text-base font-bold">O</span>
      </div>
      {!collapsed && (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-text-primary text-base font-bold tracking-tight">
            ONETIC
          </span>
          <Eyebrow tone="muted" size="xs">
            Servicio IT
          </Eyebrow>
        </div>
      )}
    </Link>
  );
}
