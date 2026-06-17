import { Reveal } from "@/components/ui/interactions/Reveal";

export function JustificacionTecnica() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Justificación técnica
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-8">
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
            La implementación de un servicio profesional de soporte técnico y mantenimiento de 
            infraestructura tecnológica responde a la necesidad de preservar la <strong>disponibilidad, 
            estabilidad y rendimiento</strong> de los activos tecnológicos que sustentan las operaciones 
            de las organizaciones.
          </p>
          <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
            El hardware está sujeto a un desgaste físico continuo debido a ciclos térmicos, acumulación 
            de sedimentos y estrés de componentes. Factores que, de no ser atendidos y monitoreados, 
            derivan en fallas críticas, degradación acelerada o pérdida de equipos.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="rounded-lg border border-accent-primary/30 bg-accent-subtle p-6">
          <h3 className="text-[14px] font-semibold text-accent-primary mb-4">
            Estrategias de Mantenimiento Preventivo
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-white flex-shrink-0">
                <span className="font-mono text-[10px] font-bold">1</span>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-text-primary mb-1">
                  Intervenciones periódicas
                </p>
                <p className="text-[11px] text-text-secondary">
                  Mantienen condiciones óptimas de operación en diferentes equipos
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-white flex-shrink-0">
                <span className="font-mono text-[10px] font-bold">2</span>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-text-primary mb-1">
                  Actividades incluidas
                </p>
                <p className="text-[11px] text-text-secondary">
                  Limpieza de componentes, verificación del estado de sistemas, revisión de conexiones, 
                  detección temprana de anomalías
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-primary text-white flex-shrink-0">
                <span className="font-mono text-[10px] font-bold">3</span>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-text-primary mb-1">
                  Beneficios resultantes
                </p>
                <p className="text-[11px] text-text-secondary">
                  Reducción de probabilidad de fallas críticas, control preciso del estado, 
                  prolongación de vida útil
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="rounded-lg bg-surface-2 p-6">
          <p className="text-[12px] text-text-secondary">
            Esta abordaje integral busca garantizar que los dispositivos operen siempre dentro de los 
            <strong> parámetros nominales de funcionamiento</strong>, minimizando tiempos de inactividad 
            y maximizando el retorno de inversión en tecnología.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
