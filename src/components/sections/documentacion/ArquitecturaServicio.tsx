import {
  User,
  Server,
  Boxes,
  Wrench,
  ShieldCheck,
  Database,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/interactions/Reveal";

type NodeKind = "actor" | "platform" | "service" | "data";

type Node = {
  id: string;
  label: string;
  icon: LucideIcon;
  kind: NodeKind;
  x: number;
  y: number;
  w: number;
  h: number;
};

// Diagrama lógico recreado de forma nativa (SVG + foreignObject). Layout por capas:
// actores (izq.) → plataformas (centro) → servicios externos y datos (der.).
const NODES: Node[] = [
  { id: "admin", label: "Administrador del servicio", icon: User, kind: "actor", x: 40, y: 20, w: 200, h: 60 },
  { id: "especialista", label: "Especialista en diagnóstico", icon: User, kind: "actor", x: 40, y: 110, w: 200, h: 60 },
  { id: "tecnico", label: "Técnico de soporte", icon: User, kind: "actor", x: 40, y: 200, w: 200, h: 60 },
  { id: "auxiliar", label: "Auxiliar administrativo de TI", icon: User, kind: "actor", x: 40, y: 300, w: 200, h: 60 },
  { id: "cliente", label: "Cliente", icon: User, kind: "actor", x: 40, y: 420, w: 200, h: 60 },
  { id: "itsm", label: "Plataforma ITSM", icon: Server, kind: "platform", x: 420, y: 140, w: 210, h: 70 },
  { id: "inventarios", label: "Plataforma de control de inventarios", icon: Boxes, kind: "platform", x: 420, y: 360, w: 210, h: 70 },
  { id: "correctivo", label: "Servicio de mantenimiento correctivo", icon: Wrench, kind: "service", x: 720, y: 70, w: 190, h: 64 },
  { id: "preventivo", label: "Servicio de mantenimiento preventivo", icon: ShieldCheck, kind: "service", x: 720, y: 300, w: 190, h: 64 },
  { id: "proveedores", label: "Proveedores de refacciones", icon: Truck, kind: "service", x: 940, y: 70, w: 200, h: 64 },
  { id: "baseDatosItsm", label: "Base de datos ITSM", icon: Database, kind: "data", x: 720, y: 185, w: 190, h: 64 },
  { id: "baseDatosInv", label: "Base de datos de inventario", icon: Database, kind: "data", x: 720, y: 440, w: 190, h: 64 },
];

const EDGES: [string, string][] = [
  ["admin", "itsm"],
  ["especialista", "itsm"],
  ["tecnico", "itsm"],
  ["auxiliar", "itsm"],
  ["auxiliar", "inventarios"],
  ["cliente", "inventarios"],
  ["itsm", "correctivo"],
  ["itsm", "baseDatosItsm"],
  ["itsm", "preventivo"],
  ["correctivo", "proveedores"],
  ["inventarios", "baseDatosInv"],
];

const kindClass: Record<NodeKind, { box: string; icon: string; text: string }> = {
  actor: {
    box: "border-border-default bg-surface-base",
    icon: "text-text-tertiary",
    text: "text-text-secondary",
  },
  platform: {
    box: "border-accent-border bg-accent-subtle",
    icon: "text-accent-primary",
    text: "text-accent-deep font-semibold",
  },
  service: {
    box: "border-border-subtle bg-surface-base",
    icon: "text-accent-primary",
    text: "text-text-secondary",
  },
  data: {
    box: "border-border-default bg-surface-1",
    icon: "text-text-tertiary",
    text: "text-text-secondary",
  },
};

const LEGEND: { kind: NodeKind; label: string }[] = [
  { kind: "actor", label: "Actor / rol" },
  { kind: "platform", label: "Plataforma" },
  { kind: "service", label: "Servicio externo" },
  { kind: "data", label: "Datos" },
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function ArquitecturaServicio() {
  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            Identificación de componentes · Arquitectura
          </span>
        </div>
      </Reveal>

      <Reveal>
        <figure className="border-border-subtle overflow-hidden rounded-2xl border bg-surface-base">
          <div className="overflow-x-auto bg-surface-1 p-5 sm:p-7">
            <svg
              viewBox="0 0 1160 520"
              className="h-auto w-full min-w-[860px]"
              role="img"
              aria-label="Diagrama lógico de la arquitectura del servicio: los actores operan sobre la Plataforma ITSM y la plataforma de inventarios, que se conectan con los servicios de mantenimiento, los proveedores de refacciones y la base de datos."
            >
              <defs>
                <marker
                  id="arq-arrow"
                  viewBox="0 0 10 10"
                  refX="8.5"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
                </marker>
              </defs>

              {/* Conectores */}
              <g className="text-surface-strong">
                {EDGES.map(([fromId, toId]) => {
                  const from = nodeById(fromId);
                  const to = nodeById(toId);
                  const x1 = from.x + from.w;
                  const y1 = from.y + from.h / 2;
                  const x2 = to.x;
                  const y2 = to.y + to.h / 2;
                  return (
                    <line
                      key={`${fromId}-${toId}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth={1.5}
                      markerEnd="url(#arq-arrow)"
                    />
                  );
                })}
              </g>

              {/* Nodos */}
              {NODES.map((node) => {
                const Icon = node.icon;
                const styles = kindClass[node.kind];
                return (
                  <foreignObject key={node.id} x={node.x} y={node.y} width={node.w} height={node.h}>
                    <div
                      className={`flex h-full w-full items-center gap-2.5 rounded-xl border px-3 ${styles.box}`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${styles.icon}`} aria-hidden="true" />
                      <span className={`text-[11px] leading-tight ${styles.text}`}>
                        {node.label}
                      </span>
                    </div>
                  </foreignObject>
                );
              })}
            </svg>
          </div>

          <figcaption className="border-border-subtle flex flex-col gap-3 border-t px-5 py-4">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-text-secondary">
              Arquitectura lógica del servicio
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {LEGEND.map(({ kind, label }) => (
                <span key={kind} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 rounded-[4px] border ${kindClass[kind].box}`}
                  />
                  <span className="text-text-tertiary text-[12px]">{label}</span>
                </span>
              ))}
            </div>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
