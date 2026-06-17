import { Reveal } from "@/components/ui/interactions/Reveal";

export function MatrizImpacto() {
  return (
    <section>
      <Reveal className="mb-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Matriz de impacto — Ponderación
          </span>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Amplitud Geográfica */}
        <Reveal>
          <div className="rounded-lg border border-surface-3 overflow-hidden">
            <div className="bg-surface-2 px-4 py-3 border-b border-surface-3">
              <h3 className="font-semibold text-[13px] text-text-primary">
                Amplitud Geográfica
              </h3>
            </div>
            <div className="divide-y divide-surface-3">
              {[
                { valor: 1, desc: "1 zona afectada" },
                { valor: 2, desc: "Más de una zona afectada" },
                { valor: 3, desc: "Afectación de todas las zonas" },
              ].map((item) => (
                <div key={item.valor} className="px-4 py-3 hover:bg-surface-2 transition-colors">
                  <div className="flex justify-between items-start">
                    <p className="text-[12px] text-text-secondary">{item.desc}</p>
                    <span className="font-mono text-[12px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded">
                      {item.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Período de Afectación */}
        <Reveal>
          <div className="rounded-lg border border-surface-3 overflow-hidden">
            <div className="bg-surface-2 px-4 py-3 border-b border-surface-3">
              <h3 className="font-semibold text-[13px] text-text-primary">
                Período de Afectación
              </h3>
            </div>
            <div className="divide-y divide-surface-3">
              {[
                { valor: 1, desc: "24 horas o menos" },
                { valor: 2, desc: "Hasta 72 horas" },
                { valor: 3, desc: "Más de 72 horas" },
              ].map((item) => (
                <div key={item.valor} className="px-4 py-3 hover:bg-surface-2 transition-colors">
                  <div className="flex justify-between items-start">
                    <p className="text-[12px] text-text-secondary">{item.desc}</p>
                    <span className="font-mono text-[12px] font-semibold text-accent-primary bg-accent-subtle px-2 py-1 rounded">
                      {item.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Matriz Visual */}
      <Reveal className="mt-10">
        <div className="rounded-lg border border-surface-3 overflow-hidden">
          <div className="bg-surface-2 px-4 py-3 border-b border-surface-3">
            <h3 className="font-semibold text-[13px] text-text-primary">
              Matriz de Impacto (Período × Amplitud)
            </h3>
          </div>
          
          <div className="overflow-x-auto p-4">
            <table className="w-full border-collapse text-[11px]">
              <thead>
                <tr>
                  <th className="border border-surface-3 bg-surface-2 px-3 py-2 text-left font-semibold text-text-primary">
                    Período Afectación
                  </th>
                  <th className="border border-surface-3 bg-surface-2 px-3 py-2 text-center font-semibold text-text-primary">
                    Amplitud = 1
                  </th>
                  <th className="border border-surface-3 bg-surface-2 px-3 py-2 text-center font-semibold text-text-primary">
                    Amplitud = 2
                  </th>
                  <th className="border border-surface-3 bg-surface-2 px-3 py-2 text-center font-semibold text-text-primary">
                    Amplitud = 3
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { periodo: "24h o menos (1)", cells: [1, 2, 3] },
                  { periodo: "Hasta 72h (2)", cells: [2, 3, 4] },
                  { periodo: "Más de 72h (3)", cells: [3, 4, 5] },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-surface-3 px-3 py-2 font-medium text-text-primary">
                      {row.periodo}
                    </td>
                    {row.cells.map((cell, cidx) => {
                      const colorMap: Record<number, string> = {
                        1: "bg-green-50 text-green-700",
                        2: "bg-yellow-50 text-yellow-700",
                        3: "bg-orange-50 text-orange-700",
                        4: "bg-orange-100 text-orange-800",
                        5: "bg-red-50 text-red-700",
                      };
                      return (
                        <td
                          key={cidx}
                          className={`border border-surface-3 px-3 py-2 text-center font-semibold ${colorMap[cell]}`}
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-surface-3 px-4 py-3 bg-surface-2">
            <p className="text-[11px] text-text-tertiary">
              El impacto se calcula como: <strong>Período × Amplitud</strong>. 
              El resultado determina la criticidad del activo y los controles requeridos.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
