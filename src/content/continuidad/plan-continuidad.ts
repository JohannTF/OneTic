import type {
  ERICMember,
  CriterioActivacion,
  ProcedimientoPorProceso,
  ControlISO,
  InfraestructuraCritica,
  PruebaMantenimiento,
} from "@/types/continuidad";

export const ericTeam: ERICMember[] = [
  {
    rol: "Coordinador",
    nombre: "Jesús Ochoa",
    cargo: "Administrador del servicio",
    contacto: "Ext. 5545845900",
    responsabilidades: [
      "Declarar activación/desactivación del PCN",
      "Notificar a clientes",
      "Tomar decisiones de escalación",
      "Contactar al proveedor ITSM",
    ],
  },
  {
    rol: "Responsable Técnico",
    nombre: "Félix Barrera",
    cargo: "Especialista en diagnóstico",
    contacto: "Ext. 5545845902",
    responsabilidades: [
      "Liderar recuperación técnica",
      "Ejecutar restauración de sistemas",
      "Evaluar daños en activos tecnológicos",
      "Asumir coordinación en ausencia del Coordinador",
    ],
  },
  {
    rol: "Responsable Operativo",
    nombre: "Mario Olvera",
    cargo: "Técnico de soporte",
    contacto: "Ext. 5545845901",
    responsabilidades: [
      "Ejecutar el proceso de continuidad en campo",
      "Gestionar kits y refacciones",
      "Priorizar equipos críticos",
    ],
  },
  {
    rol: "Responsable Administrativo",
    nombre: "Daniel Salgado",
    cargo: "Auxiliar administrativo TI",
    contacto: "Ext. 5545845903",
    responsabilidades: [
      "Activar canales alternos",
      "Mantener bitácora física",
      "Notificar internamente",
      "Cargar registros retroactivos en ITSM",
    ],
  },
];

export const criteriosActivacion: CriterioActivacion[] = [
  {
    escenario: "Caída de la plataforma ITSM (proveedor SaaS)",
    procesosAfectados: ["SOP_02", "INV_03", "MAN_01"],
    umbral: "Indisponibilidad > 1 hora continua en horario laboral",
    nivel: "CRÍTICO",
  },
  {
    escenario: "Ransomware o corrupción de la BD de inventario",
    procesosAfectados: ["INV_03", "MAN_01", "SOP_02"],
    umbral: "Pérdida o inaccesibilidad parcial/total de A-007",
    nivel: "CRÍTICO",
  },
  {
    escenario: "Acceso no autorizado al historial de tickets",
    procesosAfectados: ["SOP_02"],
    umbral: "Detección de acceso sin credenciales válidas a A-005",
    nivel: "CRÍTICO",
  },
  {
    escenario: "Indisponibilidad del personal técnico",
    procesosAfectados: ["MAN_01", "SOP_02"],
    umbral: "≥ 2 técnicos no operativos simultáneamente",
    nivel: "ALTO",
  },
  {
    escenario: "Pérdida o alteración del reporte técnico de intervención",
    procesosAfectados: ["MAN_01"],
    umbral: "Reporte sin firma de conformidad o con datos incorrectos detectados",
    nivel: "ALTO",
  },
  {
    escenario: "Falla del canal de comunicación oficial con el cliente",
    procesosAfectados: ["SOP_02"],
    umbral: "Canal principal inoperante > 2 horas",
    nivel: "MEDIO",
  },
  {
    escenario: "Indisponibilidad del kit de herramientas",
    procesosAfectados: ["MAN_01"],
    umbral: "Herramienta crítica no disponible para visita programada",
    nivel: "MEDIO",
  },
];

