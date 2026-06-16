"use client";

import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";

type ImpactLevel = "N" | "B" | "M" | "A";

const IMPACT_STYLE: Record<ImpactLevel, string> = {
  N: "bg-surface-2 text-text-disabled",
  B: "bg-success-subtle text-success",
  M: "bg-warning-subtle text-warning",
  A: "bg-danger-subtle text-danger",
};

function ImpactBadge({ level }: { level: ImpactLevel }) {
  return (
    <span
      className={`font-mono inline-flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-semibold ${IMPACT_STYLE[level]}`}
    >
      {level}
    </span>
  );
}

function PeriodScale({ periodos, selected }: { periodos: string[]; selected: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {periodos.map((p, i) => (
        <span
          key={i}
          className={`font-mono rounded-lg px-3 py-1.5 text-[11px] font-semibold ${
            i === selected
              ? "bg-accent-primary text-white"
              : "bg-surface-2 text-text-tertiary"
          }`}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <Reveal className="mb-8">
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 shrink-0 bg-accent-primary" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent-primary">
          {label}
        </span>
      </div>
    </Reveal>
  );
}

// ── Datos ─────────────────────────────────────────────────────────
const PERIODOS_IMPACTO = ["< 2 hrs", "2–4 hrs", "4–8 hrs", "8–24 hrs", "1–2 días", "> 2 días"];

const IMPACTOS: { tipo: string; niveles: ImpactLevel[] }[] = [
  { tipo: "Incumplimiento de SLA con el cliente",                    niveles: ["N","B","A","A","A","A"] },
  { tipo: "Pérdida de trazabilidad de tickets",                      niveles: ["M","A","A","A","A","A"] },
  { tipo: "Afectación en la atención de incidentes activos",         niveles: ["B","M","A","A","A","A"] },
  { tipo: "Incapacidad de reporte por parte del usuario",            niveles: ["B","M","A","A","A","A"] },
  { tipo: "Daño a la reputación / imagen del servicio",              niveles: ["N","B","M","A","A","A"] },
  { tipo: "Pérdida de productividad del equipo técnico",             niveles: ["B","M","A","A","A","A"] },
  { tipo: "Pérdida de información histórica (historial de tickets)", niveles: ["N","N","B","M","A","A"] },
  { tipo: "Pérdida económica (penalizaciones contractuales)",        niveles: ["N","N","B","M","A","A"] },
];

const NOTAS_IMPACTO = [
  "El incumplimiento de SLA escala a Alto a las 4 horas porque ese es el tiempo máximo de respuesta remota comprometido contractualmente. Entre las 2 y 4 horas el impacto es Bajo porque aún existe margen para atender dentro del SLA si el proceso se restablece.",
  "La pérdida de trazabilidad de tickets es el impacto más inmediato: sin la plataforma ITSM, el equipo pierde visibilidad del estado de todos los incidentes activos desde las primeras horas, sin posibilidad de priorizar ni asignar correctamente.",
  "La incapacidad de reporte del usuario se vuelve Alta a las 4 horas, punto en el que el canal oficial lleva suficiente tiempo inoperante como para que los clientes no puedan gestionar ningún incidente nuevo por ningún medio formal.",
  "La pérdida de información histórica escala más lentamente porque los respaldos diarios del ITSM (retención 30 días, según OLA) mitigan la pérdida de datos en interrupciones cortas; el riesgo de pérdida real de registros se vuelve significativo a partir de las 8–24 horas sin recuperación.",
  "La pérdida económica por penalizaciones contractuales se materializa formalmente a partir de las 8 horas, cuando el incumplimiento de SLA es ya irrecuperable para varios tickets activos.",
];

const MTPOD_PERIODOS = ["< 2 hrs", "< 4 hrs", "< 8 hrs", "< 12 hrs", "< 24 hrs", "< 2 días", "> 2 días"];
const MTPOD_SELECTED = 1;
const MTPOD_CONSIDERANDO = [
  "El SLA de respuesta remota exige atención en máximo 4 horas hábiles.",
  "La pérdida de trazabilidad de tickets escala a nivel Alto a partir de las 2 horas.",
  "La afectación al servicio del cliente es Media desde las 2 horas y Alta a las 4 horas.",
];
const MTPOD_JUSTIFICACION =
  "La interrupción de SOP_02 por más de 4 horas hábiles implica incumplimiento directo del SLA acordado con el cliente (respuesta remota máx. 4 hrs), afectación Alta en la continuidad del servicio y daño reputacional de nivel Medio en ascenso. Este umbral se considera el límite antes del cual los impactos adversos se vuelven inaceptables para la organización.";

const RTO_PERIODOS = ["< 30 min", "< 1 hr", "< 2 hrs", "< 4 hrs", "< 8 hrs", "< 12 hrs", "< 24 hrs"];
const RTO_SELECTED = 2;
const RTO_JUSTIFICACION =
  "El RTO de 2 horas hábiles permite que el proceso se restablezca con suficiente margen antes de que expire el MTPoD de 4 horas. Este tiempo contempla: diagnóstico del fallo (30 min), activación del canal alternativo de registro (30 min) y reanudación de la atención de tickets pendientes (60 min). El OLA establece un MTTR máximo de 4 hrs para la plataforma ITSM, por lo que el RTO de 2 hrs representa un objetivo más exigente y adecuado a la criticidad del proceso.";

const MBCO = [
  {
    capacidad: "Canal de reporte activo",
    descripcion: "Al menos un medio alternativo (correo electrónico) debe estar disponible para que los usuarios puedan reportar incidentes durante la indisponibilidad de la plataforma ITSM.",
  },
  {
    capacidad: "Clasificación y priorización operativa",
    descripcion: "El auxiliar administrativo TI debe poder clasificar y priorizar manualmente los incidentes recibidos, garantizando atención prioritaria a los tickets de impacto Alto.",
  },
  {
    capacidad: "Atención a incidentes críticos",
    descripcion: "Como mínimo, los incidentes clasificados como prioridad Alta deben recibir respuesta dentro del SLA (4 hrs hábiles), incluso en modo degradado.",
  },
  {
    capacidad: "Registro retroactivo",
    descripcion: "Una vez restablecida la plataforma ITSM, todos los incidentes atendidos en modo alterno deben registrarse formalmente para mantener la trazabilidad.",
  },
  {
    capacidad: "Capacidad mínima de personal",
    descripcion: "Al menos 1 auxiliar administrativo TI y 1 técnico de soporte deben estar operativos para sostener el proceso en nivel mínimo.",
  },
];

const CONTINUIDAD = [
  {
    opcion: "Registro manual por correo electrónico",
    descripcion: "Uso del correo institucional (auxiliar@onetic.com) como canal alterno para recibir y registrar reportes de incidentes cuando la plataforma ITSM no está disponible.",
    aplicabilidad: "Ante caída del sistema ITSM (Riesgo R3)",
  },
  {
    opcion: "Bitácora física de tickets",
    descripcion: "Registro temporal en formato físico (papel o hoja de cálculo local) de los incidentes recibidos, para su posterior carga en ITSM una vez restablecido el servicio.",
    aplicabilidad: "Ante caída del sistema ITSM o fallo de conectividad",
  },
  {
    opcion: "Comunicación directa por teléfono",
    descripcion: "Los usuarios pueden contactar directamente al auxiliar (ext. 5545845903) o al administrador del servicio (ext. 5545845900) para reportar incidentes durante la indisponibilidad del canal oficial.",
    aplicabilidad: "Ante indisponibilidad del canal de comunicación (Activo A-006)",
  },
  {
    opcion: "Escalación directa al especialista",
    descripcion: "En ausencia del técnico de soporte asignado, el administrador puede redirigir tickets de alta prioridad directamente al especialista en diagnóstico (Félix Barrera, ext. 5545845902).",
    aplicabilidad: "Ante indisponibilidad de personal técnico (Riesgo R4)",
  },
  {
    opcion: "Atención remota sin plataforma",
    descripcion: "El técnico puede brindar soporte remoto básico (diagnóstico telefónico o por correo) sin requerir acceso al ITSM, registrando la intervención retroactivamente.",
    aplicabilidad: "Ante fallas parciales del sistema ITSM",
  },
];

const RECIBE = [
  {
    id: "MAN_01",
    descripcion: "Mantenimiento preventivo y correctivo de equipos — suministra información sobre fallas detectadas durante intervenciones preventivas que generan nuevos tickets.",
  },
  {
    id: "INV_03 – 3A5",
    descripcion: "Actualización del inventario post-intervención — provee datos del estado actual de los activos para la clasificación y diagnóstico de tickets.",
  },
  {
    id: "A-001",
    descripcion: "Equipo de cómputo — es el objeto de intervención reportado en los tickets de incidente.",
  },
  {
    id: "A-006",
    descripcion: "Canal de comunicación con el cliente — medio por el cual los usuarios ingresan los reportes de incidente al proceso.",
  },
];

const ENVIA = [
  {
    id: "MAN_01 – 1A9",
    descripcion: "Registro de la intervención en ITSM — los tickets resueltos que implican mantenimiento correctivo alimentan el historial de intervenciones de MAN_01.",
  },
  {
    id: "INV_03 – 3A5",
    descripcion: "Actualización del inventario post-intervención — el cierre de tickets con reemplazo de componentes o cambio de estado del equipo actualiza la base de datos de inventario.",
  },
  {
    id: "A-004",
    descripcion: "Plataforma ITSM — recibe el registro completo del ciclo de vida de cada ticket generado en SOP_02.",
  },
  {
    id: "A-005",
    descripcion: "Historial de tickets e incidencias — se nutre directamente de cada ticket cerrado, conformando el repositorio histórico del servicio.",
  },
  {
    id: "A-007",
    descripcion: "Base de datos de inventario tecnológico — se actualiza cuando la resolución de un ticket implica cambios físicos o de estado en un activo registrado.",
  },
];

// ── Componente ────────────────────────────────────────────────────
export function BiaTacticoSOP02() {
  return (
    <article className="flex flex-col gap-20">

      {/* Cabecera del proceso */}
      <Reveal>
        <div className="flex flex-col gap-1.5">
          <span className="font-mono inline-flex items-center rounded-md bg-accent-subtle px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent-primary ring-1 ring-inset ring-accent-primary/25">
            SOP_02
          </span>
          <h2 className="text-[22px] font-semibold leading-snug text-text-primary">
            Gestión de mesa de ayuda y sistema de tickets
          </h2>
        </div>
      </Reveal>

      {/* ── § 1 Introducción ─────────────────────────────────────── */}
      <section id="sop02-intro" className="scroll-mt-24">
        <SectionEyebrow label="Introducción" />
        <Reveal>
          <div className="flex max-w-[72ch] flex-col gap-4">
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              El presente Análisis de Impacto al Negocio (BIA) evalúa las consecuencias operativas
              que derivarían de una interrupción total o parcial del proceso SOP_02: Gestión de
              mesa de ayuda y sistema de tickets, en el contexto del servicio de soporte técnico IT
              que OneTic provee a PyMEs del área metropolitana.
            </p>
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              Este proceso constituye el canal principal mediante el cual los usuarios finales de
              las organizaciones cliente reportan incidentes técnicos y reciben atención
              estructurada. Una interrupción en SOP_02 no solo afecta la capacidad de atención de
              OneTic, sino que impacta directamente la continuidad operativa de los clientes,
              quienes dependen de este canal para mantener en funcionamiento sus activos
              tecnológicos.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── § 2 Objetivos ────────────────────────────────────────── */}
      <section id="sop02-objetivos" className="scroll-mt-24">
        <SectionEyebrow label="Objetivos" />
        <Reveal>
          <ol className="flex max-w-[72ch] flex-col gap-3">
            {[
              "Identificar el impacto potencial de una interrupción del proceso SOP_02 sobre las dimensiones económica, reputacional, operativa y regulatoria del servicio.",
              "Determinar el Máximo Periodo de Interrupción Tolerable (MTPoD) y el Tiempo de Recuperación Objetivo (RTO) del proceso.",
              "Establecer el Objetivo Mínimo de Continuidad del Negocio (MBCO) que garantice la prestación del servicio en condiciones degradadas.",
              "Identificar las interdependencias del proceso con otros procesos y activos de información.",
              "Documentar las opciones de continuidad operacional disponibles ante un escenario de interrupción.",
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-mono mt-[3px] shrink-0 text-[10px] text-accent-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[1.65] text-text-secondary">{obj}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* ── § 3.1 Identificación del proceso ────────────────────── */}
      <section id="sop02-identificacion" className="scroll-mt-24">
        <SectionEyebrow label="Identificación del proceso" />
        <Reveal>
          <DataTable
            columns={[
              { key: "campo", label: "Campo", className: "min-w-[200px]" },
              { key: "valor", label: "Valor" },
            ]}
            rows={[
              { campo: "ID del proceso",                 valor: "SOP_02" },
              { campo: "Nombre del proceso",             valor: "Gestión de mesa de ayuda y sistema de tickets" },
              { campo: "Grupo de productos y servicios", valor: "Soporte técnico IT: Atención y resolución de incidentes mediante plataforma ITSM" },
              { campo: "Área responsable",               valor: "Departamento de TI - OneTic" },
              { campo: "Función responsable",            valor: "Administrador del servicio / Auxiliar administrativo TI" },
              { campo: "Nombre del responsable",         valor: "Jesús Ochoa (Administrador del servicio) · Daniel Salgado (Auxiliar administrativo TI)" },
              { campo: "Fecha de llenado",               valor: "Junio 2026" },
            ].map(({ campo, valor }) => ({
              campo: <span className="font-medium text-text-primary">{campo}</span>,
              valor: <span className="text-text-secondary">{valor}</span>,
            }))}
          />
        </Reveal>
      </section>

      {/* ── § 3.2 Tipo y nivel de impacto ────────────────────────── */}
      <section id="sop02-impacto" className="scroll-mt-24">
        <SectionEyebrow label="Tipo y nivel de impacto al negocio" />
        <Reveal>
          <div className="mb-4 flex flex-wrap gap-4">
            {(["N", "B", "M", "A"] as ImpactLevel[]).map((l) => (
              <div key={l} className="flex items-center gap-2">
                <ImpactBadge level={l} />
                <span className="text-[12px] text-text-tertiary">
                  {l === "N" ? "No aplica / nulo" : l === "B" ? "Bajo" : l === "M" ? "Medio" : "Alto"}
                </span>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-surface-base">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-1">
                  <th className="font-mono min-w-[220px] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                    Tipo de impacto
                  </th>
                  {PERIODOS_IMPACTO.map((p) => (
                    <th
                      key={p}
                      className="font-mono whitespace-nowrap px-4 py-3.5 text-center text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary"
                    >
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {IMPACTOS.map(({ tipo, niveles }) => (
                  <tr key={tipo} className="transition-colors duration-150 hover:bg-surface-1">
                    <td className="px-5 py-3.5 text-[13px] leading-snug text-text-secondary">
                      {tipo}
                    </td>
                    {niveles.map((n, i) => (
                      <td key={i} className="px-4 py-3.5 text-center">
                        <ImpactBadge level={n} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── § 3.2 Notas de interpretación ───────────────────────── */}
      <section id="sop02-notas" className="scroll-mt-24">
        <SectionEyebrow label="Notas de interpretación" />
        <Reveal>
          <ul className="flex max-w-[72ch] flex-col gap-3">
            {NOTAS_IMPACTO.map((nota, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[13.5px] leading-[1.65] text-text-secondary"
              >
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary/40" />
                {nota}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── § 3.3 MTPoD / MAO ───────────────────────────────────── */}
      <section id="sop02-mtpod" className="scroll-mt-24">
        <SectionEyebrow label="Identificación del máximo periodo de interrupción tolerable (MTPoD / MAO)" />
        <Reveal>
          <div className="rounded-2xl border border-border-subtle bg-surface-base p-6 sm:p-8">
            <ul className="mb-5 flex flex-col gap-1.5">
              {MTPOD_CONSIDERANDO.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-text-tertiary">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-text-disabled" />
                  {c}
                </li>
              ))}
            </ul>
            <PeriodScale periodos={MTPOD_PERIODOS} selected={MTPOD_SELECTED} />
            <p className="mt-5 max-w-[66ch] text-[14px] leading-[1.7] text-text-secondary">
              {MTPOD_JUSTIFICACION}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── § 3.4 RTO ───────────────────────────────────────────── */}
      <section id="sop02-rto" className="scroll-mt-24">
        <SectionEyebrow label="Identificación del tiempo de recuperación objetivo (RTO)" />
        <Reveal>
          <div className="rounded-2xl border border-border-subtle bg-surface-base p-6 sm:p-8">
            <PeriodScale periodos={RTO_PERIODOS} selected={RTO_SELECTED} />
            <p className="mt-5 max-w-[66ch] text-[14px] leading-[1.7] text-text-secondary">
              {RTO_JUSTIFICACION}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── § 3.5 MBCO ──────────────────────────────────────────── */}
      <section id="sop02-mbco" className="scroll-mt-24">
        <SectionEyebrow label="Objetivo de continuidad del negocio mínimo (MBCO)" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle">
            <div className="flex flex-col gap-px">
              {MBCO.map(({ capacidad, descripcion }, i) => (
                <div key={i} className="flex items-start gap-6 bg-surface-base px-6 py-5">
                  <span className="min-w-[190px] max-w-[210px] shrink-0 text-[13px] font-semibold leading-snug text-text-primary">
                    {capacidad}
                  </span>
                  <p className="text-[13px] leading-[1.65] text-text-secondary">{descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── § 3.7 Continuidad operacional ───────────────────────── */}
      <section id="sop02-continuidad" className="scroll-mt-24">
        <SectionEyebrow label="Opciones actuales de continuidad operacional" />
        <Reveal>
          <DataTable
            columns={[
              { key: "opcion",        label: "Opción",        className: "min-w-[200px]" },
              { key: "descripcion",   label: "Descripción",   className: "min-w-[260px]" },
              { key: "aplicabilidad", label: "Aplicabilidad", className: "min-w-[200px]" },
            ]}
            rows={CONTINUIDAD.map(({ opcion, descripcion, aplicabilidad }) => ({
              opcion:        <span className="font-medium text-text-primary">{opcion}</span>,
              descripcion:   <span className="text-text-secondary">{descripcion}</span>,
              aplicabilidad: <span className="text-text-tertiary">{aplicabilidad}</span>,
            }))}
          />
        </Reveal>
      </section>

      {/* ── § 3.9 Recibe ─────────────────────────────────────────── */}
      <section id="sop02-recibe" className="scroll-mt-24">
        <SectionEyebrow label="Procesos / actividades de los que SOP_02 recibe información" />
        <Reveal>
          <p className="mb-6 max-w-[72ch] text-[14px] leading-[1.7] text-text-secondary">
            SOP_02 tiene dependencias bidireccionales con los procesos MAN_01 e INV_03. Una
            interrupción en SOP_02 afecta la capacidad de registro y seguimiento de intervenciones
            en ambos procesos.
          </p>
          <DataTable
            columns={[
              { key: "id",   label: "ID",                  className: "min-w-[130px]" },
              { key: "desc", label: "Proceso / Actividad" },
            ]}
            rows={RECIBE.map(({ id, descripcion }) => ({
              id:   <span className="font-mono text-[11px] text-accent-primary">{id}</span>,
              desc: <span className="text-text-secondary">{descripcion}</span>,
            }))}
          />
        </Reveal>
      </section>

      {/* ── § 3.10 Envía ─────────────────────────────────────────── */}
      <section id="sop02-envia" className="scroll-mt-24">
        <SectionEyebrow label="Procesos / actividades a los que SOP_02 envía información" />
        <Reveal>
          <DataTable
            columns={[
              { key: "id",   label: "ID",                  className: "min-w-[130px]" },
              { key: "desc", label: "Proceso / Actividad" },
            ]}
            rows={ENVIA.map(({ id, descripcion }) => ({
              id:   <span className="font-mono text-[11px] text-accent-primary">{id}</span>,
              desc: <span className="text-text-secondary">{descripcion}</span>,
            }))}
          />
        </Reveal>
      </section>

    </article>
  );
}
