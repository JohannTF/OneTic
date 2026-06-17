import { Reveal } from "@/components/ui/interactions/Reveal";
import { objetivosEspecificos } from "@/content/documentacion/caso-negocio";

export function ObjetivosServicio() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Objetivos
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-8">
        <div className="rounded-lg border border-accent-primary/30 bg-accent-subtle p-6">
          <p className="text-[13px] text-accent-primary font-semibold">
            Objetivo general
          </p>
          <p className="text-[12px] text-accent-primary mt-2">
            Garantizar el correcto funcionamiento y la disponibilidad de los diferentes equipos 
            tecnológicos mediante la implementación de servicios de soporte técnico integral.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="space-y-4">
          <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
            Objetivos específicos
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {objetivosEspecificos.map((objetivo, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-surface-3 p-4 hover:border-accent-primary/30 transition-colors"
              >
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-subtle flex-shrink-0">
                    <span className="font-mono text-[10px] font-bold text-accent-primary">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-[12px] text-text-secondary leading-relaxed">
                    {objetivo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
