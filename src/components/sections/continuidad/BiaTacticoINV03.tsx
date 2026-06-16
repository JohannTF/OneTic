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
  { tipo: "Pérdida económica (penalizaciones contractuales)",  niveles: ["N","N","B","M","A","A"] },
  { tipo: "Incumplimiento legal y/o regulatorio",              niveles: ["N","N","N","B","M","A"] },
  { tipo: "Daño a la reputación / imagen del servicio",        niveles: ["N","B","M","A","A","A"] },
  { tipo: "Afectación del servicio al cliente",                niveles: ["N","B","M","A","A","A"] },
  { tipo: "Pérdida de calidad en la gestión del parque TI",    niveles: ["B","M","A","A","A","A"] },
  { tipo: "Pérdida de productividad del equipo técnico",       niveles: ["B","M","A","A","A","A"] },
  { tipo: "Pérdida de control sobre activos tecnológicos",     niveles: ["B","M","A","A","A","A"] },
  { tipo: "Pérdida de información histórica del inventario",   niveles: ["N","N","B","M","A","A"] },
];

const NOTAS_IMPACTO = [
  "La pérdida de control sobre activos escala a Alto a las 4–8 horas porque sin el inventario actualizado, el equipo técnico no puede asignar correctamente los recursos ni priorizar intervenciones, generando un fallo sistémico en el servicio.",
  "La pérdida de calidad en la gestión del parque TI es el impacto más inmediato: desde las primeras horas, sin visibilidad del inventario, los diagnósticos de incidentes y la planificación de mantenimientos se ven afectados.",
  "La pérdida de información histórica escala más lentamente porque los respaldos periódicos de la BD de inventario mitigan la pérdida de datos en interrupciones cortas; el riesgo real se vuelve significativo a partir de las 8–24 horas.",
  "La pérdida económica por penalizaciones se materializa a partir de las 4–8 horas, cuando el incumplimiento de compromisos contractuales derivados de reportes incorrectos o retrasados es ya irrecuperable.",
];

const MTPOD_PERIODOS = ["< 2 hrs", "< 4 hrs", "< 8 hrs", "< 12 hrs", "< 24 hrs", "< 2 días", "> 2 días"];
const MTPOD_SELECTED = 2;
const MTPOD_CONSIDERANDO = [
  "La pérdida de control sobre los activos tecnológicos escala a nivel Alto a las 4–8 horas.",
  "El proceso INV_03 alimenta directamente el proceso SOP_02 (gestión de tickets), por lo que su indisponibilidad impacta en cascada la atención de incidentes activos.",
  "Los reportes de estado del parque TI son un entregable contractual periódico cuya generación depende de la disponibilidad del inventario en ITSM.",
];
const MTPOD_JUSTIFICACION =
  "Una interrupción de INV_03 por más de 8 horas hábiles implica la incapacidad de actualizar el estado de activos post-intervención, la pérdida de trazabilidad del parque tecnológico y el riesgo de generar diagnósticos incorrectos en el proceso SOP_02. A partir de este umbral, los impactos adversos se consideran inaceptables para la organización.";

const RTO_PERIODOS = ["< 30 min", "< 1 hr", "< 2 hrs", "< 4 hrs", "< 8 hrs", "< 12 hrs", "< 24 hrs"];
const RTO_SELECTED = 3;
const RTO_JUSTIFICACION =
  "El RTO de 4 horas hábiles permite que el proceso se restablezca con margen suficiente antes de que expire el MTPoD de 8 horas. Este tiempo contempla: diagnóstico del fallo (60 min), restauración del acceso a la plataforma ITSM o activación del canal alterno (90 min), carga retroactiva de los cambios pendientes en el inventario (90 min) y verificación de consistencia del registro (30 min).";

const MBCO = [
  {
    capacidad: "Acceso al registro del inventario",
    descripcion:
      "Al menos un medio alternativo (hoja de cálculo local o respaldo) debe estar disponible para consultar el estado de los activos tecnológicos mientras la plataforma ITSM no esté operativa.",
  },
  {
    capacidad: "Capacidad de levantamiento físico",
    descripcion:
      "El auxiliar administrativo TI debe poder realizar el levantamiento físico de activos en las instalaciones del cliente y registrar la información de forma manual para su posterior carga en el sistema.",
  },
  {
    capacidad: "Actualización retroactiva de activos",
    descripcion:
      "Una vez restablecida la plataforma ITSM, todos los cambios de estado de activos ocurridos durante la interrupción deben ser cargados dentro de las primeras 4 horas hábiles.",
  },
  {
    capacidad: "Generación de reportes de estado mínimos",
    descripcion:
      "El administrador del servicio debe poder generar un reporte de estado básico del parque TI en formato alterno (Excel o PDF) aun sin acceso al ITSM, para cumplir compromisos de comunicación con el cliente.",
  },
  {
    capacidad: "Capacidad mínima de personal",
    descripcion:
      "Al menos 1 auxiliar administrativo TI debe estar operativo para sostener el proceso en nivel mínimo: levantamiento, actualización manual y respuesta a consultas del cliente sobre activos.",
  },
];

