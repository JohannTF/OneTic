import type { CascadaRow } from "@/types/estrategia";

export const cascadaDeMetas = {
  eyebrow: "Capítulo 02 · Estrategia COBIT",
  title: "Cascada de Metas",
  lead: "La cascada de metas vincula cada objetivo —corporativo y de TI— con las tres metas de gobierno de COBIT: obtener beneficios, optimizar riesgos y optimizar recursos, distinguiendo su contribución primaria (P) de la secundaria (S).",

  corporativas: [
    {
      dimension: "Financiera",
      meta: "Reducir el costo operativo por incidente en un 20 % mediante la sustitución del modelo reactivo por mantenimiento preventivo planificado.",
      beneficios: "P",
      riesgos: "S",
      recursos: "P",
    },
    {
      dimension: "Cliente",
      meta: "Reducir el tiempo de atención a incidentes en un 30 % mediante gestión estructurada de tickets y cumplimiento de SLA.",
      beneficios: "P",
      riesgos: "S",
      recursos: "S",
    },
    {
      dimension: "Procesos Internos",
      meta: "Estandarizar e implementar MAN_01, SOP_02 e INV_03 bajo ITIL con intervenciones documentadas y conformes.",
      beneficios: "S",
      riesgos: "P",
      recursos: "P",
    },
    {
      dimension: "Aprendizaje y Crecimiento",
      meta: "Desarrollar y ejecutar un programa de capacitación bimestral para el equipo técnico enfocado en procedimientos de intervención segura, uso de la plataforma ITSM y gestión de activos tecnológicos.",
      beneficios: "S",
      riesgos: "P",
      recursos: "S",
    },
  ] satisfies CascadaRow[],

  it: [
    {
      dimension: "Financiera",
      meta: "Optimizar el costo de operación de la plataforma ITSM en un 15 % para el cuarto trimestre de 2026, consolidando las licencias activas según la carga real de tickets gestionados mensualmente.",
      beneficios: "P",
      riesgos: "S",
      recursos: "P",
    },
    {
      dimension: "Cliente",
      meta: "Reducir la indisponibilidad de equipos en un 40 % mediante la ejecución de MAN_01 y la gestión oportuna de tickets en SOP_02.",
      beneficios: "P",
      riesgos: "P",
      recursos: "S",
    },
    {
      dimension: "Procesos Internos",
      meta: "Asegurar que el 100 % de los activos estén cubiertos en ITSM con respaldo diario y acceso seguro.",
      beneficios: "S",
      riesgos: "P",
      recursos: "P",
    },
    {
      dimension: "Aprendizaje y Crecimiento",
      meta: "Lograr que el 70 % del equipo técnico obtenga competencia verificada en administración de ITSM, mantenimiento e inventario · Q3-2026.",
      beneficios: "S",
      riesgos: "P",
      recursos: "S",
    },
  ] satisfies CascadaRow[],
};
