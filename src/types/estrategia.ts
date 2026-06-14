export type MetaDimension =
  | "Financiera"
  | "Cliente"
  | "Procesos Internos"
  | "Aprendizaje y Crecimiento";

export type MetaItem = {
  dimension: MetaDimension;
  meta: string;
};

export type CascadaPrioridad = "P" | "S" | "—";

export type CascadaRow = {
  dimension: MetaDimension;
  meta: string;
  beneficios: CascadaPrioridad;
  riesgos: CascadaPrioridad;
  recursos: CascadaPrioridad;
};

export type PerspectivaTone = "procesos" | "clientes" | "financiero" | "aprendizaje";

export type MapaNodo = {
  id: string;
  label: string;
};

export type Perspectiva = {
  id: string;
  label: string;
  tone: PerspectivaTone;
  /** Meta principal (resultado) de la dimensión — cabecera del carril. */
  meta: string;
  /** Estrategias que apuntan hacia arriba, a la meta de la dimensión. */
  estrategias: MapaNodo[];
  /** Marca el carril cumbre: la meta general del mapa (sin estrategias). */
  apex?: boolean;
};