const CONTINUIDAD = [
  {
    opcion: "Registro manual en hoja de cálculo",
    descripcion:
      "Uso de una hoja de cálculo local (Excel) como medio alterno para registrar y actualizar los activos tecnológicos cuando la plataforma ITSM no está disponible.",
    aplicabilidad: "Ante caída del sistema ITSM",
  },
  {
    opcion: "Respaldo periódico de la BD de inventario",
    descripcion:
      "Exportación y almacenamiento local del inventario completo con periodicidad semanal, de modo que siempre exista una versión reciente consultable fuera del ITSM.",
    aplicabilidad: "Ante pérdida de acceso a la plataforma o fallo de conectividad",
  },
  {
    opcion: "Levantamiento físico con formato impreso",
    descripcion:
      "Uso de formatos físicos impresos para el levantamiento de activos en instalaciones del cliente cuando no hay acceso remoto al ITSM durante la visita.",
    aplicabilidad: "Ante falla de conectividad en instalaciones del cliente",
  },
  {
    opcion: "Comunicación directa con el administrador",
    descripcion:
      "En ausencia del auxiliar, el administrador del servicio puede gestionar consultas urgentes sobre el estado del inventario directamente con el cliente (Jesús Ochoa, ext. 5545845900).",
    aplicabilidad: "Ante indisponibilidad del auxiliar TI",
  },
  {
    opcion: "Generación de reportes desde respaldo local",
    descripcion:
      "El administrador puede elaborar el reporte de estado del parque TI a partir del respaldo exportado de la BD de inventario, sin requerir acceso activo al ITSM.",
    aplicabilidad: "Ante indisponibilidad de la plataforma ITSM",
  },
];

const RECIBE = [
  {
    id: "MAN_01 – 1A9",
    descripcion:
      "Registro de la intervención en ITSM – suministra el detalle de las acciones realizadas sobre cada equipo en mantenimiento preventivo/correctivo para que el inventario refleje el estado actualizado del activo.",
  },
  {
    id: "SOP_02 – 2A10",
    descripcion:
      "Actualización de ticket y cierre – notifica al proceso de inventario cuando la resolución de un incidente implica cambios de estado, reemplazo de componentes o baja de un activo registrado.",
  },
  {
    id: "MAN_01 – 1A3",
    descripcion:
      "Preparación de insumos – informa sobre el stock de refacciones consumidas durante la intervención, lo que puede implicar una actualización en los atributos del equipo en inventario.",
  },
  {
    id: "Cliente – 3A2",
    descripcion:
      "Autorización de acceso y firma del formato de registro – el cliente proporciona la información de referencia (listado previo de equipos, ubicaciones) que sirve como base para el levantamiento físico del proceso INV_03.",
  },
];

const ENVIA = [
  {
    id: "SOP_02 – 2A2",
    descripcion:
      "Registro de ticket en ITSM – el inventario provee los datos actualizados del equipo afectado (marca, modelo, número de serie, estado) que el auxiliar vincula al ticket al momento de su registro.",
  },
  {
    id: "SOP_02 – 2A3",
    descripcion:
      "Clasificación y priorización de ticket – el estado y la criticidad del activo registrado en el inventario influyen en la prioridad asignada al incidente.",
  },
  {
    id: "MAN_01 – 1A4",
    descripcion:
      "Diagnóstico de falla – el especialista consulta el historial de intervenciones del equipo en el inventario para identificar fallas recurrentes y determinar la causa raíz con mayor precisión.",
  },
  {
    id: "Administrador – 3A6",
    descripcion:
      "Generación de reporte de estado del parque TI – el inventario consolidado en el ITSM es la fuente primaria de datos para el reporte periódico que se entrega al cliente.",
  },
  {
    id: "Administrador – 3A7",
    descripcion:
      "Notificación de equipos en riesgo – la información del inventario permite identificar equipos obsoletos o con fallas recurrentes y fundamenta la notificación formal al cliente.",
  },
  {
    id: "Administrador – 3A8",
    descripcion:
      "Elaboración del plan de renovación – el estado del inventario (antigüedad, frecuencia de fallas, costo de mantenimiento) es la base del plan de renovación tecnológica propuesto al cliente.",
  },
];

