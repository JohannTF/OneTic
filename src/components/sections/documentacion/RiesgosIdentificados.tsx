import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { riesgosIdentificados } from "@/content/documentacion/caso-negocio";

export function RiesgosIdentificados() {
  const rows = riesgosIdentificados.map((riesgo) => ({
    id: (
      <span className="font-mono text-[11px] font-semibold text-accent-primary">
        {riesgo.id}
      </span>
    ),
    nombre: (
      <span className="text-[12px] font-medium text-text-primary">{riesgo.nombre}</span>
    ),
    amenaza: (
      <span className="text-[11px] text-text-secondary">{riesgo.amenaza}</span>
    ),
    vulnerabilidad: (
      <span className="text-[11px] text-text-secondary">{riesgo.vulnerabilidad}</span>
    ),
    relacion: (
      <span className="text-[11px] text-text-secondary">{riesgo.relacion}</span>
    ),
  }));

  const columns = [
    { key: "id", label: "ID", className: "w-12" },
    { key: "nombre", label: "Riesgo Identificado", className: "min-w-[200px]" },
    { key: "amenaza", label: "Amenaza (Quién/Qué)", className: "min-w-[180px]" },
    { key: "vulnerabilidad", label: "Vulnerabilidad (Debilidad)", className: "min-w-[180px]" },
    { key: "relacion", label: "Relación (Cómo se conectan)", className: "min-w-[220px]" },
  ];

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Riesgos clave identificados
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="text-[12px] text-text-secondary">
            Se identifican <strong>cinco riesgos principales</strong> que podrían afectar el desarrollo, 
            implementación y puesta en operación del servicio de soporte técnico IT. A continuación se detalla 
            el análisis de cada riesgo con su amenaza, vulnerabilidad y relación causal:
          </p>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={columns} rows={rows} />
      </Reveal>
    </section>
  );
}
