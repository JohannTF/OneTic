import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-text-primary text-[28px] leading-[1.3] font-semibold tracking-[-0.01em]">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-[520px] text-[15px] leading-[1.6]">{description}</p>
      )}
    </div>
  );
}
