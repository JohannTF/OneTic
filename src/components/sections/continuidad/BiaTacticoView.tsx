"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { BiaTacticoMAN01 } from "@/components/sections/continuidad/BiaTacticoMAN01";
import { BiaTacticoSOP02 } from "@/components/sections/continuidad/BiaTacticoSOP02";
import { BiaTacticoINV03 } from "@/components/sections/continuidad/BiaTacticoINV03";
import { OnThisPage, type TocItem } from "@/components/sections/shared/OnThisPage";
import { SectionNav } from "@/components/sections/identidad/SectionNav";

type TabId = "man01" | "sop02" | "inv03";

const PROCESOS: { id: TabId; code: string; label: string }[] = [
  { id: "man01", code: "MAN_01", label: "Mantenimiento" },
  { id: "sop02", code: "SOP_02", label: "Mesa de ayuda" },
  { id: "inv03", code: "INV_03", label: "Inventario TI" },
];

// Los suffixes coinciden con los ids de las subsecciones dentro de cada componente BIA.
const SECCIONES: { suffix: string; label: string }[] = [
  { suffix: "intro",          label: "Introducción"               },
  { suffix: "objetivos",      label: "Objetivos"                  },
  { suffix: "identificacion", label: "Identificación del proceso" },
  { suffix: "impacto",        label: "Tipo y nivel de impacto"    },
  { suffix: "notas",          label: "Notas de interpretación"    },
  { suffix: "mtpod",          label: "MTPoD / MAO"                },
  { suffix: "rto",            label: "RTO"                        },
  { suffix: "mbco",           label: "MBCO"                       },
  { suffix: "continuidad",    label: "Continuidad operacional"    },
  { suffix: "recibe",         label: "Procesos que recibe"        },
  { suffix: "envia",          label: "Procesos que envía"         },
];

function tocForTab(tabId: TabId): TocItem[] {
  return SECCIONES.map(({ suffix, label }) => ({ id: `${tabId}-${suffix}`, label }));
}

// Altura aproximada de la barra fijada (TopBar 60px + pills ~64px). Se usa para
// reorientar el scroll al cambiar de proceso mientras la barra está fijada.
const PINNED_BAR_BOTTOM = 124;

export function BiaTacticoView() {
  const [activo, setActivo] = useState<TabId>("man01");
  const [pinned, setPinned] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Detecta cuándo la barra de pills se fija: un sentinel de altura 0 marca la
  // posición original; cuando cruza la línea del TopBar (60px) la barra está pegada.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { rootMargin: "-60px 0px 0px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function seleccionar(id: TabId) {
    if (id === activo) return;
    setActivo(id);
    // Si la barra está fijada, reorienta al inicio del nuevo panel sin desfijarla.
    // En el tope de la página no se hace scroll: el contenido se intercambia en sitio.
    if (!pinned) return;
    const el = panelRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - PINNED_BAR_BOTTOM;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  return (
    // Replica el grid de ChapterLayout para que el TOC derecho reaccione al proceso activo.
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-14 xl:gap-20">
      {/* Sin gap uniforme: el espaciado se controla por márgenes para que la barra
          de pills (sticky) sea hija directa de esta columna alta y se mantenga
          fijada a lo largo de todo el panel, no solo dentro del bloque del selector. */}
      <div className="flex min-w-0 flex-col">
        {/* Marcador de sección — se desplaza con el contenido (no se fija). */}
        <Reveal className="mb-5">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
              Análisis por proceso
            </span>
          </div>
        </Reveal>

        {/* Sentinel: marca la posición original de la barra para detectar el pin. */}
        <div ref={sentinelRef} aria-hidden className="h-0" />

        {/* Barra de pills — sticky bajo el TopBar (top-15 = 60px). Al fijarse aparece
            un fondo translúcido + hairline con transición sutil, sin salto de layout. */}
        <div
          className={cn(
            "sticky top-15 z-[5] -mx-2 mb-20 px-2 py-2.5 transition-[background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none",
            pinned
              ? "bg-surface-base/80 shadow-[0_10px_24px_-16px_rgba(15,23,42,0.15),0_1px_0_0_var(--border-subtle)] backdrop-blur-md"
              : "bg-transparent shadow-none",
          )}
        >
          <div
            role="tablist"
            aria-label="Seleccionar proceso a analizar"
            className="flex flex-wrap gap-1.5"
          >
            {PROCESOS.map((p) => {
              const active = p.id === activo;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`bia-panel-${p.id}`}
                  onClick={() => seleccionar(p.id)}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-lg px-4 py-2.5 transition-colors duration-200 ease-out",
                    active
                      ? "bg-accent-subtle ring-1 ring-inset ring-accent-primary/20"
                      : "hover:bg-surface-2",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11px] font-semibold tracking-[0.06em]",
                      active ? "text-accent-primary" : "text-text-tertiary",
                    )}
                  >
                    {p.code}
                  </span>
                  <span
                    className={cn(
                      "text-[13.5px] font-medium transition-colors duration-200",
                      active
                        ? "text-accent-deep"
                        : "text-text-secondary group-hover:text-text-primary",
                    )}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel del proceso activo. Wrapper estable (ref) + inner con key para
            forzar remount y re-animar Reveal/Stagger al cambiar de proceso. */}
        <div ref={panelRef}>
          <div
            key={activo}
            id={`bia-panel-${activo}`}
            role="tabpanel"
            aria-label={PROCESOS.find((p) => p.id === activo)?.label}
          >
            {activo === "man01" && <BiaTacticoMAN01 />}
            {activo === "sop02" && <BiaTacticoSOP02 />}
            {activo === "inv03" && <BiaTacticoINV03 />}
          </div>
        </div>

        <SectionNav currentHref="/continuidad/bia-tactico" chapterIndex={4} />
      </div>

      {/* Rail derecho: TOC del proceso activo (sticky, igual que ChapterLayout). */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 pr-1">
            <OnThisPage items={tocForTab(activo)} />
          </div>
        </div>
      </aside>
    </div>
  );
}
