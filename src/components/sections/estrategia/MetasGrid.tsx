import { Wallet, Users, Workflow, GraduationCap, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { Reveal } from "@/components/ui/interactions/Reveal";
import type { MetaDimension, MetaItem } from "@/types/estrategia";

const ICONS: Record<MetaDimension, LucideIcon> = {
  Financiera: Wallet,
  Cliente: Users,
  "Procesos Internos": Workflow,
  "Aprendizaje y Crecimiento": GraduationCap,
};

const ROTATIONS = ["-rotate-12", "rotate-12", "-rotate-6", "rotate-6"];

type MetasGridProps = {
  label: string;
  items: MetaItem[];
};

export function MetasGrid({ label, items }: MetasGridProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            {label}
          </span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = ICONS[item.dimension] ?? Workflow;
          const rotation = ROTATIONS[index % ROTATIONS.length];
          return (
            <StaggerItem
              key={item.dimension}
              className="group relative overflow-hidden border-border-subtle bg-surface-1 hover:border-border-default hover:bg-surface-base flex flex-col rounded-2xl border p-7 transition-colors duration-200"
            >
              {/* Icono decorativo de fondo */}
              <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 ${rotation} select-none text-surface-3 transition-colors duration-500 ease-out group-hover:text-accent-border/60`}
              />

              {/* Contenido por encima de la capa decorativa */}
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                    <Icon className="text-accent-primary h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                    {item.dimension}
                  </span>
                </div>

                <p className="text-text-secondary text-[14px] leading-[1.7]">{item.meta}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
