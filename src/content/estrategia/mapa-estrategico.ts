import type { Perspectiva } from "@/types/estrategia";

// Transcripción de los mapas estratégicos (mapa_estrategia_corporativa.png y
// mapa_estrategia_it.png). Cada perspectiva tiene una meta principal (cabecera) y
// sus estrategias, que apuntan de abajo hacia arriba hacia esa meta. Los carriles
// encadenan una relación causa-efecto que desemboca en la meta general (Procesos
// Internos, en el ápice). El orden respeta el de los diagramas originales.

export const mapaEstrategico = {
  eyebrow: "Capítulo 02 · Estrategia COBIT",
  title: "Mapa Estratégico",
  lead: "El mapa estratégico organiza los objetivos en las cuatro perspectivas del Balanced Scorecard: las estrategias de cada dimensión convergen en su meta, y las dimensiones se encadenan en una relación causa-efecto que desemboca en la meta general del servicio.",

  corporativa: [
    {
      id: "C-PI",
      label: "Procesos Internos",
      tone: "procesos",
      apex: true,
      meta: "Estandarizar los procesos para realizar intervenciones efectivas",
      estrategias: [],
    },
    {
      id: "C-CL",
      label: "Clientes",
      tone: "clientes",
      meta: "Confiabilidad y satisfacción",
      estrategias: [
        { id: "c-cl-1", label: "Respuesta y atención rápida" },
        { id: "c-cl-2", label: "Mantener un nivel de servicio óptimo y operativo" },
        { id: "c-cl-3", label: "Proveer un servicio estable anticipando fallas en los equipos" },
        { id: "c-cl-4", label: "Solicitar recomendaciones de clientes para asegurar la calidad del servicio" },
        { id: "c-cl-5", label: "Comunicación constante con notificaciones y seguimiento activo" },
      ],
    },
    {
      id: "C-FI",
      label: "Financiero",
      tone: "financiero",
      meta: "Presupuesto: reducción y optimización",
      estrategias: [
        { id: "c-fi-1", label: "Mantener un fondo de presupuesto contra incidentes" },
        { id: "c-fi-2", label: "Optimizar gastos operativos con control previo de costos y tiempos" },
        { id: "c-fi-3", label: "Análisis eficiente del capital" },
        { id: "c-fi-4", label: "Diversificar el área comercial mediante la captación de clientes" },
        { id: "c-fi-5", label: "Asignar utilidades a inversiones con margen para la organización" },
      ],
    },
    {
      id: "C-AP",
      label: "Aprendizaje y Crecimiento",
      tone: "aprendizaje",
      meta: "Capital humano y conocimiento técnico",
      estrategias: [
        { id: "c-ap-1", label: "Capacitación bimestral del equipo de trabajo" },
        { id: "c-ap-2", label: "Implementar metodologías formales de seguridad y gestión de riesgos" },
        { id: "c-ap-3", label: "Capacitar al equipo en el uso y administración de la plataforma ITSM" },
        { id: "c-ap-4", label: "Fomentar una cultura de mejora continua y documentación de buenas prácticas" },
        { id: "c-ap-5", label: "Evaluar y certificar periódicamente las competencias técnicas del personal" },
      ],
    },
  ] satisfies Perspectiva[],

  it: [
    {
      id: "T-PI",
      label: "Procesos Internos",
      tone: "procesos",
      apex: true,
      meta: "Activos cubiertos en ITSM con respaldo diario y acceso seguro",
      estrategias: [],
    },
    {
      id: "T-CL",
      label: "Clientes",
      tone: "clientes",
      meta: "Disponibilidad y confianza del servicio",
      estrategias: [
        { id: "t-cl-1", label: "Reducir la indisponibilidad de equipos mediante programas de mantenimiento" },
        { id: "t-cl-2", label: "Gestión oportuna de tickets con resolución dentro de los tiempos establecidos" },
        { id: "t-cl-3", label: "Mantener el inventario tecnológico accesible y actualizado en la plataforma ITSM" },
        { id: "t-cl-4", label: "Soporte remoto y presencial para la atención de incidencias" },
        { id: "t-cl-5", label: "Comunicación y seguimiento constante al cliente" },
      ],
    },
    {
      id: "T-FI",
      label: "Financiero",
      tone: "financiero",
      meta: "Optimización del costo tecnológico",
      estrategias: [
        { id: "t-fi-1", label: "Ajustar las licencias ITSM a la demanda real" },
        { id: "t-fi-2", label: "Llevar un control preciso del costo por intervención" },
        { id: "t-fi-3", label: "Asegurar métodos de financiamiento para reducir costos" },
        { id: "t-fi-4", label: "Identificar y evitar gastos innecesarios sin afectar la disponibilidad" },
        { id: "t-fi-5", label: "Monitorear el capital de trabajo alineando el presupuesto a la demanda" },
      ],
    },
    {
      id: "T-AP",
      label: "Aprendizaje y Crecimiento",
      tone: "aprendizaje",
      meta: "Competencia técnica del equipo IT",
      estrategias: [
        { id: "t-ap-1", label: "Capacitación técnica sobre la plataforma ITSM para el equipo" },
        { id: "t-ap-2", label: "Programas de formación según necesidades detectadas" },
        { id: "t-ap-3", label: "Procedimientos de información segura y bien planificados" },
        { id: "t-ap-4", label: "Planes de continuidad para distintos escenarios" },
        { id: "t-ap-5", label: "Controles de seguridad, políticas, gestión de riesgos y auditorías internas" },
      ],
    },
  ] satisfies Perspectiva[],
};
