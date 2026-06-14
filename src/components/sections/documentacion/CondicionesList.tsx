import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";

type CondicionesListProps = {
  condiciones: string[];
};

export function CondicionesList({ condiciones }: CondicionesListProps) {
  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Condiciones generales del servicio
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-border-subtle overflow-hidden rounded-2xl border bg-border-subtle">
          <Stagger className="flex flex-col gap-px" as="ol">
            {condiciones.map((condicion, index) => (
              <StaggerItem
                key={index}
                as="li"
                className="flex items-start gap-4 bg-surface-base p-6"
              >
                <span className="bg-accent-subtle text-accent-primary font-mono flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-text-secondary text-[14px] leading-[1.65]">{condicion}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}
