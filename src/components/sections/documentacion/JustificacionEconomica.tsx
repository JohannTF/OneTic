import { Reveal } from "@/components/ui/interactions/Reveal";

export function JustificacionEconomica() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Justificación económica
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-8">
        <div className="rounded-lg bg-accent-subtle border border-accent-primary p-6">
          <p className="text-[13px] text-accent-primary font-semibold mb-2">
            Viabilidad financiera
          </p>
          <p className="text-[12px] text-accent-primary">
            Se fundamenta en la <strong>reducción de costos operativos</strong> mediante el mantenimiento 
            proactivo de la infraestructura tecnológica, evitando reparaciones mayores y reemplazos 
            prematuros.
          </p>
        </div>
      </Reveal>

      <div className="space-y-6">
        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h3 className="text-[13px] font-semibold text-text-primary mb-4">
              Estudio de mercado
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Objetivo del estudio
                </p>
                <p className="text-[12px] text-text-secondary">
                  Conocer el propósito y disposición de las PyMEs para adoptar servicios gestionados de TI 
                  en lugar de soporte reactivo.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Análisis de clientes y demanda
                </p>
                <p className="text-[12px] text-text-secondary">
                  Mercado objetivo: empresas que dependen críticamente de infraestructura pero carecen de 
                  recursos internos para institucionalizar mantenimiento.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Brecha competitiva
                </p>
                <p className="text-[12px] text-text-secondary">
                  La competencia suele ser informal o reactiva, lo que eleva costos para el cliente final.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Resultados y viabilidad
                </p>
                <p className="text-[12px] text-text-secondary">
                  El mantenimiento preventivo reduce fallas críticas y prolonga vida útil del hardware, 
                  optimizando rentabilidad de organizaciones.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h3 className="text-[13px] font-semibold text-text-primary mb-4">
              Procedimiento de adquisiciones
            </h3>
            <p className="text-[12px] text-text-secondary mb-4">
              Asegura que bienes y servicios adquiridos cumplan estándares de seguridad y eficiencia:
            </p>
            <div className="space-y-2">
              {[
                { paso: "Identificación", desc: "Define necesidades basándose en inventario tecnológico y diagnósticos" },
                { paso: "Evaluación", desc: "Identifica peligros potenciales en refacciones o herramientas" },
                { paso: "Selección", desc: "Evalúa proveedores que garanticen disponibilidad y cumplimiento de SLAs" },
                { paso: "Compra", desc: "Gestiona adquisición optimizando recursos económicos y especificaciones" },
                { paso: "Control", desc: "Inspecciona insumos recibidos para confirmar funcionamiento nominal" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-[11px]">
                  <span className="font-semibold text-accent-primary flex-shrink-0">{idx + 1}.</span>
                  <div>
                    <span className="font-semibold text-text-primary">{item.paso}: </span>
                    <span className="text-text-secondary">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