export const procedimientosporProceso: ProcedimientoPorProceso[] = [
  {
    idProceso: "MAN_01",
    nombre: "Mantenimiento preventivo y correctivo",
    rto: "2 horas hábiles",
    mtpod: "8 horas hábiles",
    mbco: "1 técnico + 1 especialista operativos; registro manual de intervenciones",
    pasos: [
      {
        paso: 1,
        accion: "Notificar al Coordinador del PCN e iniciar bitácora de incidente",
        responsable: "Daniel Salgado",
        tiempoMaximo: "0–15 min",
      },
      {
        paso: 2,
        accion: "Evaluar si la visita programada puede completarse con los recursos disponibles",
        responsable: "Félix Barrera",
        tiempoMaximo: "15–30 min",
      },
      {
        paso: 3,
        accion: "Reprogramar visitas no críticas al siguiente día hábil; priorizar equipos críticos",
        responsable: "Jesús Ochoa",
        tiempoMaximo: "30–45 min",
      },
      {
        paso: 4,
        accion: "Activar sustitución temporal: el especialista cubre intervenciones básicas",
        responsable: "Félix Barrera",
        tiempoMaximo: "30–60 min",
      },
      {
        paso: 5,
        accion: "Si ITSM no está disponible, documentar intervenciones en formato físico",
        responsable: "Mario Olvera",
        tiempoMaximo: "Durante la visita",
      },
      {
        paso: 6,
        accion: "Ejecutar diagnóstico remoto telefónico previo a la visita",
        responsable: "Mario Olvera / Félix Barrera",
        tiempoMaximo: "Antes de desplazamiento",
      },
      {
        paso: 7,
        accion: "Verificar stock de refacciones; si no está disponible, activar proveedor alterno",
        responsable: "Mario Olvera",
        tiempoMaximo: "Según necesidad",
      },
      {
        paso: 8,
        accion: "Al restaurarse el ITSM, cargar todos los reportes físicos al sistema",
        responsable: "Daniel Salgado",
        tiempoMaximo: "≤ 4 hrs post-restauración",
      },
    ],
  },
  {
    idProceso: "SOP_02",
    nombre: "Mesa de ayuda y sistema de tickets",
    rto: "2 horas hábiles",
    mtpod: "4 horas hábiles",
    mbco: "Canal alterno (e-mail) activo; bitácora física; 1 auxiliar TI + 1 técnico",
    pasos: [
      {
        paso: 1,
        accion: "Detectar la indisponibilidad del ITSM y notificar al Coordinador",
        responsable: "Daniel Salgado",
        tiempoMaximo: "0–15 min",
      },
      {
        paso: 2,
        accion: "Activar canal alterno: correo institucional (auxiliar@onetic.com) y línea telefónica",
        responsable: "Daniel Salgado",
        tiempoMaximo: "15–30 min",
      },
      {
        paso: 3,
        accion: "Notificar a todos los clientes activos sobre el canal alterno",
        responsable: "Jesús Ochoa",
        tiempoMaximo: "30 min",
      },
      {
        paso: 4,
        accion: "Abrir bitácora física de tickets para registrar incidentes entrantes",
        responsable: "Daniel Salgado",
        tiempoMaximo: "30 min",
      },
      {
        paso: 5,
        accion: "Clasificar y priorizar manualmente los incidentes según impacto",
        responsable: "Daniel Salgado",
        tiempoMaximo: "Continuo",
      },
      {
        paso: 6,
        accion: "Atender tickets de prioridad Alta dentro del SLA de 4 horas",
        responsable: "Mario Olvera / Félix Barrera",
        tiempoMaximo: "Dentro de 4 hrs",
      },
      {
        paso: 7,
        accion: "Escalar tickets de Alta prioridad no resolubles directamente al especialista",
        responsable: "Daniel Salgado",
        tiempoMaximo: "Según necesidad",
      },
      {
        paso: 8,
        accion: "Al restaurarse el ITSM, migrar todos los registros de la bitácora",
        responsable: "Daniel Salgado",
        tiempoMaximo: "≤ 4 hrs post-restauración",
      },
    ],
  },
  {
    idProceso: "INV_03",
    nombre: "Gestión de inventario tecnológico",
    rto: "4 horas hábiles",
    mtpod: "8 horas hábiles",
    mbco: "Acceso a hoja de cálculo local o respaldo; levantamiento físico manual",
    pasos: [
      {
        paso: 1,
        accion: "Detectar la indisponibilidad del ITSM o corrupción de la BD",
        responsable: "Daniel Salgado",
        tiempoMaximo: "0–15 min",
      },
      {
        paso: 2,
        accion: "Acceder al respaldo semanal exportado de la BD de inventario",
        responsable: "Félix Barrera",
        tiempoMaximo: "15–45 min",
      },
      {
        paso: 3,
        accion: "Habilitar hoja de cálculo local como registro alterno",
        responsable: "Daniel Salgado",
        tiempoMaximo: "45–60 min",
      },
      {
        paso: 4,
        accion: "Ejecutar levantamientos físicos con formatos impresos",
        responsable: "Daniel Salgado",
        tiempoMaximo: "Durante visitas",
      },
      {
        paso: 5,
        accion: "Generar reportes de estado básicos (Excel/PDF) desde el respaldo local",
        responsable: "Jesús Ochoa",
        tiempoMaximo: "Según vencimiento",
      },
      {
        paso: 6,
        accion: "Contactar al proveedor ITSM e iniciar procedimiento de restauración",
        responsable: "Jesús Ochoa / Félix Barrera",
        tiempoMaximo: "0–90 min",
      },
      {
        paso: 7,
        accion: "Al restaurarse el ITSM, cargar retroactivamente todos los cambios",
        responsable: "Daniel Salgado",
        tiempoMaximo: "≤ 4 hrs post-restauración",
      },
    ],
  },
];

