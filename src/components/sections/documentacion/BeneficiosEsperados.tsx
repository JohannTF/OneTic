import { Reveal } from "@/components/ui/interactions/Reveal";
import { beneficiosEsperados } from "@/content/documentacion/caso-negocio";

export function BeneficiosEsperados() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Beneficios esperados
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-8">
        <p className="text-[13px] text-text-secondary">
          La implementación de este servicio de soporte técnico genera <strong>beneficios operativos 
          directos</strong> para las organizaciones que dependen del uso continuo de equipos informáticos 
          en sus actividades diarias:
        </p>
      </Reveal>

      <div className="space-y-4">
        {beneficiosEsperados.map((beneficio) => (
          <Reveal key={beneficio.numero}>
            <div className="rounded-lg border border-surface-3 p-6 hover:border-accent-primary/30 transition-colors">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle flex-shrink-0">
                  <span className="font-mono text-[12px] font-bold text-accent-primary">
                    {beneficio.numero}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-[13px] font-semibold text-text-primary mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-[12px] text-text-secondary leading-relaxed">
                    {beneficio.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
