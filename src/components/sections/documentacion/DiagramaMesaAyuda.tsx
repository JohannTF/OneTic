import { Reveal } from "@/components/ui/interactions/Reveal";

const VW = 1500;
const VH = 570;
const LABEL_W = 68;

const LANE_H = [220, 180, 170];
const LANE_Y = [0, LANE_H[0], LANE_H[0] + LANE_H[1]];

type Shape = "rect" | "diamond" | "oval";
type Node = {
  id: string; label: string; shape: Shape;
  x: number; y: number; w: number; h: number; num?: number;
};

// laneMid(1)=310, laneMid(2)=485
const N: Record<string, Node> = {
  inicio:      { id: "inicio",      label: "inicio",                                    shape: "oval",    x: 82,   y: 463, w: 72,  h: 44 },
  n1:          { id: "n1",          label: "Reportar incidente",                         shape: "rect",    x: 182,  y: 455, w: 110, h: 60,  num: 1  },
  n2:          { id: "n2",          label: "Registrar ticket en ITSM",                  shape: "rect",    x: 182,  y: 280, w: 126, h: 60,  num: 2  },
  n3:          { id: "n3",          label: "Clasificar / Priorizar",                    shape: "rect",    x: 330,  y: 280, w: 120, h: 60,  num: 3  },
  n4:          { id: "n4",          label: "Asignar técnico",                           shape: "rect",    x: 464,  y: 280, w: 110, h: 60,  num: 4  },
  n5:          { id: "n5",          label: "Analizar y diagnosticar",                   shape: "rect",    x: 454,  y: 80,  w: 130, h: 60,  num: 5  },
  dReq:        { id: "dReq",        label: "¿Requiere refacción?",                      shape: "diamond", x: 638,  y: 72,  w: 120, h: 76          },
  n6:          { id: "n6",          label: "Realizar ajuste",                           shape: "rect",    x: 806,  y: 12,  w: 110, h: 60,  num: 6  },
  n7:          { id: "n7",          label: "Resolver por especialista",                 shape: "rect",    x: 806,  y: 80,  w: 130, h: 60,  num: 7  },
  n8:          { id: "n8",          label: "Verificar funcionamiento",                  shape: "rect",    x: 988,  y: 12,  w: 120, h: 118, num: 8  },
  n9:          { id: "n9",          label: "Documentar solución y servicio completado", shape: "rect",    x: 1130, y: 70,  w: 148, h: 80,  num: 9  },
  n10:         { id: "n10",         label: "Actualizar el ticket",                      shape: "rect",    x: 1134, y: 280, w: 140, h: 60,  num: 10 },
  n11:         { id: "n11",         label: "Recibir notificación de resolución",        shape: "rect",    x: 1130, y: 450, w: 148, h: 70,  num: 11 },
  dSat:        { id: "dSat",        label: "¿Satisfecho?",                             shape: "diamond", x: 1298, y: 447, w: 100, h: 76          },
  fin:         { id: "fin",         label: "Fin",                                       shape: "oval",    x: 1408, y: 463, w: 72,  h: 44          },
};

const cx = (n: Node) => n.x + n.w / 2;
const cy = (n: Node) => n.y + n.h / 2;
const right  = (n: Node) => n.x + n.w;
const left   = (n: Node) => n.x;
const top    = (n: Node) => n.y;
const bottom = (n: Node) => n.y + n.h;

function TaskRect({ n }: { n: Node }) {
  return (
    <>
      <rect x={n.x} y={n.y} width={n.w} height={n.h}
        fill="var(--surface-base)" stroke="var(--border-default)" strokeWidth={1.2} rx={6} />
      <foreignObject x={n.x + 2} y={n.y} width={n.w - 4} height={n.h}>
        <div className="flex h-full items-center justify-center px-2 text-center">
          <span className="text-[10.5px] font-medium leading-tight text-text-primary">{n.label}</span>
        </div>
      </foreignObject>
      {n.num !== undefined && (
        <>
          <circle cx={right(n) - 1} cy={n.y + 1} r={10} fill="var(--accent-primary)" />
          <text x={right(n) - 1} y={n.y + 5.5} textAnchor="middle"
            fill="white" fontSize={8} fontWeight={700} fontFamily="monospace">
            {n.num}
          </text>
        </>
      )}
    </>
  );
}

