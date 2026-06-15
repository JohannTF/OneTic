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

function SubLabel({ tag, label }: { tag: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-disabled">
        {tag}
      </span>
      <span aria-hidden className="h-px flex-1 bg-border-subtle" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-secondary">
        {label}
      </span>
    </div>
  );
}

const PERIODOS_IMPACTO = ["< 4 hrs", "4–8 hrs", "8–24 hrs", "1–2 días", "2–5 días", "> 5 días"];

const IMPACTOS: { tipo: string; niveles: ImpactLevel[] }[] = [
  { tipo: "Incumplimiento del SLA de intervención presencial",           niveles: ["N","B","B","A","A","A"] },
  { tipo: "Acumulación de equipos sin atención / backlog",               niveles: ["N","B","M","A","A","A"] },
  { tipo: "Deterioro del equipo del cliente por falta de mantenimiento", niveles: ["N","N","B","M","A","A"] },
  { tipo: "Pérdida de trazabilidad (sin registro en ITSM)",              niveles: ["N","B","M","A","A","A"] },
  { tipo: "Daño a la reputación / imagen del servicio",                  niveles: ["N","N","B","M","A","A"] },
  { tipo: "Pérdida de productividad del equipo técnico",                 niveles: ["B","M","M","A","A","A"] },
  { tipo: "Pérdida económica (penalizaciones / re-trabajos)",            niveles: ["N","N","B","M","A","A"] },
  { tipo: "Afectación operativa al cliente final",                       niveles: ["N","B","M","A","A","A"] },
];

const NOTAS_IMPACTO = [
  "El incumplimiento del SLA escala a Alto entre las 8 y 24 horas porque el SLA de intervención presencial comprometido contractualmente es de máximo 24 horas hábiles para incidentes críticos. Antes de ese umbral, el impacto es gestionable si la visita puede reprogramarse dentro del mismo día.",
  "La acumulación de backlog (equipos sin atención) escala a Medio desde las 4–8 horas porque, en ausencia de técnicos, los tickets de mantenimiento correctivo se apilan, comprometiendo los tiempos de respuesta futuros.",
  "El deterioro del equipo del cliente escala lentamente porque el daño físico por falta de mantenimiento preventivo no es inmediato; sin embargo, a partir de los 2 días sin atención los equipos en estado crítico pueden desarrollar fallas irreversibles.",
  "La pérdida de trazabilidad escala a Alto en las primeras horas porque, sin la plataforma ITSM, cualquier intervención realizada queda sin registro formal, incumpliendo los requisitos documentales del SLA.",
  "La pérdida económica por penalizaciones contractuales se materializa formalmente a partir de las 24 horas, cuando el incumplimiento del SLA presencial es irrecuperable para los equipos críticos del cliente.",
];

const MTPOD_PERIODOS = ["< 4 hrs", "< 8 hrs", "< 12 hrs", "< 24 hrs", "< 2 días", "> 2 días"];
const MTPOD_SELECTED = 1;
const MTPOD_JUSTIFICACION =
  "La interrupción de MAN_01 por más de 8 horas hábiles implica una acumulación significativa de equipos sin atención, riesgo de incumplimiento inminente del SLA presencial y daño reputacional en ascenso. Este umbral se considera el límite antes del cual los impactos adversos se vuelven inaceptables, dado que el equipo técnico aún puede reprogramar intervenciones dentro del mismo día si la interrupción no supera las 8 horas.";

const RTO_PERIODOS = ["< 30 min", "< 1 hr", "< 2 hrs", "< 4 hrs", "< 8 hrs", "< 12 hrs"];
const RTO_SELECTED = 2;
const RTO_JUSTIFICACION =
  "El RTO de 2 horas hábiles permite que el proceso se restablezca con suficiente margen antes de que expire el MTPoD de 8 horas. Este tiempo contempla: diagnóstico del motivo de la interrupción (30 min), reasignación de personal o habilitación de opción de continuidad (60 min) y reanudación del programa de visitas con priorización de equipos críticos (30 min). El OLA establece un MTTR máximo de 4 hrs para la plataforma ITSM; el RTO de 2 hrs resulta más exigente y adecuado a la criticidad del proceso frente al cliente.";

