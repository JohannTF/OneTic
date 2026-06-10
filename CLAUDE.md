# CLAUDE.md

OneTic es un portal de documentación institucional para el servicio de soporte técnico IT (ESCOM/IPN). Contenido casi-estático: sin autenticación, sin base de datos, sin tiempo real. El idioma del producto y de la documentación es `es-MX`.

## Comandos

```bash
npm run dev      # servidor de desarrollo (Turbopack) en http://localhost:3000
npm run build    # build de producción
npm start        # sirve el build
npm run lint     # ESLint (eslint-config-next: core-web-vitals + typescript)
```

No hay framework de tests configurado. El typecheck ocurre en `npm run build` (TypeScript `strict`, `noEmit`).

## Documentación de referencia

Antes de cambios no triviales, lee el doc relevante — deben mantenerse consistentes con el código:

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — stack, estructura de carpetas, regla de subdivisión, path alias.
- **[DESIGN_SPECIFICATION.md](./DESIGN_SPECIFICATION.md)** — tokens de color, escala tipográfica, sistema de motion.
- **[PROJECT_RULES.md](./PROJECT_RULES.md)** — convenciones de nombres, imports, styling, reutilización de UI.