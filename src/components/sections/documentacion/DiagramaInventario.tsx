import { Reveal } from "@/components/ui/interactions/Reveal";

const VW = 1440;
const VH = 555;
const LABEL_W = 68;

// Lanes: [0] Cliente y=0–155 | [1] Admin y=155–385 | [2] Auxiliar y=385–555
const LANE_H = [155, 230, 170];
const LANE_Y = [0, LANE_H[0], LANE_H[0] + LANE_H[1]];

type Shape = "rect" | "diamond" | "oval";
type Node = {
  id: string; label: string; shape: Shape;
  x: number; y: number; w: number; h: number; num?: number;
};

// ── Posiciones ──────────────────────────────────────────────────────────────
//  Col A (cx≈870):  n5 (Aux) / dActivos (Admin inferior) / n7 (Admin superior)
//  Col B izq (cx≈1040): n8 (Admin superior) / parte izquierda de n9 (Cliente)
//  Col B der (cx≈1070): n6 (Admin inferior, ancho) — n6→n9 sale por su derecha
//  Col C (cx≈1255):     dAprueba (Cliente)
//  Col D (cx≈1378):     Fin (Cliente)
// ────────────────────────────────────────────────────────────────────────────
const N: Record<string, Node> = {
  inicio:   { id: "inicio",   label: "inicio",                                                    shape: "oval",    x: 82,   y: 248, w: 72,  h: 44 },
  n1:       { id: "n1",       label: "Solicitar y coordinar acceso",                              shape: "rect",    x: 190,  y: 240, w: 134, h: 60,  num: 1 },
  n2:       { id: "n2",       label: "Autorizar acceso",                                          shape: "rect",    x: 190,  y: 48,  w: 118, h: 60,  num: 2 },
  n3:       { id: "n3",       label: "Levantamiento físico",                                      shape: "rect",    x: 370,  y: 440, w: 130, h: 60,  num: 3 },
  n4:       { id: "n4",       label: "Captura de datos en el ITSM",                              shape: "rect",    x: 515,  y: 440, w: 140, h: 60,  num: 4 },
  dMas:     { id: "dMas",     label: "¿Más equipos por registrar?",                              shape: "diamond", x: 668,  y: 432, w: 124, h: 76 },
  n5:       { id: "n5",       label: "Actualizar ITSM",                                          shape: "rect",    x: 815,  y: 440, w: 110, h: 60,  num: 5 },
  // Col A — Admin: dActivos inferior, n7 superior (misma cx=870)
  dActivos: { id: "dActivos", label: "¿Activos en riesgo?",                                      shape: "diamond", x: 810,  y: 265, w: 120, h: 76 },
  n7:       { id: "n7",       label: "Notificar al cliente",                                     shape: "rect",    x: 811,  y: 165, w: 118, h: 60,  num: 7 },
  // Col B — Admin: n6 inferior (ancho), n8 superior
  n6:       { id: "n6",       label: "Generar reporte periódico sobre el estado de los activos", shape: "rect",    x: 960,  y: 265, w: 220, h: 76,  num: 6 },
  n8:       { id: "n8",       label: "Elaborar plan",                                            shape: "rect",    x: 980,  y: 165, w: 120, h: 60,  num: 8 },
  // Col B — Cliente: n9 (ancho, recibe flechas de n8 y n6)
  n9:       { id: "n9",       label: "Revisar y aprobar",                                        shape: "rect",    x: 940,  y: 48,  w: 250, h: 60,  num: 9 },
  // Col C / D — Cliente
  dAprueba: { id: "dAprueba", label: "¿Aprueba el plan?",                                        shape: "diamond", x: 1200, y: 40,  w: 110, h: 76 },
  fin:      { id: "fin",      label: "Fin",                                                      shape: "oval",    x: 1342, y: 55,  w: 72,  h: 44 },
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

export function DiagramaInventario() {
  const { inicio, n1, n2, n3, n4, dMas, n5, dActivos, n7, n6, n8, n9, dAprueba, fin } = N;
  const stroke = "var(--surface-strong)";
  const sw = 1.5;
  const arrow = "url(#inv-arrow)";

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Diagrama de proceso · Gestión de inventario tecnológico
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
              aria-label="Diagrama de proceso para la gestión del inventario tecnológico."
            >
              <defs>
                <marker id="inv-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,1 L9,5 L0,9 z" fill="var(--surface-strong)" />
                </marker>
              </defs>

              {/* Swimlane backgrounds */}
              <rect x={0} y={LANE_Y[0]} width={VW} height={LANE_H[0]} fill="var(--surface-base)" />
              <rect x={0} y={LANE_Y[1]} width={VW} height={LANE_H[1]} fill="var(--surface-1)" />
              <rect x={0} y={LANE_Y[2]} width={VW} height={LANE_H[2]} fill="var(--surface-2)" />

              {/* Lane dividers */}
              <line x1={0} y1={LANE_Y[1]} x2={VW} y2={LANE_Y[1]} stroke="var(--border-subtle)" strokeWidth={1} />
              <line x1={0} y1={LANE_Y[2]} x2={VW} y2={LANE_Y[2]} stroke="var(--border-subtle)" strokeWidth={1} />

              {/* Lane labels */}
              {([
                { label: "Cliente",                    lane: 0 },
                { label: "Administrador del Servicio", lane: 1 },
                { label: "Auxiliar Administrativo TI", lane: 2 },
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

              {/* n1 → n2 (sube a Cliente) */}
              <line x1={cx(n1)} y1={top(n1)} x2={cx(n2)} y2={bottom(n2) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n2 → n3 (baja a Auxiliar cruzando Admin) */}
              <polyline
                points={`${right(n2)},${cy(n2)} ${cx(n3)},${cy(n2)} ${cx(n3)},${top(n3) - 2}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n3 → n4 */}
              <line x1={right(n3)} y1={cy(n3)} x2={left(n4) - 2} y2={cy(n4)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n4 → dMas */}
              <line x1={right(n4)} y1={cy(n4)} x2={left(dMas) - 2} y2={cy(dMas)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dMas → n4 (No: sube y vuelve a la izquierda) */}
              <polyline
                points={`${cx(dMas)},${top(dMas)} ${cx(dMas)},${top(n4) - 14} ${cx(n4)},${top(n4) - 14} ${cx(n4)},${top(n4) + 2}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(cx(dMas) + cx(n4)) / 2} y={top(n4) - 22} label="No" />

              {/* dMas → n5 (Sí: derecha) */}
              <line x1={right(dMas)} y1={cy(dMas)} x2={left(n5) - 2} y2={cy(n5)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dMas) + left(n5)) / 2} y={cy(dMas) - 8} label="Sí" />

              {/* n5 → dActivos (sube recto al punto inferior del rombo) */}
              <line x1={cx(n5)} y1={top(n5)} x2={cx(dActivos)} y2={bottom(dActivos) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dActivos → n7 (Sí: sale del punto superior, sube directo a n7) */}
              <line x1={cx(dActivos)} y1={top(dActivos)} x2={cx(n7)} y2={bottom(n7) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={cx(dActivos) + 14} y={(top(dActivos) + bottom(n7)) / 2} label="Sí" />

              {/* dActivos → n6 (No: sale por la derecha del rombo) */}
              <line x1={right(dActivos)} y1={cy(dActivos)} x2={left(n6) - 2} y2={cy(n6)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dActivos) + left(n6)) / 2} y={cy(dActivos) - 10} label="No" />

              {/* n7 → n8 (horizontal) */}
              <line x1={right(n7)} y1={cy(n7)} x2={left(n8) - 2} y2={cy(n8)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n8 → n9 (sube recto a Cliente) */}
              <line x1={cx(n8)} y1={top(n8)} x2={cx(n8)} y2={bottom(n9) + 2}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n6 → n9 (sale por la derecha de n6, sube a n9 evitando n8) */}
              <polyline
                points={`${right(n6)},${top(n6)} ${right(n6)},${cy(n9)} ${right(n9) - 2},${cy(n9)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n9 → dAprueba (horizontal) */}
              <line x1={right(n9)} y1={cy(n9)} x2={left(dAprueba) - 2} y2={cy(dAprueba)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dAprueba → fin (Sí) */}
              <line x1={right(dAprueba)} y1={cy(dAprueba)} x2={left(fin) - 2} y2={cy(fin)}
                stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={right(dAprueba) + 10} y={cy(dAprueba) - 9} label="Sí" />

              {/* dAprueba → n8 (No: baja a Admin y entra por la derecha de n8) */}
              <polyline
                points={`${cx(dAprueba)},${bottom(dAprueba)} ${cx(dAprueba)},${cy(n8)} ${right(n8) + 2},${cy(n8)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={cx(dAprueba) + 14} y={(bottom(dAprueba) + cy(n8)) / 2} label="No" />

              {/* ── Nodos ─────────────────────────────────────────── */}
              {Object.values(N).map((n) => (
                <NodeShape key={n.id} n={n} />
              ))}
            </svg>
          </div>

          <figcaption className="border-border-subtle border-t px-5 py-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Proceso SS-03 — Gestión de inventario tecnológico
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
