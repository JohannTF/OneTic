import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { BiaOperacionalMAN01 } from "@/components/sections/continuidad/BiaOperacionalMAN01";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "BIA Operacional — OneTic",
};

const TOC: TocItem[] = [
  { id: "man01",               label: "MAN_01 · Mantenimiento",               isGroup: true },
  { id: "man01-instruccion",   label: "Instrucción"                            },
  { id: "man01-objetivo",      label: "Objetivo"                               },
  { id: "man01-grupo",         label: "Grupo de servicios"                     },
  { id: "man01-personal",      label: "Personal / Gente"                       },
  { id: "man01-informacion",   label: "Información y Datos"                    },
  { id: "man01-edificios",     label: "Edificios y Ambiente"                   },
  { id: "man01-instalaciones", label: "Instalaciones y Equipamiento"           },
  { id: "man01-sistemas",      label: "Sistemas TIC"                           },
  { id: "man01-transporte",    label: "Transportación"                         },
  { id: "man01-finanzas",      label: "Finanzas"                               },
  { id: "man01-proveedores",   label: "Proveedores"                            },
];

export default function BiaOperacionalPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 05 · Continuidad del Negocio · ISO 22301"
        title="BIA Operacional"
        lead="Identificación de recursos críticos, dependencias operativas y prioridades de recuperación por proceso, orientada a establecer las bases de la estrategia de continuidad del servicio."
      />

      <div id="man01" className="scroll-mt-24">
        <BiaOperacionalMAN01 />
      </div>

      <SectionNav currentHref="/continuidad/bia-operacional" chapterIndex={4} />
    </ChapterLayout>
  );
}
