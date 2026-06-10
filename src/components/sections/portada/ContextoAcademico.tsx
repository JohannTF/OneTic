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
        {/* gap-px + bg-border-subtle crea separadores de 1px entre celdas */}
        <div className="border-border-subtle overflow-hidden rounded-2xl border bg-border-subtle">
          <dl className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 bg-surface-1 px-8 py-7">
                <Eyebrow as="dt" tone="muted">
                  {item.label}
                </Eyebrow>
                <dd className="text-text-primary text-[15px] font-medium leading-snug">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ScaleIn>
    </section>
  );
}
