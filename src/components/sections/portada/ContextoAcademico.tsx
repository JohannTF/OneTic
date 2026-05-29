import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { ScaleIn } from "@/components/ui/interactions/ScaleIn";

type ContextoAcademicoProps = {
  data: {
    institucion: string;
    escuela: string;
    materia: string;
    grupo: string;
    profesora: string;
  };
  className?: string;
};

export function ContextoAcademico({ data, className }: ContextoAcademicoProps) {
  const items = [
    { label: "Materia", value: data.materia },
    { label: "Grupo", value: data.grupo },
    { label: "Profesora", value: data.profesora },
    { label: "Institución", value: `${data.escuela} · IPN` },
  ];

  return (
    <section className={className}>
      <Reveal className="mb-12">
        <SectionHeader eyebrow="Contexto académico" title="Marco institucional" />
      </Reveal>

      <ScaleIn>
        <div className="border-border-subtle from-surface-base via-surface-base to-accent-subtle/40 relative overflow-hidden rounded-2xl border bg-linear-to-br p-8 backdrop-blur-sm">
          <div
            aria-hidden="true"
            className="bg-accent-muted/20 pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl"
          />

          <dl className="relative grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="border-accent-border/60 flex flex-col gap-1.5 border-l-2 pl-4"
              >
                <Eyebrow as="dt" tone="muted">
                  {item.label}
                </Eyebrow>
                <dd className="text-text-primary text-base font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ScaleIn>
    </section>
  );
}
