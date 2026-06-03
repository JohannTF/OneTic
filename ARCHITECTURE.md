# Architecture — OneTic

Portal de documentación para servicio-IT (ESCOM/IPN). Contenido casi-estático: sin autenticación, sin base de datos, sin tiempo real.

La idea base es **separar contenido de presentación**: los datos viven en `src/content/`, los componentes los renderizan. Esto facilita reusar patrones visuales y editar texto sin tocar UI.

## Stack

| Capa        | Tecnología                                 | Notas                                        |
| ----------- | ------------------------------------------ | -------------------------------------------- |
| Framework   | **Next.js 16 (App Router)**                | Server Components por defecto                |
| Lenguaje    | **TypeScript strict**                      |                                              |
| Estilos     | **Tailwind CSS v4**                        | Tokens en CSS via `@theme` (sin config)      |
| Fuentes     | **next/font/google**                       | Syne, Plus Jakarta Sans, JetBrains Mono      |
| Iconos      | **lucide-react**                           |                                              |
| Animaciones | **motion/react**                           | Primitivas composables en `ui/interactions/` |
| Utilidades  | **clsx + tailwind-merge** (vía `cn`)       |                                              |
| MDX         | **@next/mdx**                              | Para prosa larga                             |
| Formateo    | **Prettier + prettier-plugin-tailwindcss** |                                              |

## Estructura

```
src/
 ├── app/                    # Rutas (App Router). layout.tsx envuelve todo con AppShell.
 ├── components/
 │    ├── ui/                # Primitivos agnósticos por categoría
 │    │    ├── buttons/      # Button, Toggle, etc.
 │    │    ├── typography/   # Eyebrow, Badge, etc. (elementos tipográficos)
 │    │    ├── images/       # Avatar, Image, etc. (contenido visual/media)
 │    │    ├── interactions/ # FadeIn, Reveal, Stagger, ScaleIn (motion/react)
 │    │    └── [más]/        # feedback/, forms/, layout/ según crecimiento
 │    ├── layout/            # Shell
 │    │    ├── sidebar/      # Sidebar + sub-componentes
 │    │    ├── AppShell.tsx
 │    │    ├── TopBar.tsx
 │    │    └── Logo.tsx
 │    └── sections/          # Patrones por sección
 │         ├── shared/       # Reusables entre secciones (SectionHeader...)
 │         └── [seccion]/    # Subdirectorio cuando hay 2+ componentes de una sección
 ├── content/                # Datos del portal
 │    ├── nav.ts             # Navegación global — nunca mover ni duplicar
 │    ├── [seccion].ts       # Archivo plano si la sección tiene 1 solo archivo 
 │    ├── [seccion]/         # Subdirectorio cuando una sección necesita 2+ archivos
 │    │    └── (ej. portada/portada.ts, portada/equipo.ts, portada/academico.ts)
 │    └── prose/             # Prosa larga (.md/.mdx) cuando aplique
 ├── types/                  # Tipos del dominio (PascalCase singular)
 ├── lib/                    # Helpers puros (cn, breadcrumb, motion presets...)
 ├── styles/
 │    └── globals.css        # Unicamente design tokens + Tailwind @theme
 └── mdx-components.tsx

public/images/               # Assets por rol (authors/, diagrams/, ui/)
```

**Regla de subdivisión (universal):** aplica en cualquier directorio de `components/` o `content/`. Si un módulo acumula **2+ sub-componentes o sub-archivos propios**, se convierte en directorio (`[nombre]/`). Con uno solo, permanece como archivo plano.

- `components/layout/sidebar/` — ejemplo: `Sidebar` tiene `SidebarChapter`, `SidebarLink` y `ToggleButton`.
- `sections/[seccion]/` — cuando una sección produce 2+ componentes.
- `content/[seccion]/` — cuando una sección necesita 2+ archivos de datos (ej. `portada/` tiene `portada.ts`, `equipo.ts`, `academico.ts`).

`nav.ts` es la excepción: siempre queda en la raíz de `content/` por ser fuente global de navegación.

## Path alias

`@/*` resuelve a `src/*`:

```ts
import { nav } from "@/content/nav";
import { portada } from "@/content/portada/portada";
import { Button } from "@/components/ui/buttons/Button";
```

## Notas operativas

- **`content/nav.ts` es la fuente de navegación.** Sidebar, breadcrumbs e índice leen de ahí.
- **Tokens en `styles/globals.css`** — colores y fuentes del [DESIGN_SPECIFICATION.md](./DESIGN_SPECIFICATION.md).
- **Server Components por defecto.** `'use client'` cuando aporta (estado, eventos, observers).
- **Sin `tailwind.config.js`** — la customización va en `globals.css` vía `@theme`.
- **`components/ui/` está dividido por categoría.** Antes de crear un componente nuevo, revisa si ya existe en `buttons/`, `typography/`, `images/`, `interactions/`, etc. Reutiliza primero.
- **Animaciones centralizadas en `ui/interactions/`.** Las primitivas `FadeIn`, `Reveal`, `Stagger`/`StaggerItem` y `ScaleIn` (todas de `motion/react`) cubren la mayoría de casos. La curva y duraciones compartidas viven en `lib/motion.ts`. `MotionConfig reducedMotion="user"` en `AppShell` maneja accesibilidad globalmente.
