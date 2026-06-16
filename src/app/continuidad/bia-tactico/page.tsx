import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { BiaTacticoMAN01 } from "@/components/sections/continuidad/BiaTacticoMAN01";
import { BiaTacticoSOP02 } from "@/components/sections/continuidad/BiaTacticoSOP02";
import { BiaTacticoINV03 } from "@/components/sections/continuidad/BiaTacticoINV03";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "BIA Táctico — OneTic",
};

const TOC: TocItem[] = [
  // MAN_01
  { id: "man01",                 label: "MAN_01 · Mantenimiento",    isGroup: true },
  { id: "man01-intro",           label: "Introducción"              },
  { id: "man01-objetivos",       label: "Objetivos"                 },
  { id: "man01-identificacion",  label: "Identificación del proceso"},
  { id: "man01-impacto",         label: "Tipo y nivel de impacto"   },
  { id: "man01-notas",           label: "Notas de interpretación"   },
  { id: "man01-mtpod",           label: "MTPoD / MAO"               },
  { id: "man01-rto",             label: "RTO"                       },
  { id: "man01-mbco",            label: "MBCO"                      },
  { id: "man01-continuidad",     label: "Continuidad operacional"   },
  { id: "man01-recibe",          label: "Procesos que recibe"       },
  { id: "man01-envia",           label: "Procesos que envía"        },
  // SOP_02
  { id: "sop02",                 label: "SOP_02 · Mesa de ayuda",   isGroup: true },
  { id: "sop02-intro",           label: "Introducción"              },
  { id: "sop02-objetivos",       label: "Objetivos"                 },
  { id: "sop02-identificacion",  label: "Identificación del proceso"},
  { id: "sop02-impacto",         label: "Tipo y nivel de impacto"   },
  { id: "sop02-notas",           label: "Notas de interpretación"   },
  { id: "sop02-mtpod",           label: "MTPoD / MAO"               },
  { id: "sop02-rto",             label: "RTO"                       },
  { id: "sop02-mbco",            label: "MBCO"                      },
  { id: "sop02-continuidad",     label: "Continuidad operacional"   },
  { id: "sop02-recibe",          label: "Procesos que recibe"       },
  { id: "sop02-envia",           label: "Procesos que envía"        },
  // INV_03
  { id: "inv03",                 label: "INV_03 · Inventario TI",   isGroup: true },
  { id: "inv03-intro",           label: "Introducción"              },
  { id: "inv03-objetivos",       label: "Objetivos"                 },
  { id: "inv03-identificacion",  label: "Identificación del proceso"},
  { id: "inv03-impacto",         label: "Tipo y nivel de impacto"   },
  { id: "inv03-notas",           label: "Notas de interpretación"   },
  { id: "inv03-mtpod",           label: "MTPoD / MAO"               },
  { id: "inv03-rto",             label: "RTO"                       },
  { id: "inv03-mbco",            label: "MBCO"                      },
  { id: "inv03-continuidad",     label: "Continuidad operacional"   },
  { id: "inv03-recibe",          label: "Procesos que recibe"       },
  { id: "inv03-envia",           label: "Procesos que envía"        },
];

export default function BiaTacticoPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 05 · Continuidad del Negocio · ISO 22301"
        title="BIA Táctico"
        lead="Análisis de impacto al negocio por proceso: evaluación de consecuencias operativas, determinación del MTPoD y RTO, y documentación de opciones de continuidad bajo la norma ISO 22301."
      />

      {/* Proceso MAN_01 */}
      <div id="man01" className="scroll-mt-24">
        <BiaTacticoMAN01 />
      </div>

      {/* Separador entre procesos */}
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-disabled">
          proceso siguiente
        </span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      {/* Proceso SOP_02 */}
      <div id="sop02" className="scroll-mt-24">
        <BiaTacticoSOP02 />
      </div>

      {/* Separador entre procesos */}
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-disabled">
          proceso siguiente
        </span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      {/* Proceso INV_03 */}
      <div id="inv03" className="scroll-mt-24">
        <BiaTacticoINV03 />
      </div>

      <SectionNav currentHref="/continuidad/bia-tactico" chapterIndex={4} />
    </ChapterLayout>
  );
}