const MBCO = [
  {
    capacidad: "Personal técnico disponible",
    descripcion:
      "Al menos 1 técnico de soporte y 1 especialista deben estar operativos para ejecutar intervenciones presenciales de prioridad alta.",
  },
  {
    capacidad: "Kit de herramientas operativo",
    descripcion:
      "El técnico debe contar con herramientas básicas (desarmadores, multímetro, pinzas antiestáticas) y consumibles mínimos para ejecutar las intervenciones.",
  },
  {
    capacidad: "Canal de comunicación activo",
    descripcion:
      "El administrador del servicio debe poder contactar al cliente para notificar retrasos, reprogramar visitas y emitir alertas de continuidad.",
  },
  {
    capacidad: "Registro manual de intervenciones",
    descripcion:
      "Si la plataforma ITSM no está disponible, las intervenciones se documentan en formato físico o en hoja de cálculo local para su posterior carga al sistema.",
  },
  {
    capacidad: "Atención prioritaria a equipos críticos",
    descripcion:
      "Como mínimo, los equipos clasificados como críticos para el cliente (aquellos usados en actividades productivas directas) deben recibir atención dentro del SLA de 24 horas hábiles.",
  },
];

const CONTINUIDAD = [
  {
    opcion: "Reprogramación de visita",
    descripcion:
      "El administrador del servicio contacta al cliente para reprogramar la intervención dentro del siguiente día hábil, priorizando equipos con mayor impacto operativo.",
    aplicabilidad: "Ante indisponibilidad de personal o insumos",
  },
  {
    opcion: "Sustitución temporal de técnico",
    descripcion:
      "El especialista en diagnóstico puede cubrir de forma temporal las intervenciones de mantenimiento básico cuando el técnico asignado no esté disponible.",
    aplicabilidad: "Ante ausencia del técnico de soporte (Riesgo R4)",
  },
  {
    opcion: "Diagnóstico remoto previo a la visita",
    descripcion:
      "Antes de presentarse en sitio, el técnico puede coordinar con el cliente un diagnóstico telefónico para identificar la urgencia del equipo y priorizar la atención presencial.",
    aplicabilidad: "Ante demora en la llegada al sitio del cliente",
  },
  {
    opcion: "Uso de refacciones del stock mínimo",
    descripcion:
      "Si el componente requerido está disponible en el stock de refacciones pre-comprado, la intervención correctiva puede completarse sin esperar al proveedor externo.",
    aplicabilidad: "Ante desabasto o demora en adquisición de piezas (Riesgo R2)",
  },
  {
    opcion: "Registro físico de intervención",
    descripcion:
      "Cuando la plataforma ITSM no está disponible, el técnico documenta la intervención en el formato físico de reporte de servicio para carga posterior al sistema.",
    aplicabilidad: "Ante caída del sistema ITSM (Riesgo R3)",
  },
];

const RECIBE = [
  {
    id: "SOP_02 – 2A9",
    descripcion:
      "Documentación de solución y cierre de ticket — cuando un ticket de incidente escala a mantenimiento correctivo, SOP_02 transfiere el historial del incidente a MAN_01 para iniciar la intervención.",
  },
  {
    id: "INV_03 – 3A3 / 3A4",
    descripcion:
      "Levantamiento físico y captura de datos de activos — el inventario actualizado de activos (marca, modelo, estado físico) orienta el diagnóstico y la planificación del mantenimiento preventivo.",
  },
  {
    id: "A-001",
    descripcion:
      "Equipo de cómputo — es el objeto directo de intervención; su estado registrado en el inventario determina el tipo y alcance de la intervención a realizar.",
  },
  {
    id: "A-007",
    descripcion:
      "Base de datos de inventario tecnológico — provee el historial de intervenciones previas, útil para identificar equipos con fallas recurrentes y planificar el mantenimiento.",
  },
];

const ENVIA = [
  {
    id: "SOP_02 – 2A10",
    descripcion:
      "Actualización del ticket — el cierre de la intervención correctiva genera el cierre formal del ticket asociado en la mesa de ayuda, actualizando su historial en ITSM.",
  },
  {
    id: "INV_03 – 3A5",
    descripcion:
      "Actualización del inventario post-intervención — tras cada mantenimiento, MAN_01 transfiere el estado actualizado del equipo (componentes reemplazados, estado resultante) al proceso de inventario.",
  },
  {
    id: "A-003",
    descripcion:
      "Reporte técnico de intervención — documento formal generado al término de cada visita, con actividades realizadas, componentes reemplazados y firma de conformidad del cliente.",
  },
  {
    id: "A-004",
    descripcion:
      "Plataforma ITSM — recibe el registro detallado de cada intervención técnica (actividad 1A9), alimentando el historial del equipo y el control de mantenimientos programados.",
  },
  {
    id: "A-007",
    descripcion:
      "Base de datos de inventario tecnológico — se actualiza con el estado resultante de cada equipo intervenido, incorporando cambios de componentes y recomendaciones de renovación.",
  },
];

