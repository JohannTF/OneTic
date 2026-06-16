"use client";

import { Reveal } from "@/components/ui/interactions/Reveal";
import { DataTable } from "@/components/ui/data-display/DataTable";

// ── Helpers visuales ──────────────────────────────────────────────
type Priority = 1 | 2 | 3;

const PRIORITY_STYLE: Record<Priority, string> = {
  1: "bg-danger-subtle text-danger",
  2: "bg-warning-subtle text-warning",
  3: "bg-surface-2 text-text-secondary",
};

function PriorityBadge({ level }: { level: Priority }) {
  return (
    <span
      className={`font-mono inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[10px] font-bold ${PRIORITY_STYLE[level]}`}
    >
      P{level}
    </span>
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

function SubLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 mt-8 flex items-center gap-3">
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-disabled">
        {label}
      </span>
      <span className="h-px flex-1 bg-border-subtle" />
    </div>
  );
}

function Note({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="mt-5 rounded-xl border border-border-subtle bg-surface-1 p-5">
      <p className="font-mono mb-2 text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
        {titulo}
      </p>
      <p className="text-[13.5px] leading-[1.65] text-text-secondary">{texto}</p>
    </div>
  );
}

// ── Tipos y helpers de datos ───────────────────────────────────────
type Resource = { nombre: string; descripcion: string; prioridad: Priority };

const RESOURCE_COLS = [
  { key: "nombre",      label: "Recurso",     className: "min-w-[190px]" },
  { key: "descripcion", label: "Descripción" },
  { key: "prioridad",   label: "Prioridad",   className: "w-24" },
];

function makeRows(items: Resource[]) {
  return items.map(({ nombre, descripcion, prioridad }) => ({
    nombre:      <span className="font-medium text-text-primary">{nombre}</span>,
    descripcion: <span className="text-text-secondary">{descripcion}</span>,
    prioridad:   <PriorityBadge level={prioridad} />,
  }));
}

// ── Datos ─────────────────────────────────────────────────────────
const PERSONAL: Resource[] = [
  {
    nombre: "Técnico de soporte y mantenimiento (3 personas)",
    descripcion:
      "Ejecuta las intervenciones preventivas y correctivas en sitio: limpieza técnica, verificación de componentes y registro de la intervención en ITSM. Recurso más crítico por volumen de intervenciones. Es el recurso de contacto directo con el cliente.",
    prioridad: 1,
  },
  {
    nombre: "Especialista en diagnóstico y reparación (1 persona)",
    descripcion:
      "Atiende fallas de mayor complejidad: diagnóstico avanzado, reemplazo de componentes, decisiones sobre baja o renovación de equipos y validación del funcionamiento post-intervención. Indispensable para mantenimiento correctivo. Punto crítico de falla por ser recurso único.",
    prioridad: 1,
  },
  {
    nombre: "Administrador del servicio (1 persona)",
    descripcion:
      "Planifica el programa de visitas, asigna técnicos, gestiona la relación con el cliente y valida los reportes de intervención. Punto de contacto principal ante cualquier interrupción.",
    prioridad: 2,
  },
  {
    nombre: "Auxiliar administrativo TI (1 persona)",
    descripcion:
      "Actualiza el inventario post-intervención y da seguimiento a tickets en el ITSM. Su ausencia impacta el registro, pero no detiene la ejecución del mantenimiento.",
    prioridad: 3,
  },
];

const INFORMACION: { nombre: string; formato: string; prioridad: Priority }[] = [
  {
    nombre: "Reporte técnico de intervención (A-003)",
    formato: "Electrónico (ITSM) / Papel con firma de conformidad del cliente",
    prioridad: 1,
  },
  {
    nombre: "Base de datos de inventario tecnológico (A-007)",
    formato: "Electrónico — repositorio en plataforma ITSM",
    prioridad: 1,
  },
  {
    nombre: "Cronograma de mantenimiento preventivo",
    formato: "Electrónico (calendario compartido / ITSM)",
    prioridad: 2,
  },
  {
    nombre: "Historial de tickets e incidencias (A-005)",
    formato: "Electrónico — plataforma ITSM",
    prioridad: 2,
  },
  {
    nombre: "Contrato de servicio con el cliente",
    formato: "Electrónico / Papel",
    prioridad: 3,
  },
];

