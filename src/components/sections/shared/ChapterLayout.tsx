import { OnThisPage, type TocItem } from "@/components/sections/shared/OnThisPage";

type ChapterLayoutProps = {
  toc: TocItem[];
  children: React.ReactNode;
};

// Disposición de página de capítulo con índice lateral derecho sticky. En móvil/tablet
// el índice se oculta y el contenido ocupa todo el ancho; en lg+ aparece el rail.
// Las subsecciones del contenido deben llevar `id` y `scroll-mt-24` para el anclaje.
export function ChapterLayout({ toc, children }: ChapterLayoutProps) {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-14 xl:gap-20">
      <div className="flex min-w-0 flex-col gap-20">{children}</div>

      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <OnThisPage items={toc} />
        </div>
      </aside>
    </div>
  );
}