export const controlesISO: ControlISO[] = [
  {
    id: "A.5.29",
    nombre: "Seguridad de la información durante la interrupción",
    descripcion:
      "Mantener controles de seguridad (cifrado, RBAC, MFA) activos incluso en modo degradado. Los canales alternos deben cumplir los mismos requisitos de confidencialidad.",
    activosProtegidos: ["A-003", "A-004", "A-005", "A-007"],
    implementacion: "Controles de seguridad activos en modo degradado",
    responsable: "Jesús Ochoa",
  },
  {
    id: "A.5.30",
    nombre: "Preparación de TIC para la continuidad del negocio",
    descripcion:
      "Definir y probar el plan de recuperación del ITSM con RTO ≤ 2 hrs para SOP_02, ≤ 4 hrs para INV_03. Incluir cláusula de SLA con penalidades.",
    activosProtegidos: ["A-004", "A-007"],
    implementacion: "Prueba semestral del procedimiento de restauración",
    responsable: "Félix Barrera",
  },
  {
    id: "A.8.13",
    nombre: "Respaldo de la información",
    descripcion:
      "Backups automáticos diarios cifrados de la BD de inventario con retención de 30 días. Prueba de restauración completa trimestralmente.",
    activosProtegidos: ["A-007"],
    implementacion: "Almacenamiento en ubicación separada del sistema principal",
    responsable: "Félix Barrera / Daniel Salgado",
  },
  {
    id: "A.5.15 / A.8.2",
    nombre: "Control de acceso y gestión de privilegios",
    descripcion:
      "Implementar RBAC con perfiles por rol (Administrador, Técnico, Auxiliar). Auditoría mensual de accesos al historial de tickets.",
    activosProtegidos: ["A-005"],
    implementacion: "Desactivación inmediata de credenciales de personal que concluya relación",
    responsable: "Jesús Ochoa",
  },
  {
    id: "A.8.24",
    nombre: "Uso de criptografía",
    descripcion:
      "Cifrar datos en reposo (BD de inventario e historial de tickets) y en tránsito (TLS 1.2+ para todas las comunicaciones). Activar MFA.",
    activosProtegidos: ["A-005", "A-007"],
    implementacion: "Cifrado en reposo y en tránsito con MFA para acceso administrativo",
    responsable: "Félix Barrera",
  },
  {
    id: "A.5.26",
    nombre: "Respuesta a incidentes de seguridad",
    descripcion:
      "Registrar todos los incidentes de seguridad en la bitácora del PCN. Notificar al Coordinador en máximo 15 minutos. Análisis de causa raíz en 72 hrs.",
    activosProtegidos: ["A-003", "A-004", "A-005", "A-007"],
    implementacion: "Preservar evidencia digital y documentar en bitácora",
    responsable: "Jesús Ochoa / Félix Barrera",
  },
  {
    id: "A.6.3",
    nombre: "Concienciación, educación y formación en seguridad",
    descripcion:
      "Capacitación anual del equipo en el procedimiento de continuidad. Simulacro semestral de activación del PCN.",
    activosProtegidos: ["Todos"],
    implementacion: "Actualización del plan ante cambios en procesos, personal o tecnología",
    responsable: "Jesús Ochoa",
  },
];