const EDIFICIOS: Resource[] = [
  {
    nombre: "Instalaciones del cliente (3 empresas)",
    descripcion:
      "Oficinas de las PyMEs cliente donde se encuentran los equipos a intervenir. El acceso físico autorizado es condición indispensable para ejecutar el mantenimiento.",
    prioridad: 1,
  },
  {
    nombre: "Oficina / base de operaciones OneTic",
    descripcion:
      "Espacio donde el técnico prepara y organiza el kit de herramientas, consumibles y refacciones antes de cada visita. No es crítico si el técnico puede operar directamente desde sitio.",
    prioridad: 2,
  },
];

const INSTALACIONES_MOB: Resource[] = [
  {
    nombre: "Vehículo de transporte a sitio del cliente",
    descripcion:
      "Medio de traslado del técnico a las instalaciones del cliente. Su indisponibilidad impide la intervención presencial.",
    prioridad: 1,
  },
  {
    nombre: "Bodega / área de almacenamiento de refacciones",
    descripcion:
      "Espacio físico donde se resguarda el stock de refacciones, consumibles y herramientas de repuesto para las intervenciones.",
    prioridad: 2,
  },
];

const EQUIP_CONSUMIBLES: Resource[] = [
  {
    nombre: "Kit de herramientas técnicas",
    descripcion:
      "Desarmadores, pinzas antiestáticas, multímetro. Indispensables para abrir equipos, diagnosticar y reemplazar componentes.",
    prioridad: 1,
  },
  {
    nombre: "Consumibles de limpieza",
    descripcion:
      "Aire comprimido, sopladora eléctrica, kit de limpieza externa y paños. Necesarios para el mantenimiento preventivo; sin ellos no se puede ejecutar la limpieza técnica interna.",
    prioridad: 1,
  },
  {
    nombre: "Stock de refacciones (cables, periféricos, RAM)",
    descripcion:
      "Su disponibilidad determina si un mantenimiento correctivo puede completarse en la misma visita.",
    prioridad: 2,
  },
  {
    nombre: "Tableta para registro de evidencias",
    descripcion:
      "Dispositivo portátil utilizado para capturar fotografías de evidencia y registrar datos en el ITSM durante la visita al cliente.",
    prioridad: 2,
  },
];

const SISTEMAS: Resource[] = [
  {
    nombre: "Plataforma ITSM (A-004)",
    descripcion:
      "Sistema central para registro de intervenciones, actualización del inventario, cierre de tickets y generación de reportes técnicos.",
    prioridad: 1,
  },
  {
    nombre: "Canal de comunicación con el cliente (A-006)",
    descripcion:
      "Medio oficial (correo electrónico, sistema web o aplicación) para coordinar visitas, confirmar accesos y notificar el resultado de las intervenciones.",
    prioridad: 2,
  },
  {
    nombre: "Acceso a internet / conectividad",
    descripcion:
      "Requerida para que los técnicos registren evidencias y actualicen el ITSM desde las instalaciones del cliente mediante tabletas.",
    prioridad: 2,
  },
];

const TRANSPORTE: Resource[] = [
  {
    nombre: "Vehículo propio / transporte contratado para técnicos",
    descripcion:
      "Medio principal de traslado del técnico a las instalaciones del cliente. Su indisponibilidad impide directamente la ejecución de intervenciones presenciales.",
    prioridad: 1,
  },
];

const FINANZAS: Resource[] = [
  {
    nombre: "Presupuesto operativo para insumos y refacciones",
    descripcion:
      "Fondos destinados a la adquisición de consumibles (aire comprimido, pasta térmica, kit de limpieza) y refacciones de reemplazo. Su indisponibilidad detiene la ejecución del mantenimiento correctivo.",
    prioridad: 1,
  },
  {
    nombre: "Nómina del equipo técnico (5 meses)",
    descripcion:
      "Pago mensual al equipo técnico completo (16 personas): 10 técnicos, 2 especialistas, 1 administrador y 3 auxiliares. Total nómina 5 meses: $315,000 MXN. Sin este recurso el personal no opera.",
    prioridad: 1,
  },
  {
    nombre: "Fondo de contingencia para refacciones no previstas",
    descripcion:
      "Reserva para adquisición urgente de piezas no disponibles en el stock mínimo. Permite cubrir fallas correctivas de mayor costo sin interrumpir el servicio.",
    prioridad: 2,
  },
];

