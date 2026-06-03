import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { SidebarLink } from "@/components/layout/sidebar/SidebarLink";
import { cn } from "@/lib/cn";
import type { NavChapter } from "@/types/nav";

type SidebarChapterProps = {
  chapter: NavChapter;
  collapsed: boolean;
  pathname: string;
};

export function SidebarChapter({ chapter, collapsed, pathname }: SidebarChapterProps) {
  return (
    <div className={cn(collapsed ? "border-border-subtle mt-4 border-t pt-4" : "mt-7")}>
      {!collapsed && (
        <Eyebrow as="h3" tone="muted" size="xs" className="mb-2 block px-3">
          {chapter.label}
        </Eyebrow>
      )}
      <ul className="space-y-0.5">
        {chapter.items.map((item) => (
          <li key={item.id}>
            <SidebarLink
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              collapsed={collapsed}
              number={item.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
