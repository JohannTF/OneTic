import { nav } from "@/content/nav";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

const ROOT: BreadcrumbItem = { label: "Documentación", href: "/" };

const STATIC_LABELS: Record<string, string> = {
  "/": "Portada",
  "/indice": "Índice",
};

export function getBreadcrumb(pathname: string): BreadcrumbItem[] {
  const staticLabel = STATIC_LABELS[pathname];
  if (staticLabel) {
    return [ROOT, { label: staticLabel, href: pathname }];
  }

  for (const chapter of nav) {
    const match = chapter.items.find((item) => item.href === pathname);
    if (match) {
      return [ROOT, { label: match.label, href: match.href }];
    }
  }

  return [ROOT];
}
