import { ClipboardList, Wrench, Zap, Database, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { Reveal } from "@/components/ui/interactions/Reveal";
import type { ObjetivoItem } from "@/types/identidad";

const ICONS: Record<string, LucideIcon> = {
  "OE-01": ClipboardList,
  "OE-02": Wrench,
  "OE-03": Zap,
  "OE-04": Database,
};

const ROTATIONS = ["-rotate-12", "rotate-12", "-rotate-6", "rotate-6"];

type ObjetivosGridProps = {
  items: ObjetivoItem[];
};

export function ObjetivosGrid({ items }: ObjetivosGridProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Objetivos específicos
          </span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = ICONS[item.id] ?? ClipboardList;
          const rotation = ROTATIONS[index % ROTATIONS.length];
          return (
            <StaggerItem
              key={item.id}
              className="group relative overflow-hidden border-border-subtle bg-surface-1 hover:border-border-default hover:bg-surface-base flex flex-col rounded-2xl border p-7 transition-colors duration-200"
            >
              {/* Decorative background icon */}
              <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 ${rotation} select-none text-surface-3 transition-colors duration-500 ease-out group-hover:text-accent-border/60`}
              />

              {/* Content stacked above decorative layer */}
              <div className="relative flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div className="bg-accent-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                    <Icon className="text-accent-primary h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] font-medium text-text-disabled">
                    {item.id}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-text-primary text-[17px] font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
