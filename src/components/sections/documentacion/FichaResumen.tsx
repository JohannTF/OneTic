import { Target, Users, Sparkles, CalendarClock } from "lucide-react";
import { ScaleIn } from "@/components/ui/interactions/ScaleIn";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";

type FichaResumenProps = {
  objetivo: string;
  usuarios: string[];
  beneficios: string[];
  demanda: string;
};

export function FichaResumen({ objetivo, usuarios, beneficios, demanda }: FichaResumenProps) {
  return (
    <section className="flex flex-col gap-8">
      <Reveal>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Objetivo y alcance
          </span>
        </div>
      </Reveal>

      {/* Objetivo — display editorial */}
      <ScaleIn>
        <div className="border-accent-primary rounded-2xl border-l-[3px] bg-accent-subtle/30 px-8 py-9 lg:px-10">
          <div className="mb-4 flex items-center gap-2.5">
            <Target className="text-accent-primary h-4 w-4" aria-hidden="true" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
              Objetivo del servicio
            </span>
          </div>
          <p className="font-display text-text-primary text-balance text-[18px] font-semibold leading-[1.5] tracking-[-0.01em] sm:text-[20px]">
            {objetivo}
          </p>
        </div>
      </ScaleIn>

      <Stagger className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <StaggerItem className="border-border-subtle bg-surface-1 flex flex-col gap-4 rounded-2xl border p-7">
          <div className="flex items-center gap-2.5">
            <Users className="text-accent-primary h-4 w-4" aria-hidden="true" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
              Usuarios
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {usuarios.map((item) => (
              <li key={item} className="text-text-secondary flex gap-2.5 text-[14px] leading-[1.6]">
                <span className="bg-accent-muted mt-2 h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem className="border-border-subtle bg-surface-1 flex flex-col gap-4 rounded-2xl border p-7">
          <div className="flex items-center gap-2.5">
            <Sparkles className="text-accent-primary h-4 w-4" aria-hidden="true" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
              Beneficios
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {beneficios.map((item) => (
              <li key={item} className="text-text-secondary flex gap-2.5 text-[14px] leading-[1.6]">
                <span className="bg-accent-muted mt-2 h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>

      <Reveal>
        <div className="border-border-subtle flex flex-col gap-3 rounded-2xl border bg-surface-base p-7">
          <div className="flex items-center gap-2.5">
            <CalendarClock className="text-accent-primary h-4 w-4" aria-hidden="true" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
              Demanda del servicio
            </span>
          </div>
          <p className="text-text-secondary text-[14px] leading-[1.7]">{demanda}</p>
        </div>
      </Reveal>
    </section>
  );
}
