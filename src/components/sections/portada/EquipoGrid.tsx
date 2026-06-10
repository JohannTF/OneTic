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

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {members.map((member) => (
          <StaggerItem
            key={member.id}
            as="article"
            className="border-border-subtle bg-surface-1 hover:border-border-default hover:bg-surface-base flex flex-col items-center gap-5 rounded-2xl border px-6 py-8 text-center transition-colors duration-200"
          >
            <Avatar src={member.photo} alt={member.fullName} size={72} />
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-text-primary text-[15px] font-semibold leading-snug">
                {member.fullName}
              </h3>
              {member.role && (
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.07em] text-text-tertiary">
                  {member.role}
                </p>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