export const infraestructurasCriticas: InfraestructuraCritica[] = [
  {
    id: "A-007",
    nombre: "Base de datos de inventario tecnológico",
    criticidad: "V — Muy Alto",
    amenaza: "Ransomware o corrupción de datos",
    riesgoTotal: 1050,
    fases: [
      {
        nombre: "Detección",
        accion: "Monitoreo continuo con alertas automáticas de integridad. Umbral: cualquier modificación masiva no autorizada.",
        tiempoObjetivo: "< 15 min",
      },
      {
        nombre: "Contención",
        accion: "Aislar el sistema afectado de la red. Desconectar el ITSM del almacenamiento primario.",
        tiempoObjetivo: "< 30 min",
      },
      {
        nombre: "Evaluación",
        accion: "Determinar el alcance de la pérdida comparando con el último respaldo íntegro.",
        tiempoObjetivo: "30–60 min",
      },
      {
        nombre: "Restauración",
        accion: "Restaurar la BD desde el respaldo más reciente cifrado (máximo 24 hrs de antigüedad).",
        tiempoObjetivo: "1–3 hrs",
      },
      {
        nombre: "Validación",
        accion: "Comparar registro restaurado con el inventario físico para identificar inconsistencias.",
        tiempoObjetivo: "1–2 hrs",
      },
      {
        nombre: "Carga retroactiva",
        accion: "Ingresar manualmente los cambios de estado ocurridos durante la interrupción.",
        tiempoObjetivo: "≤ 4 hrs",
      },
    ],
  },
  {
    id: "A-004",
    nombre: "Plataforma ITSM",
    criticidad: "V — Muy Alto",
    amenaza: "Caída del proveedor SaaS",
    riesgoTotal: 720,
    fases: [
      {
        nombre: "Detección",
        accion: "Alerta automática de monitoreo de uptime (≥ 1 hr de indisponibilidad en horario hábil).",
        tiempoObjetivo: "< 15 min",
      },
      {
        nombre: "Notificación",
        accion: "Contactar al proveedor ITSM por el canal de soporte prioritario. Obtener ETA documentado.",
        tiempoObjetivo: "< 30 min",
      },
      {
        nombre: "Modo alterno",
        accion: "Activar procedimientos manuales de SOP_02 e INV_03. Habilitar bitácora física y correo institucional.",
        tiempoObjetivo: "< 1 hr",
      },
      {
        nombre: "Seguimiento",
        accion: "El Coordinador revisa el estado cada 30 minutos y actualiza al equipo y clientes.",
        tiempoObjetivo: "Cada 30 min",
      },
      {
        nombre: "Restauración",
        accion: "Validar acceso al ITSM. Verificar integridad de datos antes de comunicar la restauración.",
        tiempoObjetivo: "Según proveedor (máx. MTPoD)",
      },
      {
        nombre: "Migración",
        accion: "Cargar retroactivamente todos los registros del modo alterno al ITSM.",
        tiempoObjetivo: "≤ 4 hrs",
      },
    ],
  },
  {
    id: "A-005",
    nombre: "Historial de tickets e incidencias",
    criticidad: "V — Muy Alto",
    amenaza: "Acceso no autorizado",
    riesgoTotal: 520,
    fases: [
      {
        nombre: "Detección",
        accion: "Sistema de alertas RBAC: notificación ante acceso fuera de horario o desde IP no autorizada.",
        tiempoObjetivo: "< 15 min",
      },
      {
        nombre: "Contención",
        accion: "Revocar inmediatamente las credenciales comprometidas. Bloquear la sesión activa.",
        tiempoObjetivo: "< 30 min",
      },
      {
        nombre: "Evaluación",
        accion: "Auditar el log de accesos para determinar qué registros fueron accedidos o modificados.",
        tiempoObjetivo: "30–90 min",
      },
      {
        nombre: "Notificación",
        accion: "Si se confirma acceso a datos de clientes, notificar formalmente a los afectados en 72 hrs.",
        tiempoObjetivo: "≤ 72 hrs",
      },
      {
        nombre: "Remediación",
        accion: "Restaurar registros modificados desde respaldo. Fortalecer la configuración RBAC.",
        tiempoObjetivo: "≤ 4 hrs",
      },
      {
        nombre: "Investigación",
        accion: "Análisis forense del incidente para identificar el vector de ataque y prevenir recurrencia.",
        tiempoObjetivo: "≤ 72 hrs",
      },
    ],
  },
  {
    id: "A-003",
    nombre: "Reporte técnico de intervención",
    criticidad: "IV — Alto",
    amenaza: "Alteración o pérdida del reporte",
    riesgoTotal: 330,
    fases: [
      {
        nombre: "Prevención",
        accion: "Digitalizar todos los reportes en ITSM al cierre de cada visita. Firma electrónica como constancia.",
        tiempoObjetivo: "Inmediato (proceso estándar)",
      },
      {
        nombre: "Detección",
        accion: "Si el reporte no está firmado o contiene inconsistencias, notificar de inmediato.",
        tiempoObjetivo: "< 1 hr tras detección",
      },
      {
        nombre: "Recuperación",
        accion: "Reconstruir el reporte a partir del registro en ITSM y comunicación con el cliente.",
        tiempoObjetivo: "< 4 hrs",
      },
      {
        nombre: "Prevención de disputa",
        accion: "Si el cliente rechaza el reporte, documentar la discrepancia y escalar para mediación.",
        tiempoObjetivo: "< 24 hrs",
      },
    ],
  },
];

