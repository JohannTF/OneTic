import { Reveal } from "@/components/ui/interactions/Reveal";

const SKEW = 14;
const VW = 1110;
const VH = 430;
const HEADER_H = 40;
const ROW_H = 116;
const ROW_GAP = 9;

const C = {
  req:  { x: 8,   w: 156 },
  ins:  { x: 204, w: 184 },
  pro:  { x: 434, w: 170 },
  prod: { x: 652, w: 184 },
  cli:  { x: 882, w: 220 },
} as const;

// Midpoint of the parallelogram's left/right edge at row center height
const PRO_LEFT_MID  = C.pro.x + SKEW / 2;
const PRO_RIGHT_MID = C.pro.x + C.pro.w + SKEW / 2;

const rowY = (i: number) => HEADER_H + 12 + i * (ROW_H + ROW_GAP);

const HEADERS = [
  { label: "Requisitos de cliente", col: C.req },
  { label: "Insumos",               col: C.ins },
  { label: "Procesos Clave",        col: C.pro  },
  { label: "Productos",             col: C.prod },
  { label: "Clientes",              col: C.cli  },
] as const;

const ROWS = [
  {
    req:  { tag: "Requisito 1", name: "Mantenimiento de equipos" },
    ins:  "Cronograma de mantenimiento anual, reportes de estado del hardware y alertas automáticas de sistemas de monitoreo.",
    pro:  "Ejecución de Mantenimiento (Preventivo / Correctivo)",
    prod: ["Reporte técnico de reparación y equipo restaurado.", "Reporte de intervención.", "Ticket cerrado."],
    cli:  ["Empresa cliente.", "Usuarios finales.", "Administrador del servicio."],
  },
  {
    req:  { tag: "Requisito 2", name: "Soporte – tickets y mesa de ayuda" },
    ins:  "Tickets abiertos por usuarios, descripción del error, evidencia fotográfica o capturas de pantalla y el equipo físico dañado.",
    pro:  "Gestión de Mesa de Ayuda y Tickets",
    prod: ["Ticket resuelto y documentado.", "Reporte de incidentes mensuales.", "Métricas de tiempo de respuesta."],
    cli:  ["Usuario final.", "Gerencia de operaciones.", "Administrador del servicio."],
  },
  {
    req:  { tag: "Requisito 3", name: "Gestión de inventario tecnológico" },
    ins:  "Solicitudes de nuevos perfiles de usuario, presupuesto aprobado y órdenes de compra de componentes.",
    pro:  "Gestión de Inventario y Configuración",
    prod: ["Inventario actualizado.", "Reporte de estado.", "Plan de renovación tecnológica."],
    cli:  ["Empresa cliente.", "Administrador del servicio."],
  },
];

