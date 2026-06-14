export type ServicioTipo = "Nuevo" | "Cambio" | "Retiro" | "Activo";

export type RaciRol = "admin" | "tecnico" | "especialista" | "auxiliar";
export type RaciValor = "R" | "A" | "C" | "I";

export type RaciActividad = {
  actividad: string;
  asignaciones: Partial<Record<RaciRol, RaciValor>>;
};

export type RolContacto = {
  rol: string;
  nombre: string;
  correo: string;
  telefono: string;
  horario: string;
};

export type SlaItem = {
  tipo: string;
  compromiso: string;
};

export type OlaItem = {
  aspecto: string;
  compromiso: string;
  metrica: string;
};