export function BiaTacticoMAN01() {
  return (
    <article className="flex flex-col gap-10">
      {/* Cabecera del proceso */}
      <Reveal>
        <div className="flex items-start gap-4">
          <span className="font-mono shrink-0 rounded-lg bg-accent-primary px-3 py-1.5 text-[13px] font-semibold tracking-[0.05em] text-white">
            MAN_01
          </span>
          <div>
            <h2 className="text-[22px] font-semibold leading-snug text-text-primary">
              Mantenimiento preventivo y correctivo de equipos de cómputo
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Jesús Ochoa", "Mario Olvera", "Félix Barrera"].map((r) => (
                <span
                  key={r}
                  className="font-mono rounded-md bg-accent-subtle px-2 py-0.5 text-[10px] text-accent-primary"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* § 1 — Introducción */}
      <Reveal>
        <div className="flex max-w-[72ch] flex-col gap-4">
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            El presente Análisis de Impacto al Negocio (BIA), elaborado en conformidad con la norma
            ISO 22301, evalúa las consecuencias operativas que derivarían de una interrupción total
            o parcial del proceso MAN_01: Mantenimiento preventivo y correctivo de equipos de
            cómputo, en el contexto del servicio de soporte técnico IT que OneTic provee a PyMEs
            del área metropolitana.
          </p>
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            Este proceso constituye el núcleo operativo del servicio: es la actividad mediante la
            cual OneTic garantiza la disponibilidad, estabilidad y buen funcionamiento de los
            activos tecnológicos de sus clientes. A través de intervenciones preventivas periódicas
            (mantenimiento preventivo y correctivo de activos tecnológicos, incluyendo limpieza
            técnica, revisión de componentes, diagnóstico y reparación) y de la atención correctiva
            ante fallas detectadas (diagnóstico, reemplazo de componentes, ajustes de
            configuración), MAN_01 preserva la continuidad operativa de las organizaciones que
            dependen de su infraestructura tecnológica para desarrollar sus actividades cotidianas.
          </p>
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            Una interrupción en MAN_01 no solo afecta la capacidad de prestación del servicio de
            OneTic, sino que impacta directamente la operatividad de los clientes: los equipos
            dejan de recibir atención preventiva, las fallas correctivas se acumulan sin resolución
            y los activos tecnológicos se deterioran progresivamente, comprometiendo la
            productividad del usuario final y el cumplimiento de los compromisos contractuales
            establecidos en el SLA.
          </p>
        </div>
      </Reveal>

      {/* § 2 — Objetivos */}
      <Reveal>
        <SubLabel tag="§ 2" label="Objetivos" />
        <ol className="flex flex-col gap-2">
          {[
            "Identificar el impacto potencial de una interrupción del proceso MAN_01 sobre las dimensiones económica, reputacional, operativa y regulatoria del servicio.",
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

      {/* § 3.1 — Identificación del proceso */}
      <div id="man01-identificacion" className="scroll-mt-24">
        <Reveal>
          <SubLabel tag="§ 3.1" label="Identificación del proceso" />
          <DataTable
            columns={[
              { key: "campo", label: "Campo", className: "min-w-[200px]" },
              { key: "valor", label: "Valor" },
            ]}
            rows={[
              { campo: "ID del proceso",                      valor: "MAN_01" },
              { campo: "Nombre del proceso",                  valor: "Mantenimiento preventivo y correctivo de equipos de cómputo" },
              { campo: "Grupo de productos y servicios",      valor: "Soporte técnico IT: intervenciones preventivas y correctivas en hardware de equipos de cómputo, proyectores e impresoras" },
              { campo: "Área responsable",                    valor: "Departamento de TI - OneTic" },
              { campo: "Función responsable",                 valor: "Administrador del servicio / Técnico de soporte / Especialista en diagnóstico y reparación" },
              { campo: "Nombre del responsable",              valor: "Jesús Ochoa (Administrador del servicio) · Mario Olvera (Técnico de soporte) · Félix Barrera (Especialista en diagnóstico)" },
              { campo: "Fecha de llenado",                    valor: "Junio 2026" },
            ].map(({ campo, valor }) => ({
              campo: <span className="font-medium text-text-primary">{campo}</span>,
              valor: <span className="text-text-secondary">{valor}</span>,
            }))}
          />
        </Reveal>
      </div>

      {/* § 3.2 — Tabla de impacto */}
      <div id="man01-impacto" className="scroll-mt-24">
        <Reveal>
          <SubLabel tag="§ 3.2" label="Tipo y nivel de impacto al negocio" />
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
          <div className="mb-5 overflow-x-auto rounded-2xl border border-border-subtle bg-surface-base">
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
          <ul className="flex flex-col gap-2">
            {NOTAS_IMPACTO.map((nota, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[12.5px] leading-[1.6] text-text-tertiary"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-text-disabled" />
                {nota}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* § 3.3 MTPoD + § 3.4 RTO */}
      <div id="man01-mtpod-rto" className="scroll-mt-24">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle bg-surface-base p-6">
              <div className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-disabled">
                § 3.3
              </div>
              <div className="mb-4 text-[15px] font-semibold text-text-primary">
                MTPoD — Máximo periodo de interrupción tolerable
              </div>
              <PeriodScale periodos={MTPOD_PERIODOS} selected={MTPOD_SELECTED} />
              <p className="mt-4 text-[13px] leading-[1.65] text-text-tertiary">
                {MTPOD_JUSTIFICACION}
              </p>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-surface-base p-6">
              <div className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-disabled">
                § 3.4
              </div>
              <div className="mb-4 text-[15px] font-semibold text-text-primary">
                RTO — Tiempo de recuperación objetivo
              </div>
              <PeriodScale periodos={RTO_PERIODOS} selected={RTO_SELECTED} />
              <p className="mt-4 text-[13px] leading-[1.65] text-text-tertiary">
                {RTO_JUSTIFICACION}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* § 3.5 — MBCO */}
      <div id="man01-mbco" className="scroll-mt-24">
        <Reveal>
          <SubLabel tag="§ 3.5" label="Objetivo mínimo de continuidad del negocio (MBCO)" />
          <div className="overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle">
            <div className="flex flex-col gap-px">
              {MBCO.map(({ capacidad, descripcion }, i) => (
                <div key={i} className="flex items-start gap-6 bg-surface-base px-6 py-5">
                  <span className="min-w-[180px] max-w-[200px] shrink-0 text-[13px] font-semibold leading-snug text-text-primary">
                    {capacidad}
                  </span>
                  <p className="text-[13px] leading-[1.65] text-text-secondary">{descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* § 3.6 — Actividades (referencia) */}
      <Reveal>
        <SubLabel tag="§ 3.6" label="Identificación de las actividades del proceso" />
        <p className="text-[13px] italic leading-[1.6] text-text-tertiary">
          Esta sección está documentada en el archivo de mapeo de procesos y en la tabla de
          actividades críticas correspondiente a MAN_01. Se omite su duplicación conforme a la
          indicación del formato de referencia.
        </p>
      </Reveal>

      {/* § 3.7 — Continuidad operacional */}
      <div id="man01-continuidad" className="scroll-mt-24">
        <Reveal>
          <SubLabel tag="§ 3.7" label="Opciones actuales de continuidad operacional" />
          <DataTable
            columns={[
              { key: "opcion",        label: "Opción",        className: "min-w-[160px]" },
              { key: "descripcion",   label: "Descripción",   className: "min-w-[260px]" },
              { key: "aplicabilidad", label: "Aplicabilidad", className: "min-w-[180px]" },
            ]}
            rows={CONTINUIDAD.map(({ opcion, descripcion, aplicabilidad }) => ({
              opcion:        <span className="font-medium text-text-primary">{opcion}</span>,
              descripcion:   <span className="text-text-secondary">{descripcion}</span>,
              aplicabilidad: <span className="text-text-tertiary">{aplicabilidad}</span>,
            }))}
          />
        </Reveal>
      </div>

      {/* § 3.8–3.10 — Interdependencias */}
      <div id="man01-interdependencias" className="scroll-mt-24">
        <Reveal>
          <SubLabel tag="§ 3.8" label="Interdependencia con otros procesos y/o actividades" />
          <p className="mb-8 max-w-[72ch] text-[14px] leading-[1.7] text-text-secondary">
            MAN_01 tiene dependencias bidireccionales con los procesos SOP_02 e INV_03. Una
            interrupción en MAN_01 afecta la capacidad de actualización del inventario (INV_03) y
            el cierre formal de tickets en la mesa de ayuda (SOP_02). A su vez, MAN_01 depende de
            la información del inventario y del historial de tickets para planificar y ejecutar sus
            intervenciones.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="font-mono mb-3 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                § 3.9 — Procesos de los que MAN_01 recibe información
              </p>
              <DataTable
                columns={[
                  { key: "id",   label: "ID",                  className: "min-w-[120px]" },
                  { key: "desc", label: "Proceso / Actividad" },
                ]}
                rows={RECIBE.map(({ id, descripcion }) => ({
                  id:   <span className="font-mono text-[11px] text-accent-primary">{id}</span>,
                  desc: <span className="text-text-secondary">{descripcion}</span>,
                }))}
              />
            </div>
            <div>
              <p className="font-mono mb-3 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                § 3.10 — Procesos a los que MAN_01 envía información
              </p>
              <DataTable
                columns={[
                  { key: "id",   label: "ID",                  className: "min-w-[120px]" },
                  { key: "desc", label: "Proceso / Actividad" },
                ]}
                rows={ENVIA.map(({ id, descripcion }) => ({
                  id:   <span className="font-mono text-[11px] text-accent-primary">{id}</span>,
                  desc: <span className="text-text-secondary">{descripcion}</span>,
                }))}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
