import type { Subservicio } from "@/types/identidad";
import type {
  OlaItem,
  RaciActividad,
  RolContacto,
  ServicioTipo,
  SlaItem,
} from "@/types/documentacion";

export const cedulaDeServicio = {
  eyebrow: "Capítulo 03 · Documentación de Servicio",
  title: "Cédula de Servicio",
  lead: "Documento formal que consolida la definición operativa del Servicio de Soporte Técnico de TI de OneTic bajo el marco ITIL: alcance, responsables, condiciones, arquitectura y niveles de servicio comprometidos.",

  infoGeneral: {
    empresa: "OneTic",
    departamento: "IT",
    nombreServicio: "Servicio de Soporte Técnico de TI",
    tipos: ["Nuevo", "Cambio", "Retiro", "Activo"] as ServicioTipo[],
    tipoActivo: "Nuevo" as ServicioTipo,
    subservicios: [
      "Mantenimiento preventivo y correctivo",
      "Gestión de mesa de ayuda y sistema de tickets",
      "Gestión de inventario tecnológico",
    ],
  },

  descripcion:
    "Se ofrece un servicio profesional de soporte técnico y mantenimiento para la infraestructura tecnológica de PyMEs dentro del área metropolitana, estructurado en tres líneas de servicio integradas que cubren el mantenimiento de activos, la atención de incidentes y la administración del inventario tecnológico.",

  subservicios: [
    {
      id: "SS-01",
      title: "Mantenimiento preventivo y correctivo",
      description:
        "Mantenimiento preventivo y correctivo de activos tecnológicos, incluyendo limpieza técnica, revisión de componentes, diagnóstico y reparación para garantizar su correcto funcionamiento y prolongar su vida útil.",
      detail:
        "Intervenciones periódicas programadas bajo protocolo estandarizado para mitigar el desgaste físico y reducir fallas imprevistas.",
    },
    {
      id: "SS-02",
      title: "Mesa de ayuda y sistema de tickets",
      description:
        "Registro, clasificación, asignación y resolución de incidentes TI mediante plataforma ITSM con SLA definido.",
      detail:
        "Respuesta remota en máx. 4 hrs hábiles. Atención presencial en máx. 24 hrs para incidentes críticos y 48 hrs para mantenimiento programado.",
    },
    {
      id: "SS-03",
      title: "Gestión de inventario tecnológico",
      description:
        "Levantamiento, registro, actualización y análisis del ciclo de vida de activos TI de cada empresa cliente.",
      detail:
        "Control actualizado del estado, características y ubicación de cada activo para planificar mantenimientos y renovaciones.",
    },
  ] satisfies Subservicio[],

  ficha: {
    objetivo:
      "Garantizar la disponibilidad, estabilidad y buen funcionamiento de los activos tecnológicos de las organizaciones contratantes mediante intervenciones preventivas periódicas, atención oportuna a incidentes y una gestión estructurada del inventario.",
    usuarios: [
      "Empleados operativos dentro de las PyMEs",
      "Gerentes de área y directivos de empresas PyME",
    ],
    beneficios: [
      "Reducción de fallas críticas en hardware.",
      "Mayor disponibilidad operativa de los equipos.",
      "Prolongación de la vida útil del hardware en las empresas.",
      "Control actualizado del inventario tecnológico.",
    ],
    demanda:
      "El servicio operará de febrero a junio de 2026 (5 meses), cubriendo un total de 8,320 horas técnicas de atención directa. La demanda estimada abarca 3 empresas clientes dentro del período inicial, con posibilidad de expansión según el volumen de tickets y mantenimientos programados.",
  },

  raci: [
    { actividad: "Programar visita para el servicio", asignaciones: { admin: "A", tecnico: "R" } },
    {
      actividad: "Preparación de herramientas y equipo necesario",
      asignaciones: { admin: "A", tecnico: "R" },
    },
    {
      actividad: "Efectuar el mantenimiento preventivo a los dispositivos",
      asignaciones: { admin: "A", tecnico: "R" },
    },
    { actividad: "Diagnosticar fallas avanzadas", asignaciones: { admin: "A", especialista: "R" } },
    {
      actividad: "Reemplazar componentes o realizar ajustes a los equipos",
      asignaciones: { admin: "A", tecnico: "C", especialista: "R" },
    },
    {
      actividad: "Verificar funcionamiento post-intervención de los equipos tratados",
      asignaciones: { admin: "A", tecnico: "R", especialista: "R" },
    },
    {
      actividad: "Generar reporte de intervención",
      asignaciones: { admin: "A", tecnico: "R", especialista: "I" },
    },
    { actividad: "Registrar y clasificar tickets", asignaciones: { admin: "A", auxiliar: "R" } },
    {
      actividad: "Asignar técnicos y personal necesario al ticket",
      asignaciones: { admin: "A", auxiliar: "R" },
    },
    {
      actividad: "Documentar solución / cierre de ticket para la incidencia atendida",
      asignaciones: { admin: "A", tecnico: "R", auxiliar: "I" },
    },
    {
      actividad: "Actualizar inventario de la empresa",
      asignaciones: { admin: "A", tecnico: "R", auxiliar: "C" },
    },
    {
      actividad: "Validación y aprobación del servicio proporcionado",
      asignaciones: { admin: "A", tecnico: "C", especialista: "R", auxiliar: "I" },
    },
  ] satisfies RaciActividad[],

  contactos: [
    {
      rol: "Administrador del servicio",
      nombre: "Jesús Ochoa",
      correo: "adminservice@onetic.com",
      telefono: "5545845900",
      horario: "Lun-Vie 9:00-18:00",
    },
    {
      rol: "Técnico de soporte",
      nombre: "Mario Olvera",
      correo: "soportetec@onetic.com",
      telefono: "5545845901",
      horario: "Lun-Vie 8:00-17:00",
    },
    {
      rol: "Especialista en diagnóstico",
      nombre: "Félix Barrera",
      correo: "especialistadiag@onetic.com",
      telefono: "5545845902",
      horario: "Lun-Vie 9:00-18:00",
    },
    {
      rol: "Auxiliar administrativo de TI",
      nombre: "Daniel Salgado",
      correo: "auxiliar@onetic.com",
      telefono: "5545845903",
      horario: "Lun-Vie 8:00-17:00",
    },
  ] satisfies RolContacto[],

  condiciones: [
    "El cliente debe suscribir un contrato de servicio que especifique el alcance, los equipos cubiertos y los SLA aplicables.",
    "El cliente debe otorgar el acceso físico a sus instalaciones y equipos en las fechas programadas, con al menos 48 horas de anticipación para cancelaciones o reprogramaciones.",
    "Todos los equipos a intervenir deben estar registrados en el sistema ITSM antes del inicio de cada visita.",
    "El cliente debe asignar un representante responsable de validar y firmar los reportes de intervención.",
    "El servicio opera en días hábiles de lunes a viernes; las atenciones fuera de horario están sujetas a disponibilidad y costo adicional.",
    "Las refacciones no incluidas en el stock se podrán proporcionar a través de un proveedor alterno siempre que el cliente autorice su adquisición. En caso contrario, el cliente deberá adquirir dicha refacción.",
    "El proveedor no se responsabiliza de daños preexistentes en los equipos no documentados en el levantamiento inicial.",
  ],

  sla: [
    {
      tipo: "Disponibilidad",
      compromiso:
        "El servicio estará disponible en días hábiles de lunes a viernes en horario de 8:00 a 18:00 hrs. Atenciones fuera de horario sujetas a disponibilidad y costo adicional.",
    },
    {
      tipo: "Soporte vía remota y presencial",
      compromiso:
        "Respuesta remota: máx. 4 hrs hábiles. Atención presencial: máx. 24 hrs para incidentes críticos y 48 hrs para mantenimiento programado.",
    },
    {
      tipo: "Confidencialidad",
      compromiso:
        "La información del cliente será tratada con estricta confidencialidad. El personal firmará NDA antes del inicio del servicio. Los datos del cliente no serán compartidos con terceros.",
    },
    {
      tipo: "Seguridad",
      compromiso:
        "El acceso a instalaciones y sistemas del cliente se realizará únicamente con autorización previa. Las credenciales de acceso temporal serán revocadas al término de cada intervención y todas las actividades quedarán documentadas en el reporte correspondiente.",
    },
  ] satisfies SlaItem[],

  olaAplicaciones: [
    {
      aspecto: "Capacidad",
      compromiso: "Soporte para hasta 200 tickets activos por mes.",
      metrica: "Número de tickets gestionados mensualmente",
    },
    {
      aspecto: "Disponibilidad",
      compromiso: "Disponible en días hábiles Lun-Vie 8:00–18:00.",
      metrica: "% de tiempo operativo mensual",
    },
    {
      aspecto: "Seguridad",
      compromiso: "Acceso restringido por rol.",
      metrica: "Incidentes de seguridad registrados",
    },
    {
      aspecto: "Respaldos",
      compromiso: "Respaldo semanal de registros e inventario.",
      metrica: "Frecuencia y éxito de respaldos",
    },
    {
      aspecto: "Mantenimiento",
      compromiso: "Ventanas de mantenimiento fuera de horario laboral.",
      metrica: "Tiempo de inactividad por mantenimiento",
    },
    {
      aspecto: "Mantenibilidad",
      compromiso: "RTO: máx. 4 hrs; RPO: máx. 24 hrs.",
      metrica: "Tiempo de recuperación ante falla",
    },
    {
      aspecto: "Soporte al cliente",
      compromiso: "Escalamiento a especialista en menos de 2 hrs hábiles.",
      metrica: "Tiempo promedio de resolución (MTTR)",
    },
  ] satisfies OlaItem[],

  olaSoftware: [
    {
      aspecto: "Capacidad",
      compromiso: "Soporta 3 empresas cliente y 16 agentes simultáneos.",
      metrica: "Número de usuarios y empresas activas",
    },
    {
      aspecto: "Disponibilidad",
      compromiso: "Disponible en horario de servicio con mínimas interrupciones.",
      metrica: "% de uptime mensual",
    },
    {
      aspecto: "Seguridad",
      compromiso: "Acceso por credenciales; sesiones auditadas.",
      metrica: "Número de accesos no autorizados",
    },
    {
      aspecto: "Respaldos",
      compromiso: "Snapshot diario de base de datos; retención 90 días.",
      metrica: "Frecuencia de respaldo y tiempo de restauración",
    },
    {
      aspecto: "Mantenimiento",
      compromiso: "Correcciones aplicadas en máx. 72 hrs tras detección.",
      metrica: "Tiempo entre detección y corrección",
    },
    {
      aspecto: "Mantenibilidad",
      compromiso: "MTTR: máx. 4 hrs; código documentado.",
      metrica: "Tiempo promedio de reparación",
    },
  ] satisfies OlaItem[],
};
