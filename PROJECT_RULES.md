# Project Rules — OneTic

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

Lo único que se mantiene firme es el **sistema visual** ([DESIGN_SPECIFICATION.md](./DESIGN_SPECIFICATION.md)) y la **estructura general** ([ARCHITECTURE.md](./ARCHITECTURE.md)). El resto son guías que evolucionan con el proyecto.

---

## Principios

- **Claridad sobre abstracción.** Si es más fácil de leer sin abstraer, no abstraigas.
- **Simple primero.** Tres líneas repetidas son mejores que una abstracción prematura.
- **Resuelve el problema actual.** No los hipotéticos.

---

## Convenciones

- **Componentes:** `PascalCase` (archivo = nombre del componente).
- **Contenido / helpers / hooks:** `camelCase`.
- **Tipos:** `PascalCase` singular (`NavItem`, `Portada`).
- **Rutas:** kebab-case en español, igual que la URL (`/activos/matriz-de-riesgos`).
- **Nombres explícitos.** `inventoryItems` mejor que `items`.

---

## Imports

- Orden: externos → internos (`@/`) → relativos, separados por línea en blanco.
- Usar el alias `@/` para todo lo interno.
- **Sin módulos puente.** Si un archivo solo re-exporta lo que otro ya contiene sin añadir lógica propia, elimínalo e importa directamente de la fuente. Un intermediario sin valor propio suma indirección sin beneficio.

---

## Styling

- **Tailwind con los tokens del tema.** Utilidades `bg-surface-*`, `text-text-*`, `border-border-*`, `font-display/body/mono`.
- **Sin hex hardcodeados** en clases — si falta un color, se agrega al tema.
- **Animaciones con `motion/react`.** Usar las primitivas de `ui/interactions/` (`FadeIn`, `Reveal`, `ScaleIn`, `Stagger`/`StaggerItem`). La curva y duraciones compartidas están en `lib/motion.ts`. `globals.css` solo lleva tokens (única excepción: la regla `scroll-behavior: smooth` protegida por `prefers-reduced-motion`).
- **Diagramas nativos.** Recrear diagramas con HTML/CSS + SVG y tokens del tema (no librerías de diagramación ni imágenes embebidas). Ver patrones en [DESIGN_SPECIFICATION.md](./DESIGN_SPECIFICATION.md).

---

## Contenido

- Datos y texto de dominio en `src/content/`.
- `content/nav.ts` es la única fuente de navegación.
- Prosa larga en `content/prose/*.(md|mdx)` cuando aplique.

---

## Reutilización de componentes UI

Antes de crear un componente nuevo en `components/ui/`, **revisa si ya existe** en:

- `ui/buttons/` — botones, toggles.
- `ui/typography/` — eyebrows, badges, etiquetas tipográficas.
- `ui/images/` — avatares, imágenes, fotos.
- `ui/interactions/` — `FadeIn`, `Reveal`, `ScaleIn`, `Stagger`/`StaggerItem` y futuras interacciones.
- `ui/data-display/` — `DataTable`, `MatrixBadge` (tablas y matrices on-brand).
- `sections/shared/` — `ChapterHero`, `ChapterLayout`, `OnThisPage`, `SectionHeader` (reusables entre capítulos).
- [Más categorías según crecimiento: feedback/, forms/, etc.]

Si necesitas una **variante** de un componente existente (tamaño distinto, estilo alternativo), **extiende el componente con props** antes de duplicar.

---

## Páginas de capítulo

- Usar `ChapterHero` como header y `SectionNav` al cierre (deriva anterior/siguiente de `nav[chapterIndex].items`).
- Páginas con **5+ subsecciones**: envolver en `ChapterLayout` para el índice lateral navegable (`OnThisPage`) y poner `id` + `scroll-mt-24` en cada subsección.
- Las rutas ya viven en `content/nav.ts`; añadir páginas implementa rutas ya declaradas, no inventa nuevas.

---

## Design Quality (para nuevas páginas)

- El portal tiene un estilo visual **cohesivo, elegante y premium**. Todas las páginas nuevas deben mantenerlo, ajustandolo dependiendo del contenido que van a mostrar.
- El portal debe evitar layouts genéricos típicos de interfaces generadas automáticamente por IA.
---

## Notas

- Server Components por defecto; `'use client'` cuando aporta (estado, eventos, observers).
- Se pueden añadir nuevas librerias en caso de ser necesarias.
