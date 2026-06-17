import { Reveal } from "@/components/ui/interactions/Reveal";
import { historiasEvolucion } from "@/content/documentacion/caso-negocio";

export function Antecedentes() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Antecedentes y evolución del soporte TI
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-10">
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
            En los últimos años, la tecnología de la información ha dejado de ser un recurso auxiliar 
            para convertirse en el centro operativo de casi cualquier organización. Las empresas dependen 
            en gran medida de infraestructura tecnológica para llevar a cabo sus procesos: desde la gestión 
            administrativa hasta la atención al cliente. La disponibilidad, el rendimiento y la integridad 
            de los equipos tecnológicos se vuelve cada vez más relevante.
          </p>
          <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
            En el segmento de pequeñas y medianas empresas (PyMEs), la gestión del hardware suele recaer 
            en personal no especializado, carecer de procedimientos formales o simplemente atenderse de 
            manera reactiva una vez que las fallas ya han impactado las operaciones. La mayoría de los 
            problemas no surgen por ataques sofisticados, sino por falta de control, procesos claros y 
            prevención.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8">
        {historiasEvolucion.map((historia, idx) => (
          <Reveal key={idx}>
            <div className="rounded-lg border border-surface-3 p-6 hover:border-accent-primary/30 transition-colors">
              <div className="mb-4">
                <span className="font-mono text-[10px] font-semibold text-accent-primary uppercase tracking-wider bg-accent-subtle px-2 py-1 rounded">
                  {historia.periodo}
                </span>
                <h3 className="text-[14px] font-semibold text-text-primary mt-2">
                  {historia.titulo}
                </h3>
              </div>
              <ul className="space-y-2">
                {historia.descripcion.map((punto, i) => (
                  <li key={i} className="flex gap-3 text-[12px] text-text-secondary">
                    <span className="text-accent-primary flex-shrink-0">•</span>
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="rounded-lg bg-surface-2 p-6 border border-surface-3">
          <h4 className="text-[13px] font-semibold text-text-primary mb-3">
            Brecha operativa en PyMEs
          </h4>
          <p className="text-[12px] text-text-secondary leading-relaxed mb-3">
            Mientras las grandes corporaciones han profesionalizado su gestión de TI, en el segmento de 
            las PyMEs persiste una brecha operativa significativa. Estas organizaciones dependen 
            críticamente de la tecnología pero carecen de recursos para institucionalizar prácticas 
            formales de mantenimiento.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-[12px] text-text-secondary">
              <span className="text-accent-primary flex-shrink-0">→</span>
              <span>
                <strong>Ausencia de controles sistemáticos:</strong> Sin mantenimiento preventivo que 
                mitigue riesgos físicos, se acorta la vida útil del hardware.
              </span>
            </li>
            <li className="flex gap-2 text-[12px] text-text-secondary">
              <span className="text-accent-primary flex-shrink-0">→</span>
              <span>
                <strong>Gestión de activos deficiente:</strong> La falta de inventario actualizado 
                impide planificación efectiva de mantenimientos y toma de decisiones estratégica.
              </span>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
