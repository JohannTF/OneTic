import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";
import { procedimientosporProceso } from "@/content/continuidad/plan-continuidad";

export function ProcedimientosRecuperacion() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Procedimientos de continuidad por proceso
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col gap-12">
        {procedimientosporProceso.map((proc) => {
          const rows = proc.pasos.map((paso) => ({
            paso: (
              <span className="font-mono font-semibold text-[11px] text-text-primary">
                {paso.paso}
              </span>
            ),
            accion: (
              <span className="text-[12px] text-text-secondary">{paso.accion}</span>
            ),
            responsable: (
              <span className="font-mono text-[11px] text-text-secondary">
                {paso.responsable}
              </span>
            ),
            tiempo: (
              <span className="font-mono text-[11px] font-medium text-text-primary">
                {paso.tiempoMaximo}
              </span>
            ),
          }));

          const columns = [
            { key: "paso", label: "#", className: "w-12" },
            { key: "accion", label: "Acción", className: "min-w-[280px]" },
            { key: "responsable", label: "Responsable", className: "w-40" },
            { key: "tiempo", label: "Tiempo Máximo", className: "w-32" },
          ];

          return (
            <Reveal key={proc.idProceso}>
              <div>
                <div className="mb-6 pb-6 border-b border-surface-3">
                  <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                    {proc.idProceso} — {proc.nombre}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-[12px]">
                    <div>
                      <span className="text-text-tertiary">RTO:</span>
                      <span className="ml-2 font-mono font-semibold text-accent-primary">
                        {proc.rto}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-tertiary">MTPoD:</span>
                      <span className="ml-2 font-mono font-semibold text-accent-primary">
                        {proc.mtpod}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-tertiary">MBCO mínimo:</span>
                      <span className="ml-2 font-mono text-[11px] text-text-secondary">
                        {proc.mbco}
                      </span>
                    </div>
                  </div>
                </div>
                <DataTable columns={columns} rows={rows} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
