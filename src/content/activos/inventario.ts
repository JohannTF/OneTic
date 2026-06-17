import type { Proceso, ActivoInfo } from "@/types/activos";

export const inventarioMeta = {
  area: "Servicios de Soporte y Operaciones de TI",
  servicio: "Servicio de Soporte Técnico y Continuidad Operativa",
};

export const procesos: Proceso[] = [
  {
    id: "MAN_01",
    nombre: "Mantenimiento preventivo y correctivo de equipos de cómputo",
    descripcion:
      "Proceso que garantiza la disponibilidad y funcionalidad de los activos tecnológicos mediante intervenciones planificadas de limpieza técnica y verificación de componentes (preventivo), así como el diagnóstico y reemplazo de piezas ante fallas detectadas (correctivo), asegurando la continuidad operativa de los equipos del cliente.",
    actividadesCriticas: [
      "1A4 – Diagnóstico de falla del equipo",
      "1A5 – Limpieza técnica interna de componentes",
      "1A6 – Reemplazo de componente defectuoso",
      "1A8 – Verificación de funcionamiento post-intervención",
      "1A9 – Registro de la intervención en plataforma ITSM",
    ],
    factoresExito: [
      "Disponibilidad oportuna de refacciones y consumibles de mantenimiento",
      "Personal técnico calificado con acceso garantizado a las instalaciones del cliente",
      "Registro completo y oportuno de cada intervención en la plataforma ITSM",
      "Conformidad del cliente mediante firma del reporte técnico de servicio prestado",
      "Cronograma de mantenimiento preventivo definido y respetado por ambas partes",
    ],
  },
  {
    id: "SOP_02",
    nombre: "Gestión de mesa de ayuda y sistema de tickets",
    descripcion:
      "Proceso que gestiona el ciclo de vida completo de los incidentes técnicos reportados por los usuarios, desde su registro y clasificación en el sistema ITSM hasta la resolución, documentación y cierre formal, garantizando trazabilidad, tiempos de respuesta y la satisfacción del usuario.",
    actividadesCriticas: [
      "2A3 – Clasificación y priorización del ticket",
      "2A5 – Análisis y diagnóstico del incidente",
      "2A7 – Escalación y resolución por especialista",
      "2A8 – Verificación del funcionamiento del equipo",
      "2A9 – Documentación de la solución en ITSM",
    ],
    factoresExito: [
      "Canal de reporte accesible y operativo en todo momento para los usuarios",
      "Clasificación correcta y priorización precisa de tickets según impacto operativo",
      "Tiempo de respuesta y resolución dentro de los SLA acordados con el cliente",
      "Escalación oportuna al especialista cuando el técnico no puede resolver el caso",
      "Confirmación de satisfacción del usuario al cierre formal del ticket de incidente",
    ],
  },
  {
    id: "INV_03",
    nombre: "Gestión de inventario tecnológico",
    descripcion:
      "Proceso que registra, actualiza y monitorea el estado de todos los activos tecnológicos del cliente, desde el levantamiento físico inicial hasta la generación de reportes periódicos, apoyando la toma de decisiones estratégicas.",
    actividadesCriticas: [
      "3A3 – Levantamiento físico de activos tecnológicos",
      "3A4 – Captura de datos de activos en ITSM",
      "3A5 – Actualización del inventario post-intervención",
      "3A6 – Generación de reporte de estado del parque TI",
      "3A8 – Elaboración del plan de renovación tecnológica",
    ],
    factoresExito: [
      "Autorización formal del cliente para acceder a instalaciones e información",
      "Registro inicial completo y preciso de todos los activos tecnológicos en ITSM",
      "Actualización sistemática del inventario después de cada intervención realizada",
      "Generación oportuna y periódica de reportes de estado del parque tecnológico",
      "Aprobación formal del plan de renovación por parte de la dirección del cliente",
    ],
  },
] satisfies Proceso[];

