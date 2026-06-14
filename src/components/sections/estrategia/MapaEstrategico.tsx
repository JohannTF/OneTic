import { ArrowUp, ChevronUp } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import { Reveal } from "@/components/ui/interactions/Reveal";
import type { Perspectiva, PerspectivaTone } from "@/types/estrategia";

// Tinte por perspectiva — restringido a los tokens de marca para conservar la
// elegancia minimalista (3 colores semánticos + 1 neutro).
const toneClass: Record<
  PerspectivaTone,
  { bar: string; dot: string; text: string; metaBg: string; metaBorder: string; metaText: string }
> = {
  procesos: {
    bar: "bg-accent-primary",
    dot: "bg-accent-primary",
    text: "text-accent-primary",
    metaBg: "bg-accent-subtle",
    metaBorder: "border-accent-border",
    metaText: "text-accent-deep",
  },
  clientes: {
    bar: "bg-success",
    dot: "bg-success",
    text: "text-success",
    metaBg: "bg-success-subtle",
    metaBorder: "border-success/30",
    metaText: "text-success",
  },
  financiero: {
    bar: "bg-warning",
    dot: "bg-warning",
    text: "text-warning",
    metaBg: "bg-warning-subtle",
    metaBorder: "border-warning/30",
    metaText: "text-warning",
  },
  aprendizaje: {
    bar: "bg-surface-strong",
    dot: "bg-surface-strong",
    text: "text-text-tertiary",
    metaBg: "bg-surface-2",
    metaBorder: "border-border-default",
    metaText: "text-text-secondary",
  },
};

// Conector causa-efecto entre carriles: flecha hacia arriba (la dimensión inferior
// habilita a la superior, hasta la meta general).
function FlowConnector() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <ArrowUp className="text-text-disabled h-5 w-5" />
    </div>
  );
}

function ApexBand({ perspectiva }: { perspectiva: Perspectiva }) {
  return (
    <Reveal>
      <div className="border-accent-border bg-accent-subtle relative overflow-hidden rounded-2xl border-2 px-6 py-7 text-center">
        <span className="font-mono mb-2.5 block text-[10px] font-medium uppercase tracking-[0.1em] text-accent-primary">
          Meta general · {perspectiva.label}
        </span>
        <p className="font-display text-accent-deep text-balance mx-auto max-w-[44ch] text-[18px] font-bold leading-snug sm:text-[20px]">
          {perspectiva.meta}
        </p>
      </div>
    </Reveal>
  );
}

function PerspectivaBand({ perspectiva }: { perspectiva: Perspectiva }) {
  const tone = toneClass[perspectiva.tone];
  return (
    <Reveal>
      <div className="border-border-subtle relative overflow-hidden rounded-2xl border bg-surface-1 p-6 sm:p-7">
        {/* Barra de acento de la perspectiva */}
        <span aria-hidden="true" className={`absolute top-0 left-0 h-full w-1 ${tone.bar}`} />

        {/* Etiqueta de perspectiva */}
        <div className="mb-5 flex items-center gap-2.5 pl-2">
          <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} aria-hidden="true" />
          <span
            className={`font-mono text-[11px] font-medium uppercase tracking-[0.08em] ${tone.text}`}
          >
            {perspectiva.label}
          </span>
        </div>

        {/* Meta principal (resultado) de la dimensión */}
        <div
          className={`rounded-xl border ${tone.metaBorder} ${tone.metaBg} ml-2 px-5 py-3.5 text-center`}
        >
          <span className="font-mono mb-1 block text-[9px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
            Meta de la dimensión
          </span>
          <p className={`font-display text-[15px] font-bold leading-snug ${tone.metaText}`}>
            {perspectiva.meta}
          </p>
        </div>

        {/* Convergencia: las estrategias apuntan hacia la meta */}
        <div aria-hidden="true" className="flex justify-center py-2.5">
          <ArrowUp className={`h-4 w-4 ${tone.text}`} />
        </div>

        {/* Estrategias — cada una orientada hacia arriba */}
        <Stagger className="grid grid-cols-1 gap-3 pl-2 sm:grid-cols-2 lg:grid-cols-3">
          {perspectiva.estrategias.map((estrategia) => (
            <StaggerItem
              key={estrategia.id}
              className="border-border-subtle hover:border-border-default flex flex-col items-center gap-2 rounded-xl border bg-surface-base px-4 py-3.5 text-center transition-colors duration-200"
            >
              <ChevronUp className={`h-3.5 w-3.5 shrink-0 ${tone.text}`} aria-hidden="true" />
              <span className="text-text-secondary text-[13px] leading-[1.5]">
                {estrategia.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
}

type MapaEstrategicoProps = {
  label: string;
  perspectivas: Perspectiva[];
};

export function MapaEstrategico({ label, perspectivas }: MapaEstrategicoProps) {
  return (
    <section>
      <Reveal className="mb-8">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
            {label}
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {perspectivas.map((perspectiva, index) => (
          <div key={perspectiva.id}>
            {index > 0 && <FlowConnector />}
            {perspectiva.apex ? (
              <ApexBand perspectiva={perspectiva} />
            ) : (
              <PerspectivaBand perspectiva={perspectiva} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
