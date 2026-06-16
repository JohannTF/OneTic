import { Reveal } from "@/components/ui/interactions/Reveal";

// ─── Dimensiones generales ────────────────────────────────────────────────────
const VW = 1320;
const VH = 552;


const LANE_H = [200, 190, 162]; // Especialista, Técnico, Cliente
const LANE_Y = [0, LANE_H[0], LANE_H[0] + LANE_H[1]];

const LABEL_W = 68;

// ─── Helpers de posición ──────────────────────────────────────────────────────
const laneMid = (lane: number) => LANE_Y[lane] + LANE_H[lane] / 2;

// ─── Nodos ────────────────────────────────────────────────────────────────────
// shape: "rect" | "diamond" | "oval"
type Shape = "rect" | "diamond" | "oval";

type Node = {
  id: string;
  label: string;
  shape: Shape;
  x: number;
  y: number;
  w: number;
  h: number;
  num?: number;
};

const N: Record<string, Node> = {
  inicio:    { id: "inicio",    label: "inicio",                          shape: "oval",    x: 90,  y: laneMid(2) - 22, w: 72,  h: 44,  },
  n1:        { id: "n1",        label: "Solicitar servicio",               shape: "rect",    x: 188, y: laneMid(2) - 30, w: 110, h: 60,  num: 1 },
  n2:        { id: "n2",        label: "Programar visita",                 shape: "rect",    x: 188, y: laneMid(1) - 30, w: 110, h: 60,  num: 2 },
  n3:        { id: "n3",        label: "Preparar insumos",                 shape: "rect",    x: 328, y: laneMid(1) - 30, w: 110, h: 60,  num: 3 },
  dTipo:     { id: "dTipo",     label: "¿Tipo de intervención?",           shape: "diamond", x: 460, y: laneMid(1) - 38, w: 120, h: 76  },
  n5:        { id: "n5",        label: "Limpieza interna",                 shape: "rect",    x: 618, y: laneMid(1) - 30, w: 110, h: 60,  num: 5 },
  dFalla:    { id: "dFalla",    label: "¿Falla detectada?",                shape: "diamond", x: 760, y: laneMid(1) - 38, w: 120, h: 76  },
  n9:        { id: "n9",        label: "Registrar evidencia en ITSM",      shape: "rect",    x: 918, y: laneMid(1) - 30, w: 128, h: 60,  num: 9 },
  n10:       { id: "n10",       label: "Generar reporte",                  shape: "rect",    x: 1078,y: laneMid(1) - 30, w: 110, h: 60,  num: 10 },
  n4:        { id: "n4",        label: "Diagnosticar falla",               shape: "rect",    x: 460, y: laneMid(0) - 10, w: 110, h: 60,  num: 4 },
  dRefacc:   { id: "dRefacc",   label: "¿Requiere refacción?",             shape: "diamond", x: 618, y: laneMid(0) - 18, w: 128, h: 76  },
  n6:        { id: "n6",        label: "Reemplazar componente",            shape: "rect",    x: 790, y: laneMid(0) - 10, w: 118, h: 60,  num: 6 },
  n7:        { id: "n7",        label: "Realizar ajuste",                  shape: "rect",    x: 790, y: laneMid(0) - 90, w: 118, h: 60,  num: 7 },
  n8:        { id: "n8",        label: "Verificar funcionamiento",         shape: "rect",    x: 948, y: laneMid(0) - 90, w: 118, h: 140, num: 8 },
  n11:       { id: "n11",       label: "Validar y firmar reporte",         shape: "rect",    x: 1078,y: laneMid(2) - 30, w: 118, h: 60,  num: 11 },
  fin:       { id: "fin",       label: "Fin",                             shape: "oval",    x: 1224,y: laneMid(2) - 22, w: 72,  h: 44  },
};

// Centro de un nodo
const cx = (n: Node) => n.x + n.w / 2;
const cy = (n: Node) => n.y + n.h / 2;
const right  = (n: Node) => n.x + n.w;
const left   = (n: Node) => n.x;
const top    = (n: Node) => n.y;
const bottom = (n: Node) => n.y + n.h;

