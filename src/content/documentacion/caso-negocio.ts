import type { Riesgo, PersonalItem, TerminoGlosario, Beneficio, HistoriaEvolucion } from "@/types/caso-negocio";

export const infoGeneral = {
  nombreServicio: "Servicios de soporte técnico IT",
  fechaElaboracion: "Febrero 2026",
  fechaInicio: "04 de febrero de 2026",
  fechaFinalizacion: "12 de junio de 2026",
  administrador: "Rocio Palacios Solano",
};

export const historiasEvolucion: HistoriaEvolucion[] = [
  {
    periodo: "Años 80",
    titulo: "Inicio de las mesas de ayuda",
    descripcion: [
      "Hewlett-Packard (HP) centraliza el soporte técnico para mejorar eficiencia y calidad.",
      "Se establece un punto único de contacto para todas las incidencias de TI.",
      "Beneficios: resolución más rápida, reducción de costos operativos, mejor satisfacción de usuarios.",
    ],
  },
  {
    periodo: "Años 90",
    titulo: "Formalización y sistemas de tickets",
    descripcion: [
      "Creciente complejidad de redes, servidores y software empresarial.",
      "Primeros help desks y sistemas de tickets para registrar y rastrear incidencias.",
      "Adopción del marco ITIL para estandarizar gestión de incidentes, problemas y cambios.",
    ],
  },
  {
    periodo: "Años 2000",
    titulo: "Servicios gestionados y monitoreo remoto",
    descripcion: [
      "Transición de soporte reactivo (break/fix) a enfoque proactivo.",
      "Herramientas de monitoreo y gestión remota (RMM) detectan y resuelven incidencias antes de que el usuario las note.",
      "Adopción de SLAs medibles como base para garantizar calidad y eficiencia.",
    ],
  },
  {
    periodo: "Años 2010",
    titulo: "Cloud, automatización y soporte multicanal",
    descripcion: [
      "Computación en la nube (Azure, AWS) transforma infraestructura e impacta el soporte TI.",
      "Automatización de tareas repetitivas y portales de autoservicio.",
      "Expansión a múltiples canales: chat, redes sociales, bases de conocimiento.",
      "Manejo de dispositivos móviles y políticas BYOD.",
    ],
  },
  {
    periodo: "Años 2020",
    titulo: "IA, Machine Learning y seguridad predictiva",
    descripcion: [
      "Inteligencia artificial para clasificación inicial de incidencias y enrutamiento inteligente.",
      "Resolución autónoma de problemas comunes.",
      "Soporte predictivo: anticipar fallos antes de interrumpir operaciones.",
      "Integración de ciberseguridad con principios de Zero Trust y monitoreo proactivo.",
    ],
  },
];

export const riesgosIdentificados: Riesgo[] = [
  {
    id: "R1",
    nombre: "Fuga de datos confidenciales",
    amenaza: "Ciberdelincuentes o atacantes externos que suplantan identidad",
    vulnerabilidad:
      "Falta de capacitación del staff y ausencia de un protocolo estricto de validación de identidad",
    relacion:
      'El atacante llama al soporte fingiendo ser un directivo que "olvidó su contraseña". Como el técnico no tiene un método para validar quién es, le da acceso libre.',
  },
  {
    id: "R2",
    nombre: "Desabasto o demora en la adquisición de refacciones y materiales",
    amenaza: "Proveedores únicos o escasos con tiempos de entrega impredecibles",
    vulnerabilidad:
      "Falta de un stock mínimo de refacciones críticas y ausencia de proveedores alternativos",
    relacion:
      "Si el único proveedor no tiene disponible una pieza clave, el equipo del cliente permanece inactivo hasta su llegada, incumpliendo los tiempos de atención comprometidos en el SLA",
  },
  {
    id: "R3",
    nombre: "Interrupción del servicio de soporte",
    amenaza: "Fallas de infraestructura o una caída inesperada del servicio",
    vulnerabilidad:
      "Ausencia de un plan de continuidad de negocio en la infraestructura del servicio de soporte",
    relacion:
      'Si el software de tickets está en un único servidor local y la luz falla, el equipo de soporte se queda "a ciegas", sin poder recibir ni rastrear incidentes.',
  },
  {
    id: "R4",
    nombre: "Indisponibilidad de personal técnico especializado",
    amenaza:
      "Rotación no planificada de técnicos o especialistas, ausentismo por enfermedad o incapacidad",
    vulnerabilidad:
      "El equipo operativo es pequeño sin plan de continuidad de personal ni personal de respaldo documentado",
    relacion:
      "Sin personal de respaldo, los tickets no se atienden dentro del tiempo máximo establecido en el SLA, afectando la disponibilidad del servicio y la satisfacción del cliente",
  },
  {
    id: "R5",
    nombre: "Daño accidental a equipos durante la intervención",
    amenaza: "Manipulación incorrecta del hardware por parte del personal técnico",
    vulnerabilidad:
      "Ausencia de protocolos estandarizados de intervención y falta de equipo antiestático adecuado",
    relacion:
      "Al manipular componentes internos sin las medidas adecuadas, una descarga electrostática o un mal ensamble puede dañar piezas funcionales, derivando en conflictos con el cliente y costos de reposición no contemplados",
  },
];

