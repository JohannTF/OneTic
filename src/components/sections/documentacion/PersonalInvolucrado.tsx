import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { personalInvolucrado } from "@/content/documentacion/caso-negocio";

export function PersonalInvolucrado() {
  const rows = personalInvolucrado.map((personal) => ({
    perfil: (
      <span className="text-[12px] font-medium text-text-primary">{personal.perfil}</span>
    ),
    numero: (
      <span className="font-mono text-[11px] font-semibold text-accent-primary text-center">
        {personal.numero}
      </span>
    ),
    tipoContratacion: (
      <span className="text-[11px] text-text-secondary">{personal.tipoContratacion}</span>
    ),
    responsabilidades: (
      <span className="text-[11px] text-text-secondary">{personal.responsabilidades}</span>
    ),
  }));

  const columns = [
    { key: "perfil", label: "Perfil", className: "min-w-[200px]" },
    { key: "numero", label: "Cantidad", align: "center" as const, className: "w-16" },
    { key: "tipoContratacion", label: "Tipo de Contratación", className: "min-w-[200px]" },
    {
      key: "responsabilidades",
      label: "Responsabilidades Clave",
      className: "min-w-[320px]",
    },
  ];

  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Personal involucrado
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-6">
        <div className="rounded-lg bg-surface-2 p-4">
          <p className="text-[12px] text-text-secondary">
            El equipo está conformado por <strong>6 personas</strong> (1 coordinador, 1 especialista, 
            3 técnicos, 1 auxiliar) distribuidas en roles claros de responsabilidad y especialización:
          </p>
        </div>
      </Reveal>

      <Reveal>
        <DataTable columns={columns} rows={rows} />
      </Reveal>
    </section>
  );
}