// ─── Rendering de shapes ──────────────────────────────────────────────────────
function TaskRect({ n }: { n: Node }) {
  return (
    <>
      <rect
        x={n.x} y={n.y} width={n.w} height={n.h}
        fill="var(--surface-base)" stroke="var(--border-default)"
        strokeWidth={1.2} rx={6}
      />
      <foreignObject x={n.x + 2} y={n.y} width={n.w - 4} height={n.h}>
        <div className="flex h-full items-center justify-center px-2 text-center">
          <span className="text-[10.5px] font-medium leading-tight text-text-primary">
            {n.label}
          </span>
        </div>
      </foreignObject>
      {n.num !== undefined && (
        <>
          <circle cx={right(n) - 1} cy={n.y + 1} r={10} fill="var(--accent-primary)" />
          <text
            x={right(n) - 1} y={n.y + 5.5}
            textAnchor="middle"
            fill="white"
            fontSize={8}
            fontWeight={700}
            fontFamily="monospace"
          >
            {n.num}
          </text>
        </>
      )}
    </>
  );
}

function DiamondShape({ n }: { n: Node }) {
  const mx = cx(n), my = cy(n);
  const hw = n.w / 2, hh = n.h / 2;
  const pts = `${mx},${my - hh} ${mx + hw},${my} ${mx},${my + hh} ${mx - hw},${my}`;
  return (
    <>
      <polygon
        points={pts}
        fill="var(--accent-subtle)" stroke="var(--accent-border)"
        strokeWidth={1.2}
      />
      <foreignObject x={n.x + 8} y={n.y + 4} width={n.w - 16} height={n.h - 8}>
        <div className="flex h-full items-center justify-center text-center">
          <span className="text-[9.5px] font-semibold leading-tight text-accent-deep">
            {n.label}
          </span>
        </div>
      </foreignObject>
    </>
  );
}

