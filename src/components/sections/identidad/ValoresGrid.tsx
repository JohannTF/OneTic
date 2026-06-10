import { TrendingUp, Shield, Lock, Award, Heart, Eye, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import type { ValorItem } from "@/types/identidad";

const ICONS: Record<string, LucideIcon> = {
  "V-01": TrendingUp,
  "V-02": Shield,
  "V-03": Lock,
  "V-04": Award,
  "V-05": Heart,
  "V-06": Eye,
};

const ROTATIONS = ["-rotate-12", "rotate-12", "-rotate-6", "rotate-6", "-rotate-12", "rotate-6"];

type ValoresGridProps = {
  items: ValorItem[];
};

export function ValoresGrid({ items }: ValoresGridProps) {
  return (
    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((valor, index) => {
        const Icon = ICONS[valor.id] ?? TrendingUp;
        const rotation = ROTATIONS[index % ROTATIONS.length];
        return (
          <StaggerItem
            key={valor.id}
            className="group relative overflow-hidden border-border-subtle hover:border-accent-border hover:bg-surface-1 flex flex-col rounded-2xl border bg-surface-base p-7 transition-colors duration-200"
          >
            {/* Decorative background icon */}
            <Icon
              aria-hidden="true"
              className={`pointer-events-none absolute -right-4 -bottom-4 h-40 w-40 ${rotation} select-none text-surface-3 transition-colors duration-500 ease-out group-hover:text-accent-border/60`}
            />

            {/* Content stacked above decorative layer */}
            <div className="relative flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="bg-accent-subtle group-hover:bg-accent-border/30 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200">
                  <Icon className="text-accent-primary h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-[10px] font-medium text-text-disabled">
                  {valor.id}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-text-primary text-[18px] font-bold leading-tight">
                  {valor.name}
                </h3>
                <p className="text-text-secondary text-[14px] leading-[1.7]">
                  {valor.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
