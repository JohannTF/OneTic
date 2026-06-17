import { Reveal } from "@/components/ui/interactions/Reveal";

export function Alcance() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Alcance del servicio
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-8">
        <div className="rounded-lg border border-accent-primary/30 bg-accent-subtle p-6">
          <h3 className="text-[13px] font-semibold text-accent-primary mb-4">
            Cobertura de servicios
          </h3>
          <p className="text-[12px] text-accent-primary mb-4">
            El servicio se delimita principalmente a proporcionar mantenimiento preventivo y correctivo 
            dirigido a:
          </p>
          <ul className="space-y-2">
            {[
              "Equipos de cómputo (desktops, laptops)",
              "Impresoras y multifuncionales",
              "Proyectores y pantallas",
              "Dispositivos de oficina",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2 text-[12px] text-accent-primary/80">
                <span className="flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-accent-primary/60 mt-4 pt-4 border-t border-accent-primary/20">
            Área de cobertura: Zona metropolitana | Clientes: PyMEs
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h4 className="text-[13px] font-semibold text-text-primary mb-4">
              Incluido en el alcance
            </h4>
            <ul className="space-y-2">
              {[
                "Inventario inicial de equipos",
                "Intervenciones preventivas periódicas",
                "Limpieza y verificación de componentes",
                "Diagnóstico y reparación correctiva",
                "Gestión actualizada del inventario",
                "Reportes periódicos de estado",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-[12px] text-text-secondary">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-surface-3 p-6">
            <h4 className="text-[13px] font-semibold text-text-primary mb-4">
              Excluido del alcance
            </h4>
            <ul className="space-y-2">
              {[
                "Atención a servidores",
                "Infraestructura de red",
                "Gestión de cloud",
                "Recuperación forense",
                "Suministro masivo de consumibles",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-[12px] text-text-secondary">
                  <span className="text-orange-600 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
