import { AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { ScaleIn } from "@/components/ui/interactions/ScaleIn";
import type { BrechaItem } from "@/types/identidad";

type BrechaCalloutProps = {
  title: string;
  description: string;
  items: BrechaItem[];
  justificacion: string;
};

export function BrechaCallout({ title, description, items, justificacion }: BrechaCalloutProps) {
  return (
    <section className="flex flex-col gap-8">
      <ScaleIn>
        <div className="bg-warning-subtle border-warning/30 overflow-hidden rounded-2xl border p-8 lg:p-10">
          <div className="mb-6 flex items-start gap-4">
            <div className="bg-warning/10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
              <AlertTriangle className="text-warning h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-text-primary text-[20px] font-bold leading-tight lg:text-[22px]">
                {title}
              </h2>
              <p className="text-text-secondary max-w-[58ch] text-[15px] leading-[1.7]">
                {description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="border-warning/20 bg-surface-base/60 rounded-xl border p-5"
              >
                <p className="text-text-primary mb-1.5 text-[14px] font-semibold">{item.title}</p>
                <p className="text-text-secondary text-[13px] leading-[1.65]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScaleIn>

      <Reveal>
        <blockquote className="border-accent-primary border-l-[3px] pl-6">
          <p className="text-text-primary text-[17px] leading-[1.75] font-medium italic">
            "{justificacion}"
          </p>
        </blockquote>
      </Reveal>
    </section>
  );
}
