import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { glosarioTecnico } from "@/content/documentacion/caso-negocio";

export function GlosarioTecnico() {
  const rows = glosarioTecnico.map((termino) => ({
    termino: (
      <span className="text-[12px] font-semibold text-text-primary">{termino.termino}</span>
    ),
    definicion: (
      <span className="text-[11px] text-text-secondary leading-relaxed">
        {termino.definicion}
      </span>
    ),
  }));

  const columns = [
    { key: "termino", label: "Término", className: "w-40" },
    { key: "definicion", label: "Definición", className: "min-w-[500px]" },
  ];

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Glosario técnico
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <p className="text-[12px] text-text-secondary">
          Definiciones de términos técnicos y conceptos clave utilizados en este documento:
        </p>
      </Reveal>

      <Reveal>
        <DataTable columns={columns} rows={rows} />
      </Reveal>
    </section>
  );
}