export const activos: ActivoInfo[] = [
  {
    idProceso: "MAN_01",
    idActivo: "A-001",
    nombre: "Equipo de Cómputo",
    descripcion:
      "Dispositivos de hardware (computadoras de escritorio, laptops, impresoras y proyectores) que constituyen el objeto directo de intervención en el proceso de mantenimiento preventivo y/o correctivo.",
    clasificacion: "Crítico",
    relacionConOtros: true,
    relacionIds: "A-007",
  },
  {
    idProceso: "MAN_01",
    idActivo: "A-002",
    nombre: "Kit de Herramientas y Consumibles",
    descripcion:
      "Conjunto de herramientas físicas (desarmadores, multímetro, pinzas antiestáticas) y consumibles empleados para ejecutar las intervenciones técnicas en los equipos del cliente.",
    clasificacion: "No crítico",
    relacionConOtros: false,
    relacionIds: "—",
  },
  {
    idProceso: "MAN_01",
    idActivo: "A-003",
    nombre: "Reporte Técnico de Intervención",
    descripcion:
      "Documento formal generado al término de cada visita que registra las actividades realizadas, componentes reemplazados, estado final del equipo y recomendaciones de seguimiento. Requiere firma de conformidad del representante del cliente.",
    clasificacion: "Crítico",
    relacionConOtros: true,
    relacionIds: "A-004, A-007",
  },
  {
    idProceso: "SOP_02",
    idActivo: "A-004",
    nombre: "Plataforma ITSM",
    descripcion:
      "Sistema informático para registrar, clasificar, asignar, dar seguimiento y cerrar tickets de soporte. Centraliza la documentación de soluciones, el historial de incidencias y los tiempos de atención del servicio.",
    clasificacion: "Crítico",
    relacionConOtros: true,
    relacionIds: "A-003, A-005, A-007",
  },
  {
    idProceso: "SOP_02",
    idActivo: "A-005",
    nombre: "Historial de Tickets e Incidencias",
    descripcion:
      "Conjunto de registros históricos de todos los incidentes reportados: categoría, prioridad asignada, tiempo de atención, solución aplicada y nivel de satisfacción del usuario. Almacenado y gestionado dentro de la plataforma ITSM.",
    clasificacion: "Crítico",
    relacionConOtros: true,
    relacionIds: "A-004",
  },
  {
    idProceso: "SOP_02",
    idActivo: "A-006",
    nombre: "Canal de Comunicación con el Cliente",
    descripcion:
      "Medio oficial acordado (correo electrónico, sistema web o aplicación móvil) mediante el cual los usuarios reportan incidentes, reciben notificaciones de avance y confirman la resolución de sus solicitudes de soporte.",
    clasificacion: "No crítico",
    relacionConOtros: true,
    relacionIds: "A-004",
  },
  {
    idProceso: "INV_03",
    idActivo: "A-007",
    nombre: "Base de Datos de Inventario Tecnológico",
    descripcion:
      "Repositorio digital en la plataforma ITSM con el registro actualizado de todos los activos del cliente (marca, modelo, número de serie, estado físico-funcional, ubicación y usuario responsable), actualizado tras cada intervención técnica.",
    clasificacion: "Crítico",
    relacionConOtros: true,
    relacionIds: "A-001, A-003, A-004",
  },
  {
    idProceso: "INV_03",
    idActivo: "A-008",
    nombre: "Reporte Periódico de Estado del Parque TI",
    descripcion:
      "Documento consolidado que resume el estado general del parque tecnológico del cliente: equipos en buen estado, con fallas recurrentes u obsoletos, métricas de intervenciones realizadas e indicadores clave de desempeño del servicio.",
    clasificacion: "No crítico",
    relacionConOtros: true,
    relacionIds: "A-007",
  },
  {
    idProceso: "INV_03",
    idActivo: "A-009",
    nombre: "Plan de Renovación Tecnológica",
    descripcion:
      "Documento estratégico que prioriza la sustitución de equipos obsoletos o en riesgo, con estimación de inversión, calendario de reemplazo y criterios de criticidad. Sujeto a revisión y aprobación formal por la dirección del cliente.",
    clasificacion: "No crítico",
    relacionConOtros: true,
    relacionIds: "A-007, A-008",
  },
] satisfies ActivoInfo[];
