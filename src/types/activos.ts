export type ProcesoId = "MAN_01" | "SOP_02" | "INV_03";

export type Proceso = {
  id: ProcesoId;
  nombre: string;
  descripcion: string;
  actividadesCriticas: string[];
  factoresExito: string[];
};

export type ClasificacionActivo = "Crítico" | "No crítico";

export type ActivoInfo = {
  idProceso: ProcesoId;
  idActivo: string;
  nombre: string;
  descripcion: string;
  clasificacion: ClasificacionActivo;
  relacionConOtros: boolean;
  relacionIds: string;
};
