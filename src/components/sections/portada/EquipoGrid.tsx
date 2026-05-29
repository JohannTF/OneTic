import { Avatar } from "@/components/ui/images/Avatar";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Reveal } from "@/components/ui/interactions/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/interactions/Stagger";
import type { TeamMember } from "@/types/team";

type EquipoGridProps = {
  members: TeamMember[];
  className?: string;
};

export function EquipoGrid({ members, className }: EquipoGridProps) {
  return (
    <section className={className}>
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow="Equipo de trabajo"
          title="Responsables del servicio"
          description="Tres estudiantes de ESCOM trabajando bajo el marco de la materia Gobierno de TI."
        />
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {members.map((member) => (
          <StaggerItem
            key={member.id}
            as="article"
            className="group border-border-subtle bg-surface-base/80 hover:border-accent-border relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border p-8 text-center backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              aria-hidden="true"
              className="from-accent-subtle pointer-events-none absolute inset-x-0 -top-20 h-40 bg-linear-to-b to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            />
            <div className="transition-transform duration-300 ease-out group-hover:scale-[1.04]">
              <Avatar src={member.photo} alt={member.fullName} size={88} />
            </div>
            <h3 className="font-display text-text-primary text-lg font-semibold">
              {member.fullName}
            </h3>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