function DiamondShape({ n }: { n: Node }) {
  const mx = cx(n), my = cy(n), hw = n.w / 2, hh = n.h / 2;
  return (
    <>
      <polygon
        points={`${mx},${my - hh} ${mx + hw},${my} ${mx},${my + hh} ${mx - hw},${my}`}
        fill="var(--accent-subtle)" stroke="var(--accent-border)" strokeWidth={1.2} />
      <foreignObject x={n.x + 8} y={n.y + 4} width={n.w - 16} height={n.h - 8}>
        <div className="flex h-full items-center justify-center text-center">
          <span className="text-[9.5px] font-semibold leading-tight text-accent-deep">{n.label}</span>
        </div>
      </foreignObject>
    </>
  );
}

function OvalShape({ n }: { n: Node }) {
  return (
    <>
      <ellipse cx={cx(n)} cy={cy(n)} rx={n.w / 2} ry={n.h / 2} fill="var(--surface-inverse)" />
      <foreignObject x={n.x} y={n.y} width={n.w} height={n.h}>
        <div className="flex h-full items-center justify-center">
          <span className="text-[10px] font-semibold text-white">{n.label}</span>
        </div>
      </foreignObject>
    </>
  );
}

function NodeShape({ n }: { n: Node }) {
  if (n.shape === "diamond") return <DiamondShape n={n} />;
  if (n.shape === "oval")    return <OvalShape n={n} />;
  return <TaskRect n={n} />;
}

function EdgeLabel({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <foreignObject x={x - 30} y={y - 10} width={60} height={20}>
      <div className="flex h-full items-center justify-center">
        <span className="rounded bg-surface-1 px-1 font-mono text-[8.5px] font-semibold text-accent-deep">
          {label}
        </span>
      </div>
    </foreignObject>
  );
}