export const beneficiosEsperados: Beneficio[] = [
  {
    numero: 1,
    titulo: "Reducción de fallas en los equipos tecnológicos",
    descripcion:
      "La implementación de programas de mantenimiento preventivo permite identificar y corregir de forma oportuna posibles anomalías que pueden derivar en fallas críticas. Esto contribuye a disminuir la frecuencia de averías y a mantener los equipos en condiciones óptimas de funcionamiento.",
  },
  {
    numero: 2,
    titulo: "Mayor disponibilidad operativa de los equipos",
    descripcion:
      "La atención oportuna de incidentes técnicos y la prevención de fallas inesperadas permiten reducir los periodos de inactividad de los equipos, garantizando que los usuarios puedan continuar desarrollando sus actividades sin interrupciones prolongadas.",
  },
  {
    numero: 3,
    titulo: "Prolongación de la vida útil del hardware",
    descripcion:
      "El mantenimiento periódico de los dispositivos tecnológicos contribuye a reducir el desgaste prematuro de los componentes internos, lo que permite extender el ciclo de vida de los equipos y retrasar la necesidad de reemplazos costosos.",
  },
  {
    numero: 4,
    titulo: "Mejor control y gestión de los activos tecnológicos",
    descripcion:
      "La implementación de registros de intervención e inventarios de los equipos permite mantener información actualizada sobre el estado, características y ubicación de los activos tecnológicos de la organización, facilitando la planificación de mantenimientos y la toma de decisiones sobre renovación o sustitución de equipos.",
  },
  {
    numero: 5,
    titulo: "Optimización de los recursos tecnológicos de la organización",
    descripcion:
      "Al mantener los equipos funcionando dentro de sus parámetros adecuados de operación, el servicio contribuye a mejorar el aprovechamiento de los recursos tecnológicos existentes, evitando gastos innecesarios derivados de reparaciones mayores o reemplazos prematuros.",
  },
];

export const personalInvolucrado: PersonalItem[] = [
  {
    perfil: "Administrador del Servicio (Project Manager)",
    numero: 1,
    tipoContratacion: "Prestación de servicios profesionales",
    responsabilidades:
      "Supervisión general del proyecto, gestión de la relación con el cliente y cumplimiento de los objetivos específicos.",
  },
  {
    perfil: "Especialista en Diagnóstico y reparación",
    numero: 1,
    tipoContratacion: "Prestación de servicios profesionales",
    responsabilidades:
      "Supervisión de los diagnósticos complejos y validación de las intervenciones técnicas realizadas.",
  },
  {
    perfil: "Técnico de Soporte y mantenimiento",
    numero: 3,
    tipoContratacion: "Contrato por tiempo indeterminado",
    responsabilidades:
      "Ejecución de mantenimientos preventivos (limpieza, verificación) y atención de incidentes correctivos en las oficinas del cliente.",
  },
  {
    perfil: "Auxiliar Administrativo TI",
    numero: 1,
    tipoContratacion: "Contrato por tiempo indeterminado",
    responsabilidades:
      "Responsable de mantener el registro actualizado del estado de los equipos y la gestión del inventario tecnológico para las empresas clientes. Así como dar seguimiento a tickets a través del sistema de gestión de incidentes.",
  },
];

export const glosarioTecnico: TerminoGlosario[] = [
  {
    termino: "Mantenimiento correctivo",
    definicion:
      "Se refiere a las reparaciones realizadas en equipos y maquinaria después de que ya hayan fallado o presentado mal funcionamiento. Es un enfoque reactivo, donde el trabajo de mantenimiento se realiza en respuesta a la falla del equipo.",
  },
  {
    termino: "Mantenimiento preventivo",
    definicion:
      "Intervención técnica planificada y periódica, implica actividades de mantenimiento regulares y programadas con el objetivo de prevenir fallos en el equipo.",
  },
  {
    termino: "Soporte Break/Fix",
    definicion:
      "Es un enfoque reactivo a la hora de proporcionar servicios de soporte técnico que consiste en la intervención de los equipos de IT sólo cuando surge un problema específico o al momento en que se rompe el sistema, trabajando para resolverlo lo antes posible.",
  },
  {
    termino: "Servicios gestionados",
    definicion:
      "Los servicios gestionados se refieren a la externalización de las operaciones de TI a un proveedor externo, como un proveedor de servicios gestionados (MSP). Los MSP suelen ofrecer una gama de servicios que incluyen gestión de redes, ciberseguridad, copias de seguridad de datos y soporte informático.",
  },
  {
    termino: "Acuerdo de Nivel de Servicio (SLA)",
    definicion:
      "Es un contrato de proveedor de subcontratación y tecnología que define el nivel de servicio que dicho proveedor se compromete a brindar al cliente. Describe métricas como tiempo de actividad, tiempo de entrega, tiempo de respuesta y tiempo de resolución.",
  },
  {
    termino: "Zero Trust",
    definicion:
      "Es un modelo de seguridad que se usa para proteger a una organización, teniendo en cuenta que ninguna persona ni dispositivo es de confianza de forma predeterminada, aunque ya se encuentren en la red de la organización. El objetivo es eliminar la confianza implícita aplicando autenticación y autorización estrictas de identidad en toda la red.",
  },
];

export const objetivosEspecificos = [
  "Implementar un sistema organizado de gestión de incidentes y tickets que permita registrar, atender y dar seguimiento a las solicitudes de soporte técnico.",
  "Realizar mantenimientos preventivos periódicos en los equipos de cómputo, proyectores y pantallas para reducir la probabilidad de fallas y prolongar la vida útil del hardware.",
  "Atender de manera oportuna los incidentes técnicos que se presenten durante el uso de los equipos en oficinas.",
  "Mantener un registro actualizado del estado actual de los equipos y de las intervenciones técnicas realizadas.",
];
