import { Wrench, Headphones, Package, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import type { Subservicio } from "@/types/identidad";

const ICONS: Record<string, LucideIcon> = {
  "SS-01": Wrench,
  "SS-02": Headphones,
  "SS-03": Package,
};

const ROTATIONS = ["-rotate-12", "rotate-6", "-rotate-6"];

type SubserviciosGridProps = {
  items: Subservicio[];
};

export function SubserviciosGrid({ items }: SubserviciosGridProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Líneas de servicio
          </span>
        </div>
      </Reveal>

      <Stagger className="flex flex-col gap-4">
        {items.map((item, index) => {
          const Icon = ICONS[item.id] ?? Wrench;
          const rotation = ROTATIONS[index % ROTATIONS.length];
          return (
            <StaggerItem
              key={item.id}
              className="border-border-subtle hover:border-accent-border group relative overflow-hidden rounded-2xl border bg-surface-base transition-all duration-300 hover:shadow-sm"
            >
              {/* Left accent bar */}
              <div
                aria-hidden="true"
                className="bg-accent-primary absolute top-0 left-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
              />

              {/* Decorative background icon — anchored to bottom-right corner */}
              <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute -right-8 -bottom-8 h-52 w-52 ${rotation} select-none text-surface-3 transition-colors duration-500 ease-out group-hover:text-accent-border/50`}
              />

              {/* Content stacked above decorative layer */}
              <div className="relative flex flex-col gap-6 p-7 pl-9 lg:flex-row lg:items-start lg:gap-10 lg:pl-10">
                <div className="flex items-center gap-4 lg:w-48 lg:shrink-0 lg:flex-col lg:items-start lg:gap-3">
                  <div className="bg-accent-subtle flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon className="text-accent-primary h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] font-medium text-text-disabled">
                    {item.id}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-display text-text-primary text-[20px] font-bold leading-tight tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">
                    {item.description}
                  </p>
                  <div className="border-border-subtle mt-1 border-t pt-3">
                    <p className="text-text-tertiary text-[13px] leading-[1.6]">{item.detail}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
