import { Reveal } from "@/components/ui/interactions/Reveal";
import { escalas } from "@/content/activos/matriz-riesgos";

export function EscalasReferencia() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Escalas de valoración
          </span>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {escalas.map((escala) => (
          <Reveal key={escala.nombre}>
            <div className="rounded-lg border border-surface-3 overflow-hidden">
              {/* Cabecera */}
              <div className="bg-surface-2 px-4 py-3 border-b border-surface-3">
                <h3 className="font-semibold text-[13px] text-text-primary">
                  {escala.nombre}
                </h3>
              </div>

              {/* Contenido */}
              <div className="divide-y divide-surface-3">
                {escala.valores.map((item) => (
                  <div key={item.valor} className="px-4 py-3 hover:bg-surface-2 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-accent-subtle text-accent-primary font-mono text-[11px] font-semibold flex-shrink-0">
                        {item.valor}
                      </div>
                      <p className="text-[12px] text-text-secondary leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