export function DiagramaPrimerNivel() {
  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Flujo del servicio · Diagrama de primer nivel
          </span>
        </div>
      </Reveal>

      <Reveal>
        <figure className="border-border-subtle overflow-hidden rounded-2xl border bg-surface-base">
          <div className="overflow-x-auto bg-surface-1 p-5 sm:p-7">
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="h-auto w-full min-w-[1000px]"
              role="img"
              aria-label="Diagrama de primer nivel: flujo desde los requisitos del cliente a través de insumos, procesos clave y productos hacia los clientes finales."
            >
              <defs>
                <marker
                  id="sipoc-arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M0,1 L9,5 L0,9 z" fill="var(--surface-strong)" />
                </marker>
              </defs>

              {/* Column headers */}
              {HEADERS.map(({ label, col }) => (
                <g key={label}>
                  <rect
                    x={col.x} y={0}
                    width={col.w} height={HEADER_H}
                    fill="var(--surface-2)" rx={5}
                  />
                  <foreignObject x={col.x} y={0} width={col.w} height={HEADER_H}>
                    <div className="flex h-full items-center justify-center px-2">
                      <span className="text-center font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.07em] text-accent-deep">
                        {label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}

              {/* Rows */}
              {ROWS.map((row, i) => {
                const y = rowY(i);
                const arrowY = y + ROW_H / 2;

                return (
                  <g key={i}>
                    {/* Arrows */}
                    <line
                      x1={C.req.x + C.req.w} y1={arrowY}
                      x2={C.ins.x - 2}        y2={arrowY}
                      stroke="var(--surface-strong)" strokeWidth={1.5}
                      markerEnd="url(#sipoc-arrow)"
                    />
                    <line
                      x1={C.ins.x + C.ins.w} y1={arrowY}
                      x2={PRO_LEFT_MID - 2}   y2={arrowY}
                      stroke="var(--surface-strong)" strokeWidth={1.5}
                      markerEnd="url(#sipoc-arrow)"
                    />
                    <line
                      x1={PRO_RIGHT_MID}      y1={arrowY}
                      x2={C.prod.x - 2}       y2={arrowY}
                      stroke="var(--surface-strong)" strokeWidth={1.5}
                      markerEnd="url(#sipoc-arrow)"
                    />
                    <line
                      x1={C.prod.x + C.prod.w} y1={arrowY}
                      x2={C.cli.x - 2}          y2={arrowY}
                      stroke="var(--surface-strong)" strokeWidth={1.5}
                      markerEnd="url(#sipoc-arrow)"
                    />

                    {/* Requisito */}
                    <rect
                      x={C.req.x} y={y} width={C.req.w} height={ROW_H}
                      fill="var(--surface-base)" stroke="var(--border-default)"
                      strokeWidth={1} rx={6}
                    />
                    <foreignObject x={C.req.x} y={y} width={C.req.w} height={ROW_H}>
                      <div className="flex h-full flex-col items-center justify-center gap-1 px-3 text-center">
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.06em] text-accent-primary">
                          {row.req.tag}
                        </span>
                        <span className="text-[11px] font-medium leading-tight text-text-primary">
                          {row.req.name}
                        </span>
                      </div>
                    </foreignObject>

                    {/* Insumo */}
                    <rect
                      x={C.ins.x} y={y} width={C.ins.w} height={ROW_H}
                      fill="var(--surface-1)" stroke="var(--border-subtle)"
                      strokeWidth={1} rx={6}
                    />
                    <foreignObject x={C.ins.x} y={y} width={C.ins.w} height={ROW_H}>
                      <div className="flex h-full items-center px-3">
                        <span className="text-[10.5px] leading-relaxed text-text-secondary">
                          {row.ins}
                        </span>
                      </div>
                    </foreignObject>

                    {/* Proceso Clave — paralelogramo */}
                    <polygon
                      points={`
                        ${C.pro.x + SKEW},${y}
                        ${C.pro.x + C.pro.w + SKEW},${y}
                        ${C.pro.x + C.pro.w},${y + ROW_H}
                        ${C.pro.x},${y + ROW_H}
                      `}
                      fill="var(--accent-subtle)"
                      stroke="var(--accent-border)"
                      strokeWidth={1}
                    />
                    <foreignObject x={C.pro.x + SKEW / 2} y={y} width={C.pro.w} height={ROW_H}>
                      <div className="flex h-full items-center justify-center px-3 text-center">
                        <span className="text-[11px] font-semibold leading-snug text-accent-deep">
                          {row.pro}
                        </span>
                      </div>
                    </foreignObject>

                    {/* Productos */}
                    <rect
                      x={C.prod.x} y={y} width={C.prod.w} height={ROW_H}
                      fill="var(--surface-1)" stroke="var(--border-subtle)"
                      strokeWidth={1} rx={6}
                    />
                    <foreignObject x={C.prod.x} y={y} width={C.prod.w} height={ROW_H}>
                      <div className="flex h-full flex-col justify-center gap-[3px] px-3">
                        {row.prod.map((p, j) => (
                          <span key={j} className="text-[10.5px] leading-snug text-text-secondary">
                            {p}
                          </span>
                        ))}
                      </div>
                    </foreignObject>

                    {/* Clientes */}
                    <rect
                      x={C.cli.x} y={y} width={C.cli.w} height={ROW_H}
                      fill="var(--surface-base)" stroke="var(--border-default)"
                      strokeWidth={1} rx={6}
                    />
                    <foreignObject x={C.cli.x} y={y} width={C.cli.w} height={ROW_H}>
                      <div className="flex h-full flex-col justify-center gap-[3px] px-3">
                        {row.cli.map((c, j) => (
                          <span key={j} className="text-[10.5px] leading-snug text-text-secondary">
                            {c}
                          </span>
                        ))}
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          <figcaption className="border-border-subtle border-t px-5 py-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Diagrama de primer nivel — flujo SIPOC del servicio OneTic
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