export const pruebasMantenimiento: PruebaMantenimiento[] = [
  {
    tipo: "Revisión documental del PCN",
    frecuencia: "Anual (Junio)",
    alcance: "Verificar vigencia de contactos, procedimientos y alineación con cambios",
    responsable: "Jesús Ochoa",
    evidencia: "Acta de revisión firmada",
  },
  {
    tipo: "Prueba de restauración de BD de inventario",
    frecuencia: "Trimestral",
    alcance: "Restaurar la BD desde el respaldo más reciente en un entorno de prueba",
    responsable: "Félix Barrera",
    evidencia: "Log de restauración + informe de inconsistencias",
  },
  {
    tipo: "Simulacro de caída del ITSM",
    frecuencia: "Semestral (Dic / Jun)",
    alcance: "Activar procedimientos manuales de SOP_02 e INV_03 durante 2 horas",
    responsable: "Jesús Ochoa (Coord.) + todo el ERIC",
    evidencia: "Bitácora del simulacro + informe de lecciones aprendidas",
  },
  {
    tipo: "Prueba de canales alternos",
    frecuencia: "Semestral",
    alcance: "Verificar operatividad del correo alterno, líneas telefónicas y formatos físicos",
    responsable: "Daniel Salgado",
    evidencia: "Registro de prueba con marca de tiempo",
  },
  {
    tipo: "Auditoría de accesos RBAC",
    frecuencia: "Mensual",
    alcance: "Revisar log de accesos; verificar que no existan cuentas inactivas con acceso activo",
    responsable: "Félix Barrera",
    evidencia: "Informe de auditoría de accesos",
  },
  {
    tipo: "Capacitación del ERIC",
    frecuencia: "Anual",
    alcance: "Taller de revisión del PCN con todo el equipo; actualización de roles y procedimientos",
    responsable: "Jesús Ochoa",
    evidencia: "Lista de asistencia + evaluación",
  },
];
