import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import type { TimelineStep } from "@/types/identidad";

type TimelineEvolucionProps = {
  steps: TimelineStep[];
};

export function TimelineEvolucion({ steps }: TimelineEvolucionProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Evolución del soporte IT
          </span>
        </div>
      </Reveal>

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        {/* Progress line */}
        <div className="relative mb-8 flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.era} className="relative flex-1">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-3 left-1/2 h-px w-full bg-border-default"
                />
              )}
              {/* Dot */}
              <div className="relative flex flex-col items-center">
                <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-primary bg-accent-subtle">
                  <div className="h-2 w-2 rounded-full bg-accent-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Stagger className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={step.era}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
                  {step.era}
                </span>
                <h3 className="font-display text-text-primary text-[16px] font-bold leading-tight">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-[13px] leading-[1.65]">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col gap-0 lg:hidden">
        {steps.map((step, i) => (
          <div key={step.era} className="flex gap-5">
            {/* Left: dot + line */}
            <div className="flex flex-col items-center">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent-primary bg-accent-subtle">
                <div className="h-2 w-2 rounded-full bg-accent-primary" />
              </div>
              {i < steps.length - 1 && (
                <div className="my-1 w-px flex-1 bg-border-default" />
              )}
            </div>
            {/* Right: content */}
            <div className="flex flex-col gap-2 pb-8">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
                {step.era}
              </span>
              <h3 className="font-display text-text-primary text-[16px] font-bold leading-tight">
                {step.title}
              </h3>
              <p className="text-text-secondary text-[14px] leading-[1.65]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
