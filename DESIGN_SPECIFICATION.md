# OneTic — Design Spec

Portal de documentación institucional (soporte técnico IT, ESCOM/IPN).
Estética **Soft Enterprise / Institutional Documentation OS**.

- Idioma: `es-MX`
- Modo: **light**
- Tokens: **CSS custom properties** en `src/styles/globals.css`

Los **colores** y la **tipografía** son la línea base del sistema visual.
Spacing, layout y motion son pueden evolucionar con el diseño.

---

## Color tokens

### Surfaces

| Token               | Hex       |
| ------------------- | --------- |
| `--surface-base`    | `#FFFFFF` |
| `--surface-1`       | `#F8FAFC` |
| `--surface-2`       | `#F1F5F9` |
| `--surface-3`       | `#E2E8F0` |
| `--surface-strong`  | `#CBD5E1` |
| `--surface-inverse` | `#0F172A` |

### Text

| Token              | Hex       |
| ------------------ | --------- |
| `--text-primary`   | `#0F172A` |
| `--text-secondary` | `#334155` |
| `--text-tertiary`  | `#64748B` |
| `--text-disabled`  | `#94A3B8` |

### Accent (color de marca: `#2563EB`)

| Token              | Hex       |
| ------------------ | --------- |
| `--accent-primary` | `#2563EB` |
| `--accent-hover`   | `#1D4ED8` |
| `--accent-deep`    | `#1E3A8A` |
| `--accent-muted`   | `#93C5FD` |
| `--accent-border`  | `#BFDBFE` |
| `--accent-subtle`  | `#EFF6FF` |

### Semantic

- `--success` `#10B981` · `--success-subtle` `#ECFDF5`
- `--warning` `#F59E0B` · `--warning-subtle` `#FFFBEB`
- `--danger` `#EF4444` · `--danger-subtle` `#FEF2F2`

### Borders

- `--border-subtle` `#E2E8F0` · `--border-default` `#CBD5E1` · `--border-strong` `#94A3B8`

---

## Tipografía

Tres familias con roles cerrados:

- **Syne** (Bold/SemiBold) → `display`, `h1`, `h2` — carácter editorial.
- **Plus Jakarta Sans** (Regular/Medium/SemiBold/Bold) → body, UI, `h3` — legibilidad larga.
- **JetBrains Mono** (Regular/Medium) → IDs, códigos, eyebrows, métricas técnicas.

### Escala

| Token     | Size  | LH   | Tracking | Familia / Peso |
| --------- | ----- | ---- | -------- | -------------- |
| `display` | 56    | 110% | -3%      | Syne Bold      |
| `h1`      | 40    | 115% | -3%      | Syne Bold      |
| `h2`      | 28    | 130% | -1%      | Syne SemiBold  |
| `h3`      | 20    | 140% | 0        | PJS SemiBold   |
| `body-lg` | 17    | 175% | 0        | PJS Regular    |
| `body`    | 15    | 160% | 0        | PJS Regular    |
| `sm`      | 13    | 150% | 0        | PJS Regular    |
| `mono`    | 13    | 150% | 0        | JBM Regular    |
| `eyebrow` | 11–12 | —    | +8%      | JBM Medium     |

Eyebrows siempre en mono con tracking positivo. IDs y métricas en mono.

---

## Motion

Animaciones de entrada **suaves y elegantes** basadas en `motion/react`. La curva estándar del sistema es `easeOutQuint [0.22, 1, 0.36, 1]` — da sensación premium sin ser teatral.

### Primitivas disponibles en `ui/interactions/`

| Componente                | Trigger | Uso típico                                 |
| ------------------------- | ------- | ------------------------------------------ |
| `FadeIn`                  | Mount   | Hero, contenido always-visible al cargar   |
| `Reveal`                  | Scroll  | Secciones, headers, bloques de texto       |
| `ScaleIn`                 | Scroll  | Tarjetas, contenedores visuales destacados |
| `Stagger` + `StaggerItem` | Scroll  | Grids y listas de elementos                |

Los presets de curva y duración viven en `lib/motion.ts`. `MotionConfig reducedMotion="user"` en `AppShell` desactiva animaciones automáticamente para usuarios con esa preferencia de accesibilidad.

**Principio**: cada sección gestiona sus propias animaciones de entrada internamente; el `page.tsx` solo compone secciones.
En caso de requeriri nuevas animaciones se pueden añadir dentro de `ui/interactions`

---

## Implementación

Los tokens viven en `src/styles/globals.css` en dos capas:

1. **`:root`** — CSS custom properties (`--surface-base`, `--text-primary`...). Fuente canónica.
2. **`@theme inline`** — los expone como utilidades de Tailwind v4:

```
bg-surface-1         → background-color: var(--surface-1)
text-text-secondary  → color: var(--text-secondary)
border-border-subtle → border-color: var(--border-subtle)
bg-accent-primary    → background-color: var(--accent-primary)
```

Las fuentes se cargan con `next/font/google` en `src/app/layout.tsx` y se exponen como utilidades:

```
font-display  → Syne                (display, h1, h2)
font-body     → Plus Jakarta Sans   (body, UI, h3) — default
font-mono     → JetBrains Mono      (IDs, códigos, eyebrows)
```
