import { Reveal } from "@/components/ui/interactions/Reveal";
import type { ServicioTipo } from "@/types/documentacion";

type InfoGeneralPanelProps = {
  empresa: string;
  departamento: string;
  nombreServicio: string;
  tipos: ServicioTipo[];
  tipoActivo: ServicioTipo;
  subservicios: string[];
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 bg-surface-base p-6">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
        {label}
      </span>
      <div className="text-text-secondary text-[14px] leading-[1.6]">{children}</div>
    </div>
  );
}

export function InfoGeneralPanel({
  empresa,
  departamento,
  nombreServicio,
  tipos,
  tipoActivo,
  subservicios,
}: InfoGeneralPanelProps) {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Información general
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-border-subtle overflow-hidden rounded-2xl border bg-border-subtle">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            <Field label="Empresa">{empresa}</Field>
            <Field label="Departamento">{departamento}</Field>

            <div className="sm:col-span-2">
              <Field label="Nombre del servicio">
                <span className="font-display text-text-primary text-[16px] font-semibold">
                  {nombreServicio}
                </span>
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Tipo de servicio">
                <div className="flex flex-wrap gap-2">
                  {tipos.map((tipo) => {
                    const active = tipo === tipoActivo;
                    return (
                      <span
                        key={tipo}
                        className={
                          active
                            ? "border-accent-border bg-accent-subtle text-accent-primary rounded-full border px-3 py-1 text-[12px] font-medium"
                            : "border-border-subtle text-text-tertiary rounded-full border px-3 py-1 text-[12px]"
                        }
                      >
                        {tipo}
                      </span>
                    );
                  })}
                </div>
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field label="Variantes o subservicios">
                <ol className="flex flex-col gap-1.5">
                  {subservicios.map((item, index) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="font-mono text-text-disabled text-[13px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </Field>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