function OvalShape({ n }: { n: Node }) {
  return (
    <>
      <ellipse
        cx={cx(n)} cy={cy(n)} rx={n.w / 2} ry={n.h / 2}
        fill="var(--surface-inverse)"
      />
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

// ─── Etiqueta de flecha ───────────────────────────────────────────────────────
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

// ─── Componente principal ─────────────────────────────────────────────────────
export function DiagramaMantenimiento() {
  const { inicio, n1, n2, n3, dTipo, n5, dFalla, n9, n10, n4, dRefacc, n6, n7, n8, n11, fin } = N;
  const stroke = "var(--surface-strong)";
  const sw = 1.5;
  const arrow = "url(#mant-arrow)";

  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Diagrama de proceso · Mantenimiento preventivo y correctivo
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
              aria-label="Diagrama de proceso de mantenimiento preventivo y correctivo con tres carriles: especialista de diagnóstico, técnico de soporte y cliente."
            >
              <defs>
                <marker id="mant-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
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

              {/* Lane labels — vertical text via foreignObject */}
              {[
                { label: "Especialista de diagnóstico", lane: 0 },
                { label: "Técnico de soporte",          lane: 1 },
                { label: "Cliente",                     lane: 2 },
              ].map(({ label, lane }) => (
                <foreignObject
                  key={lane}
                  x={0} y={LANE_Y[lane]}
                  width={LABEL_W} height={LANE_H[lane]}
                >
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

              {/* Label separator line */}
              <line x1={LABEL_W} y1={0} x2={LABEL_W} y2={VH} stroke="var(--border-subtle)" strokeWidth={1} />

              {/* ── Flechas ─────────────────────────────────────────── */}

              {/* inicio → n1 */}
              <line x1={right(inicio)} y1={cy(inicio)} x2={left(n1) - 2} y2={cy(n1)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n1 → n2 (sube de Cliente a Técnico) */}
              <line x1={cx(n1)} y1={top(n1)} x2={cx(n2)} y2={bottom(n2) + 2} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n2 → n3 */}
              <line x1={right(n2)} y1={cy(n2)} x2={left(n3) - 2} y2={cy(n3)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n3 → dTipo */}
              <line x1={right(n3)} y1={cy(n3)} x2={left(dTipo) - 2} y2={cy(dTipo)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dTipo → n5 (Preventiva, derecha) */}
              <line x1={right(dTipo)} y1={cy(dTipo)} x2={left(n5) - 2} y2={cy(n5)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dTipo) + left(n5)) / 2} y={cy(dTipo) - 8} label="Preventiva" />

              {/* dTipo → n4 (Correctiva, sube a Especialista) */}
              <polyline
                points={`${cx(dTipo)},${top(dTipo)} ${cx(dTipo)},${bottom(n4) + 2}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow}
              />
              <EdgeLabel x={cx(dTipo) + 28} y={(top(dTipo) + bottom(n4)) / 2} label="Correctiva" />

              {/* n5 → dFalla */}
              <line x1={right(n5)} y1={cy(n5)} x2={left(dFalla) - 2} y2={cy(dFalla)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dFalla → n9 (No, derecha) */}
              <line x1={right(dFalla)} y1={cy(dFalla)} x2={left(n9) - 2} y2={cy(n9)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dFalla) + left(n9)) / 2} y={cy(dFalla) - 8} label="No" />

              {/* dFalla → dRefacc (Sí/escalar: sube, cruza a la izquierda, entra por el punto inferior del rombo) */}
              <polyline
                points={`${cx(dFalla)},${top(dFalla)} ${cx(dFalla)},${bottom(dRefacc) + 20} ${cx(dRefacc)},${bottom(dRefacc) + 20} ${cx(dRefacc)},${bottom(dRefacc) + 2}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow}
              />
              <EdgeLabel x={(cx(dFalla) + cx(dRefacc)) / 2} y={bottom(dRefacc) + 12} label="Sí/escalar" />

              {/* n9 → n10 */}
              <line x1={right(n9)} y1={cy(n9)} x2={left(n10) - 2} y2={cy(n10)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n4 → dRefacc */}
              <line x1={right(n4)} y1={cy(n4)} x2={left(dRefacc) - 2} y2={cy(dRefacc)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* dRefacc → n6 (Sí, horizontal — mismo nivel) */}
              <line x1={right(dRefacc)} y1={cy(dRefacc)} x2={left(n6) - 2} y2={cy(n6)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />
              <EdgeLabel x={(right(dRefacc) + left(n6)) / 2} y={cy(n6) - 8} label="Sí" />

              {/* dRefacc → n7 (No, sube por el tope del rombo) */}
              <polyline
                points={`${cx(dRefacc)},${top(dRefacc)} ${cx(dRefacc)},${cy(n7)} ${left(n7) - 2},${cy(n7)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow}
              />
              <EdgeLabel x={cx(dRefacc) + 12} y={(top(dRefacc) + cy(n7)) / 2} label="No" />

              {/* n6 → n8 */}
              <line x1={right(n6)} y1={cy(n6)} x2={left(n8) - 2} y2={cy(n6)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n7 → n8 */}
              <line x1={right(n7)} y1={cy(n7)} x2={left(n8) - 2} y2={cy(n7)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* n8 → n10 (baja de Especialista a Técnico) */}
              <polyline
                points={`${cx(n8)},${bottom(n8)} ${cx(n8)},${cy(n10)} ${left(n10) - 2},${cy(n10)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow}
              />

              {/* n10 → n11 (baja de Técnico a Cliente) */}
              <polyline
                points={`${cx(n10)},${bottom(n10)} ${cx(n10)},${cy(n11)} ${left(n11) - 2},${cy(n11)}`}
                fill="none" stroke={stroke} strokeWidth={sw} markerEnd={arrow}
              />

              {/* n11 → fin */}
              <line x1={right(n11)} y1={cy(n11)} x2={left(fin) - 2} y2={cy(fin)} stroke={stroke} strokeWidth={sw} markerEnd={arrow} />

              {/* ── Nodos ─────────────────────────────────────────── */}
              {Object.values(N).map((n) => (
                <NodeShape key={n.id} n={n} />
              ))}
            </svg>
          </div>

          <figcaption className="border-border-subtle border-t px-5 py-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Proceso SS-01 — Mantenimiento preventivo y correctivo
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
