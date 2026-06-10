import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/interactions/Reveal";

type AlcancePanelProps = {
  incluye: string[];
  excluye: string[];
};

export function AlcancePanel({ incluye, excluye }: AlcancePanelProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Alcance del servicio
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-border-subtle overflow-hidden rounded-2xl border bg-border-subtle">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            {/* Incluye */}
            <div className="flex flex-col gap-5 bg-surface-base p-7">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success-subtle">
                  <Check className="text-success h-4 w-4" aria-hidden="true" />
                </div>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-success">
                  Incluye
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="text-success mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-text-secondary text-[14px] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluye */}
            <div className="flex flex-col gap-5 bg-surface-1 p-7">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-3">
                  <X className="text-text-tertiary h-4 w-4" aria-hidden="true" />
                </div>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                  Excluye
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {excluye.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      className="text-text-disabled mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-text-tertiary text-[14px] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
