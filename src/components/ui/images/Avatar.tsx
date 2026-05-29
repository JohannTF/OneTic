import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 96, className }: AvatarProps) {
  return (
    <div
      className={cn("ring-border-subtle relative overflow-hidden rounded-full ring-1", className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </div>
  );
}