// ── Componente ────────────────────────────────────────────────────
export function BiaTacticoINV03() {
  return (
    <article className="flex flex-col gap-20">

      {/* Cabecera del proceso */}
      <Reveal>
        <div className="flex flex-col gap-1.5">
          <span className="font-mono inline-flex items-center rounded-md bg-accent-subtle px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent-primary ring-1 ring-inset ring-accent-primary/25">
            INV_03
          </span>
          <h2 className="text-[22px] font-semibold leading-snug text-text-primary">
            Gestión de inventario tecnológico
          </h2>
        </div>
      </Reveal>

      {/* ── § 1 Introducción ─────────────────────────────────────── */}
      <section id="inv03-intro" className="scroll-mt-24">
        <SectionEyebrow label="Introducción" />
        <Reveal>
          <div className="flex max-w-[72ch] flex-col gap-4">
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              El presente Análisis de Impacto al Negocio (BIA) evalúa las consecuencias operativas
              que derivarían de una interrupción total o parcial del proceso INV_03: Gestión de
              inventario tecnológico, en el contexto del servicio de soporte técnico IT que OneTic
              provee a PyMEs del área metropolitana.
            </p>
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              Este proceso constituye el mecanismo central mediante el cual OneTic registra,
              controla y mantiene actualizado el estado del parque tecnológico de sus clientes. Una
              interrupción en INV_03 compromete la trazabilidad de los activos, la calidad del
              diagnóstico técnico, la generación de reportes de estado y la capacidad de
              planificación de renovación tecnológica, afectando tanto la operación interna como los
              compromisos contractuales con el cliente.
            </p>
            <p className="text-[14px] italic leading-[1.6] text-text-tertiary">
              Este documento se elabora en conformidad con la norma ISO 22301 – Sistemas de gestión
              de la continuidad del negocio.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── § 2 Objetivos ────────────────────────────────────────── */}
      <section id="inv03-objetivos" className="scroll-mt-24">
        <SectionEyebrow label="Objetivos" />
        <Reveal>
          <ol className="flex max-w-[72ch] flex-col gap-3">
            {[
              "Identificar el impacto potencial de una interrupción del proceso INV_03 sobre las dimensiones económica, reputacional, operativa y regulatoria del servicio.",
              "Determinar el Máximo Periodo de Interrupción Tolerable (MTPoD) y el Tiempo de Recuperación Objetivo (RTO) del proceso.",
              "Establecer el Objetivo Mínimo de Continuidad del Negocio (MBCO) que garantice la prestación del servicio en condiciones degradadas.",
              "Identificar las interdependencias del proceso INV_03 con otros procesos y activos de información del servicio.",
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
      <section id="inv03-identificacion" className="scroll-mt-24">
        <SectionEyebrow label="Identificación del proceso" />
        <Reveal>
          <DataTable
            columns={[
              { key: "campo", label: "Campo", className: "min-w-[200px]" },
              { key: "valor", label: "Valor" },
            ]}
            rows={[
              { campo: "ID del proceso",                 valor: "INV_03" },
              { campo: "Nombre del proceso",             valor: "Gestión de inventario tecnológico" },
              { campo: "Grupo de productos y servicios", valor: "Servicio TI: Registro, control y actualización del parque tecnológico de los clientes mediante la plataforma ITSM" },
              { campo: "Área responsable",               valor: "Departamento de TI – OneTic" },
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
      <section id="inv03-impacto" className="scroll-mt-24">
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
      <section id="inv03-notas" className="scroll-mt-24">
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
      <section id="inv03-mtpod" className="scroll-mt-24">
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
      <section id="inv03-rto" className="scroll-mt-24">
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
      <section id="inv03-mbco" className="scroll-mt-24">
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
      <section id="inv03-continuidad" className="scroll-mt-24">
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
      <section id="inv03-recibe" className="scroll-mt-24">
        <SectionEyebrow label="Procesos / actividades de los que INV_03 recibe información" />
        <Reveal>
          <p className="mb-6 max-w-[72ch] text-[14px] leading-[1.7] text-text-secondary">
            INV_03 tiene dependencias bidireccionales con los procesos MAN_01 y SOP_02. Una
            interrupción en INV_03 afecta directamente la calidad del diagnóstico técnico en
            MAN_01 y la correcta clasificación de tickets en SOP_02, al privarlos de información
            actualizada sobre el estado de los activos tecnológicos. Asimismo, INV_03 depende de
            los datos generados por MAN_01 y SOP_02 para mantener el inventario vigente: cada
            intervención de mantenimiento o cierre de ticket con cambio de estado en un activo
            debe reflejarse en el registro de inventario.
          </p>
          <DataTable
            columns={[
              { key: "id",   label: "ID",                  className: "min-w-[160px]" },
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
      <section id="inv03-envia" className="scroll-mt-24">
        <SectionEyebrow label="Procesos / actividades a los que INV_03 envía información" />
        <Reveal>
          <DataTable
            columns={[
              { key: "id",   label: "ID",                  className: "min-w-[160px]" },
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
