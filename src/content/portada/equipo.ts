import type { TeamMember } from "@/types/team";

const PLACEHOLDER_PHOTO = "/images/authors/placeholder.jpg";

export const equipo: TeamMember[] = [
  {
    id: "beltran",
    fullName: "Beltrán Vidal Sol Jarelly",
    shortName: "Sol Beltrán",
    photo: "/images/authors/sol-beltran.png",
    role: "Ingeniería en Sistemas Computacionales",
  },
  {
    id: "pardo",
    fullName: "Pardo Gómez Isaac",
    shortName: "Isaac Pardo",
    photo: PLACEHOLDER_PHOTO,
    role: "Ingeniería en Sistemas Computacionales",
  },
  {
    id: "trejo",
    fullName: "Trejo Flores Johann Daniel",
    shortName: "Johann Trejo",
    photo: PLACEHOLDER_PHOTO,
    role: "Ingeniería en Sistemas Computacionales",
  },
];
