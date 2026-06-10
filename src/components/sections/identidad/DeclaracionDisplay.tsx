import { Reveal } from "@/components/ui/interactions/Reveal";
import { ScaleIn } from "@/components/ui/interactions/ScaleIn";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import type { DeclaracionPillar } from "@/types/identidad";

type DeclaracionDisplayProps = {
  statement: string;
  pillars: DeclaracionPillar[];
  meta?: string;
};

export function DeclaracionDisplay({ statement, pillars, meta }: DeclaracionDisplayProps) {
  return (
    <div className="flex flex-col gap-16">
      {/* Statement editorial */}
      <ScaleIn>
        <div className="border-accent-primary relative rounded-2xl border-l-[3px] bg-accent-subtle/30 px-8 py-10 lg:px-12 lg:py-14">
          {meta && (
            <span className="font-mono mb-6 block text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
              {meta}
            </span>
          )}
          <blockquote>
            <p className="font-display text-text-primary text-balance text-[20px] font-semibold leading-[1.5] tracking-[-0.01em] sm:text-[22px] lg:text-[26px]">
              {statement}
            </p>
          </blockquote>
        </div>
      </ScaleIn>

      {/* Pillars */}
      <section>
        <Reveal className="mb-8">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
              Pilares
            </span>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem
              key={pillar.label}
              className="border-border-subtle bg-surface-1 rounded-2xl border p-6"
            >
              <p className="font-display text-text-primary mb-2 text-[15px] font-bold">
                {pillar.label}
              </p>
              <p className="text-text-secondary text-[13px] leading-[1.65]">
                {pillar.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
