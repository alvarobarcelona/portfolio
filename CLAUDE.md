# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Qué es este proyecto

Portfolio personal de Alvaro Barcelona Peralta (Full Stack Developer).
SPA en React 18 + TypeScript, construida con Vite 7, estilada con Tailwind CSS v4
y componentes shadcn/ui (estilo `new-york`, sobre Radix UI). Se despliega como
sitio estático en Vercel.

Es una web de una sola página: `Home` monta en orden las secciones
`Header → Hero → About → Skills → Experience → Projects → Contact → Footer`.
No hay backend real, ni base de datos, ni autenticación.

## Comandos

Gestor de paquetes: **pnpm** (fijado en `packageManager`, con `patchedDependencies`).
No usar npm ni yarn: romperían el patch de `wouter` y el lockfile.

```bash
pnpm install        # instalar dependencias
pnpm dev            # servidor de desarrollo Vite en http://localhost:3000
pnpm build          # build de producción a /dist
pnpm check          # type-check con tsc --noEmit  <-- verificación principal
pnpm format         # prettier --write .
pnpm preview        # previsualizar el build
```

No hay suite de tests (vitest está instalado pero no hay ningún `*.test.ts`).
**La verificación antes de dar por terminado un cambio es `pnpm check`** y, si el
cambio es visual, `pnpm dev` para mirarlo en el navegador.

## Estructura

```
app/                  raíz de Vite (`root: "app"` en vite.config.ts)
  index.html          meta tags SEO/OG, preconnect a Google Fonts, preload del avatar
  public/             assets servidos tal cual (CV en PDF, imágenes)
  src/
    main.tsx          punto de entrada: createRoot + index.css
    App.tsx           árbol de providers + router (wouter)
    pages/            Home, NotFound
    components/       secciones de la página (una por sección de la landing)
    components/ui/    shadcn/ui — código generado, ver abajo
    contexts/         ThemeContext (dark/light/system), LanguageContext (i18n)
    hooks/            useMobile, useComposition, usePersistFn
    lib/i18n/         en.ts, de.ts, es.ts + index.ts
    lib/utils.ts      helper `cn()` (clsx + tailwind-merge)
    lib/iniHeroAnimation.ts  animación canvas con GSAP del Hero
    index.css         Tailwind v4: @theme, tokens y variantes dark
server/index.ts       servidor Express estático opcional (NO se usa en Vercel)
shared/const.ts       constantes compartidas
dist/                 salida del build (ignorada por git)
```

Alias de imports (definidos en `vite.config.ts` y `tsconfig.json`):

- `@/*` → `app/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/` — **el directorio no existe**, no usar este alias.

## Convenciones

- Componentes de sección: un archivo por sección en `app/src/components/`,
  export `default function NombreSeccion()`, con un `<section id="...">` como raíz
  para que funcione el scroll de navegación (`scrollIntoView`).
- Estilos: siempre clases de Tailwind y los tokens semánticos del tema
  (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`,
  `text-primary`…). No hardcodear colores hex/oklch en los componentes: se rompe
  el modo oscuro.
- Composición de clases condicionales: usar `cn()` de `@/lib/utils`.
- Iconos: `lucide-react`.
- Animaciones: `framer-motion` para transiciones de UI; GSAP solo en la animación
  canvas del Hero.
- Routing: `wouter` (`<Route path="/" component={Home} />`). Es una SPA de una
  página; sólo existen `/` y el fallback 404.
- Formato: Prettier con la config de `.prettierrc` (comillas dobles, 2 espacios,
  printWidth 80, sin paréntesis en flechas de 1 argumento). Ejecutar `pnpm format`
  tras cambios grandes, no reformatear archivos ajenos al cambio.

## i18n — importante

Tres idiomas: **inglés, alemán y español**. El idioma por defecto es `de`, y se
persiste en `localStorage` bajo la clave `language`.

- Los textos viven en `app/src/lib/i18n/{en,de,es}.ts`, todos con la misma forma
  de objeto anidado. `TranslationKeys` se deriva de `en.ts`, que es la referencia.
- Se consumen con `const { t } = useLanguage()` y `t("seccion.clave")` (ruta con
  puntos). Si falta la clave, se emite un `console.warn` y se devuelve la ruta.
- **Al añadir o renombrar cualquier texto hay que actualizar los tres archivos.**
  Dejar uno fuera de sync no rompe el build (el lookup es dinámico), sólo falla
  en runtime. `pnpm check` no lo detecta.
- No escribir texto visible hardcodeado en los componentes.

## Tailwind v4 y shadcn/ui

- Tailwind v4 se configura **en CSS**, no en JS: los tokens están en el bloque
  `@theme inline` y en `:root` / `.dark` de `app/src/index.css`. El modo oscuro
  usa la variante `class` (`@custom-variant dark (&:is(.dark *))`), aplicada por
  `ThemeContext` sobre `<html>`.
- `tailwind.config.js` en la raíz es residual (herencia de v3) y sus `content`
  globs no coinciden con la estructura real. **Los cambios de tema van en
  `app/src/index.css`**, no ahí.
- `components.json` apunta a `tailwind.config.ts`, un archivo que no existe. Si
  se usa el CLI de shadcn, puede quejarse; añadir componentes a mano en
  `app/src/components/ui/` es aceptable.
- `app/src/components/ui/**` es código generado por shadcn: no reescribirlo por
  estilo. Editar sólo cuando el cambio sea intencionado, y mantener la API
  (variantes de `class-variance-authority`, `forwardRef`, `data-slot`).

## Despliegue y el servidor Express

- El despliegue es **estático en Vercel**: `pnpm build` → `dist/`. `.vercelignore`
  excluye `server`.
- `server/index.ts` es un servidor Express opcional para servir el build. Ojo:
  espera los estáticos en `dist/public`, pero Vite construye directamente en
  `dist`, así que hoy **no funciona sin ajustar rutas**. Además el script `start`
  usa la sintaxis `NODE_ENV=production node ...`, que no funciona en PowerShell.
  No tocar esto salvo que se pida explícitamente.

## Reglas de trabajo

- No commitear ni hacer push salvo petición explícita.
- No modificar `pnpm-lock.yaml` ni `patches/` a mano.
- No leer ni volcar el contenido de `.env` ni de ningún fichero de secretos
  (ver `.claude/settings.json`). Si hace falta una variable de entorno, pedirla
  o referenciarla por nombre.
- No añadir dependencias nuevas sin preguntar: la superficie de `node_modules`
  ya es grande y el proyecto es un sitio estático.