const PROVEEDORES: Resource[] = [
  {
    nombre: "Proveedor de refacciones y consumibles de hardware",
    descripcion:
      "Empresa proveedora de pasta térmica, aire comprimido, kits de limpieza, cables, memorias RAM y otros componentes de reemplazo. Su tiempo de entrega impacta directamente el SLA correctivo.",
    prioridad: 1,
  },
  {
    nombre: "Proveedor de licencias ITSM",
    descripcion:
      "Empresa que provee las 5 licencias del sistema de gestión de tickets y activos (costo: $15,000 MXN). Su disponibilidad es condición para registrar y dar seguimiento a las intervenciones.",
    prioridad: 1,
  },
  {
    nombre: "Proveedor de herramientas especializadas",
    descripcion:
      "Proveedor de equipos de diagnóstico avanzado (multímetro, sopladora eléctrica) y herramientas de reemplazo cuando las del técnico presenten falla.",
    prioridad: 2,
  },
  {
    nombre: "Empresas cliente (PyMEs)",
    descripcion:
      "Las 3 organizaciones cliente que contratan el servicio. Su disponibilidad para autorizar el acceso y asignar un representante es condición para ejecutar cualquier visita programada.",
    prioridad: 1,
  },
];

// ── Componente ────────────────────────────────────────────────────
export function BiaOperacionalMAN01() {
  return (
    <article className="flex flex-col gap-20">

      {/* Cabecera del proceso */}
      <Reveal>
        <div className="flex flex-col gap-1.5">
          <span className="font-mono inline-flex items-center rounded-md bg-accent-subtle px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent-primary ring-1 ring-inset ring-accent-primary/25">
            MAN_01
          </span>
          <h2 className="text-[22px] font-semibold leading-snug text-text-primary">
            Mantenimiento preventivo y correctivo de equipos de cómputo
          </h2>
        </div>
      </Reveal>

      {/* ── Instrucción ──────────────────────────────────────────── */}
      <section id="man01-instruccion" className="scroll-mt-24">
        <SectionEyebrow label="Instrucción" />
        <Reveal>
          <p className="max-w-[72ch] text-[15px] leading-[1.7] text-text-secondary">
            El análisis de impacto al negocio (BIA) es el proceso de analizar actividades críticas
            y el efecto que una interrupción en dichas actividades tendría sobre la continuidad del
            servicio. El presente documento aplica el BIA al proceso MAN_01 del servicio de soporte
            técnico IT de OneTic, identificando los recursos críticos necesarios para su operación,
            sus prioridades de recuperación y las dependencias entre ellos.
          </p>
        </Reveal>
      </section>

      {/* ── Objetivo ─────────────────────────────────────────────── */}
      <section id="man01-objetivo" className="scroll-mt-24">
        <SectionEyebrow label="Objetivo" />
        <Reveal>
          <p className="max-w-[72ch] text-[15px] leading-[1.7] text-text-secondary">
            Identificar y documentar los recursos críticos, dependencias operativas y prioridades
            de recuperación del proceso MAN_01 (Mantenimiento preventivo y correctivo de equipos de
            cómputo), con el fin de establecer las bases para una estrategia de continuidad que
            garantice la disponibilidad del servicio dentro de los SLA acordados.
          </p>
        </Reveal>
      </section>

      {/* ── Grupo de servicios ───────────────────────────────────── */}
      <section id="man01-grupo" className="scroll-mt-24">
        <SectionEyebrow label="Identificación del grupo de servicios" />
        <Reveal>
          <DataTable
            columns={[
              { key: "campo", label: "Campo", className: "min-w-[220px]" },
              { key: "valor", label: "Valor" },
            ]}
            rows={[
              {
                campo: "Grupo de productos y servicios",
                valor: "Soporte técnico IT: intervenciones preventivas y correctivas en hardware de equipos de cómputo, proyectores e impresoras de PyMEs",
              },
              { campo: "Responsable (Área / Función)", valor: "Administrador del servicio" },
              { campo: "Nombre del responsable",       valor: "Jesús Ochoa" },
              { campo: "Correo electrónico",           valor: "adminservice@onetic.com" },
              { campo: "Fecha de llenado",             valor: "Junio 2026" },
            ].map(({ campo, valor }) => ({
              campo: <span className="font-medium text-text-primary">{campo}</span>,
              valor: <span className="text-text-secondary">{valor}</span>,
            }))}
          />
        </Reveal>
      </section>

      {/* ── Personal / Gente ─────────────────────────────────────── */}
      <section id="man01-personal" className="scroll-mt-24">
        <SectionEyebrow label="Personal / Gente" />
        <Reveal>
          {/* Leyenda de prioridades — aparece una sola vez, en la primera tabla */}
          <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
            {([1, 2, 3] as Priority[]).map((p) => (
              <div key={p} className="flex items-center gap-2">
                <PriorityBadge level={p} />
                <span className="text-[12px] text-text-tertiary">
                  {p === 1
                    ? "Alta criticidad — paraliza el proceso"
                    : p === 2
                    ? "Impacto significativo — con margen de gestión"
                    : "Apoyo — genera inconvenientes, no paraliza"}
                </span>
              </div>
            ))}
          </div>
          <DataTable
            columns={[
              { key: "nombre",      label: "Recurso de personal", className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",           className: "w-24" },
            ]}
            rows={makeRows(PERSONAL)}
          />
        </Reveal>
      </section>

      {/* ── Información y Datos ──────────────────────────────────── */}
      <section id="man01-informacion" className="scroll-mt-24">
        <SectionEyebrow label="Información y Datos" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",    label: "Información", className: "min-w-[190px]" },
              { key: "formato",   label: "Formato" },
              { key: "prioridad", label: "Prioridad",   className: "w-24" },
            ]}
            rows={INFORMACION.map(({ nombre, formato, prioridad }) => ({
              nombre:    <span className="font-medium text-text-primary">{nombre}</span>,
              formato:   <span className="text-text-secondary">{formato}</span>,
              prioridad: <PriorityBadge level={prioridad} />,
            }))}
          />
          <Note
            titulo="Punto de recuperación objetivo (RPO)"
            texto="Conforme a los OLA definidos, el sistema ITSM opera con respaldo diario y retención de 30 días para registros operativos, y snapshot diario con retención de 90 días a nivel de base de datos. En caso de interrupción, la pérdida máxima tolerable de información es de 24 horas (RPO = 24 hrs), alineada al RPO máximo especificado en los niveles de servicio. Los reportes técnicos de intervención en papel firmados por el cliente son respaldo físico adicional de las actividades realizadas."
          />
        </Reveal>
      </section>

      {/* ── Edificios y Ambiente de Trabajo ──────────────────────── */}
      <section id="man01-edificios" className="scroll-mt-24">
        <SectionEyebrow label="Edificios y Ambiente de Trabajo" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",      label: "Edificio / Ambiente", className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",           className: "w-24" },
            ]}
            rows={makeRows(EDIFICIOS)}
          />
        </Reveal>
      </section>

      {/* ── Instalaciones, Mobiliario, Equipamiento y Consumibles ── */}
      <section id="man01-instalaciones" className="scroll-mt-24">
        <SectionEyebrow label="Instalaciones, Mobiliario, Equipamiento y Consumibles" />
        <SubLabel label="Instalaciones / Mobiliario" />
        <Reveal>
          <DataTable columns={RESOURCE_COLS} rows={makeRows(INSTALACIONES_MOB)} />
        </Reveal>
        <SubLabel label="Equipamiento y consumibles" />
        <Reveal>
          <DataTable columns={RESOURCE_COLS} rows={makeRows(EQUIP_CONSUMIBLES)} />
        </Reveal>
      </section>

      {/* ── Sistemas de Información y Comunicaciones ─────────────── */}
      <section id="man01-sistemas" className="scroll-mt-24">
        <SectionEyebrow label="Sistemas de Información y Comunicaciones" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",      label: "Sistema / Componente TIC", className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",                className: "w-24" },
            ]}
            rows={makeRows(SISTEMAS)}
          />
          <Note
            titulo="Nota de riesgo (R3)"
            texto="La plataforma ITSM es el único repositorio central de registros. Una caída del sistema sin plan de continuidad dejaría al equipo técnico sin capacidad de registrar ni rastrear intervenciones."
          />
        </Reveal>
      </section>

      {/* ── Transportación ───────────────────────────────────────── */}
      <section id="man01-transporte" className="scroll-mt-24">
        <SectionEyebrow label="Transportación" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",      label: "Transporte",  className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",   className: "w-24" },
            ]}
            rows={makeRows(TRANSPORTE)}
          />
        </Reveal>
      </section>

      {/* ── Finanzas ─────────────────────────────────────────────── */}
      <section id="man01-finanzas" className="scroll-mt-24">
        <SectionEyebrow label="Finanzas" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",      label: "Recurso financiero", className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",          className: "w-24" },
            ]}
            rows={makeRows(FINANZAS)}
          />
        </Reveal>
      </section>

      {/* ── Proveedores y Socios de Negocio ──────────────────────── */}
      <section id="man01-proveedores" className="scroll-mt-24">
        <SectionEyebrow label="Proveedores y Socios de Negocio" />
        <Reveal>
          <DataTable
            columns={[
              { key: "nombre",      label: "Proveedor / Socio", className: "min-w-[190px]" },
              { key: "descripcion", label: "Descripción" },
              { key: "prioridad",   label: "Prioridad",         className: "w-24" },
            ]}
            rows={makeRows(PROVEEDORES)}
          />
        </Reveal>
      </section>

    </article>
  );
}