export function DiagramaMesaAyuda() {
  const { inicio, n1, n2, n3, n4, n5, dReq, n6, n7, n8, n9, n10, n11, dSat, fin } = N;
  const stroke = "var(--surface-strong)";
  const sw = 1.5;
  const arrow = "url(#tickets-arrow)";

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Diagrama de proceso · Mesa de ayuda y gestión de tickets
          </span>
        </div>
      </Reveal>

      <Reveal>
        <figure className="border-border-subtle overflow-hidden rounded-2xl border bg-surface-base">
          <div className="overflow-x-auto bg-surface-1 p-5 sm:p-7">
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="h-auto w-full min-w-[1100px]"
              role="img"
              aria-label="Diagrama de proceso para la gestión de mesa de ayuda y sistema de tickets, con tres carriles: técnico/especialista, auxiliar administrativo TI y cliente."
            >
              <defs>
                <marker id="tickets-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,1 L9,5 L0,9 z" fill="var(--surface-strong)" />
                </marker>
              </defs>

              {/* Swimlane backgrounds */}
              <rect x={0} y={LANE_Y[0]} width={VW} height={LANE_H[0]} fill="var(--surface-2)" />
              <rect x={0} y={LANE_Y[1]} width={VW} height={LANE_H[1]} fill="var(--surface-1)" />
              <rect x={0} y={LANE_Y[2]} width={VW} height={LANE_H[2]} fill="var(--surface-base)" />

              {/* Lane dividers */}
              <line x1={0} y1={LANE_Y[1]} x2={VW} y2={LANE_Y[1]} stroke="var(--border-subtle)" strokeWidth={1} />
              <line x1={0} y1={LANE_Y[2]} x2={VW} y2={LANE_Y[2]} stroke="var(--border-subtle)" strokeWidth={1} />

              {/* Lane labels */}
              {([
                { label: "Técnico / Especialista",      lane: 0 },
                { label: "Auxiliar administrativo TI",  lane: 1 },
                { label: "Cliente",                     lane: 2 },
              ] as const).map(({ label, lane }) => (
                <foreignObject key={lane} x={0} y={LANE_Y[lane]} width={LABEL_W} height={LANE_H[lane]}>
                  <div className="flex h-full items-center justify-center">
                    <span
                      className="font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-accent-primary"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {label}
                    </span>
                  </div>
                </foreignObject>
              ))}

              {/* Label separator */}
              <line x1={LABEL_W} y1={0} x2={LABEL_W} y2={VH} stroke="var(--border-subtle)" strokeWidth={1} />

              {/* ── Flechas ─────────────────────────────────────────── */}

              {/* inicio → n1 */}
              <line x1={right(inicio)} y1={cy(inicio)} x2={left(n1) - 2} y2={cy(n1)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n1 → n2 (sube a Auxiliar) */}
              <line x1={cx(n1)} y1={top(n1)} x2={cx(n1)} y2={bottom(n2) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n2 → n3 */}
              <line x1={right(n2)} y1={cy(n2)} x2={left(n3) - 2} y2={cy(n3)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n3 → n4 */}
              <line x1={right(n3)} y1={cy(n3)} x2={left(n4) - 2} y2={cy(n4)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n4 → n5 (sube a Técnico) */}
              <line x1={cx(n4)} y1={top(n4)} x2={cx(n5)} y2={bottom(n5) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n5 → dReq */}
              <line x1={right(n5)} y1={cy(n5)} x2={left(dReq) - 2} y2={cy(dReq)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dReq → n6 (No, sube por tope del rombo) */}
              <polyline
                points={`${cx(dReq)},${top(dReq)} ${cx(dReq)},${cy(n6)} ${left(n6) - 2},${cy(n6)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={cx(dReq) + 14} y={(top(dReq) + cy(n6)) / 2} label="No" />

              {/* dReq → n7 (Sí, horizontal) */}
              <line x1={right(dReq)} y1={cy(dReq)} x2={left(n7) - 2} y2={cy(n7)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dReq) + left(n7)) / 2} y={cy(dReq) - 8} label="Sí" />

              {/* n6 → n8 */}
              <line x1={right(n6)} y1={cy(n6)} x2={left(n8) - 2} y2={cy(n6)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n7 → n8 */}
              <line x1={right(n7)} y1={cy(n7)} x2={left(n8) - 2} y2={cy(n7)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n8 → n9 (sale por nivel de n7) */}
              <line x1={right(n8)} y1={cy(n7)} x2={left(n9) - 2} y2={cy(n9)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n9 → n10 (baja a Auxiliar) */}
              <line x1={cx(n9)} y1={bottom(n9)} x2={cx(n10)} y2={top(n10) - 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n10 → n11 (baja a Cliente) */}
              <line x1={cx(n10)} y1={bottom(n10)} x2={cx(n11)} y2={top(n11) - 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n11 → dSat */}
              <line x1={right(n11)} y1={cy(n11)} x2={left(dSat) - 2} y2={cy(dSat)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dSat → fin (Sí) */}
              <line x1={right(dSat)} y1={cy(dSat)} x2={left(fin) - 2} y2={cy(fin)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={right(dSat) + 10} y={cy(dSat) - 9} label="sí" />

              {/* dSat → n1 (No, feedback loop inferior) */}
              <polyline
                points={`${cx(dSat)},${bottom(dSat)} ${cx(dSat)},${VH - 20} ${cx(n1)},${VH - 20} ${cx(n1)},${bottom(n1) + 2}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(cx(dSat) + cx(n1)) / 2} y={VH - 28} label="No" />

              {/* ── Nodos ─────────────────────────────────────────── */}
              {Object.values(N).map((n) => (
                <NodeShape key={n.id} n={n} />
              ))}
            </svg>
          </div>

          <figcaption className="border-border-subtle border-t px-5 py-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Proceso SS-02 — Mesa de ayuda y gestión de tickets
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
