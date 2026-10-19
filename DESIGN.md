# Identidad visual IPSEL

> Resumen rápido. La guía completa está en [`docs/guia-estilos.md`](docs/guia-estilos.md)
> y la fuente de los valores es [`css/tokens.css`](css/tokens.css).
> **No escribir colores, tamaños, radios ni sombras a mano.**

El sitio usa **CSS propio con variables (custom properties)**: no emplea Tailwind ni
frameworks. Todo color, tamaño y radio proviene de `tokens.css`.

## Paleta

| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--brand-700` | `#801515` | Bordó institucional: CTAs y acentos sobre fondos claros |
| `--brand-800` | `#600f0f` | Hover |
| `--brand-300` | `#f28b8b` | Acento sobre fondos oscuros (cumple AA) |
| `--brand-950` | `#2a0a0a` | Fondo profundo de paneles |
| `--slate-50 … 950` | Neutros | Texto, bordes y fondos |

## Superficies

Las secciones alternan claro y oscuro con **una** clase de superficie; los componentes
se adaptan solos (redefinen `--bg`, `--text`, `--card-bg`, `--accent`…):

| Clase | Fondo | Uso típico |
| :--- | :--- | :--- |
| `surface-light` | blanco | Propuesta, noticias, header |
| `surface-alt` | `slate-50` | Institucional, bloques alternos |
| `surface-dark` | `slate-950` | Hero, experiencias, footer |

## Tipografía (tokens)

| Nivel | Token | Peso |
| :--- | :--- | :--- |
| H1 | `--fs-h1` (2.25 → 3 → 3.5rem) | 800 |
| H2 | `--fs-h2` (1.5 → 1.875 → 2.25rem) | 700 |
| H3 | `--fs-h3` (1.125 → 1.25rem) | 600 |
| Cuerpo | `--fs-base` (1rem), interlineado 1.625 | 400 |
| Caption / etiqueta | `--fs-xs` (0.75rem, mínimo 12 px) | 500 |

## Puntos de corte (responsive)

Mobile-first, en `em` (16 px de base). Tres niveles:

| Nivel | Rango | Qué cambia |
| :--- | :--- | :--- |
| Móvil | `< 40em` (< 640 px) | Una columna; header con menú colapsado y marca sin tagline |
| Móvil grande | `40em – 48em` (640–768 px) | `.grid--2` / `.grid--3` a 2 columnas; formulario a 2 columnas |
| **Tablet** | `48em – 64em` (768–1024 px) | Header con CTA y tagline; pie 2×2; hero e intro institucional a 2 columnas; plan de estudios con tarjetas; contacto en 2 columnas |
| Desktop | `≥ 64em` (≥ 1024 px) | Navegación horizontal; 3 columnas; pie 4 columnas; tipografía mayor |

Reglas:
- Preferir `min-width`. Los bloques con `max-width` (Plan de Estudios, Contacto, Institucional) cierran en `47.99em` / `63.99em` para no solaparse con el nivel siguiente.
- Toda página debe verse bien en **360, 640, 768, 1024 y 1200 px**.
- Los estilos de cada bloque van en `css/pages/<pagina>/<bloque>.css`; los cambios de header, footer y grillas comunes, en `components.css` (con PR).

## Accesibilidad

- **Foco visible** global (`:focus-visible`, `base.css`). No quitarlo.
- **Header sticky**: `:target` y `:focus-visible` llevan `scroll-margin-top` para que el ancla o el control enfocado no queden tapados (WCAG 2.4.11).
- **Menú sin JS**: si el JavaScript falla, el `<noscript>` de cada página muestra la navegación como lista bajo el header.
- **Detalle de Noticias (master-detail)**: al seleccionar una noticia, en móvil/tablet (detalle apilado arriba) el foco pasa al título `#detail-title` (`tabindex="-1"`) y se hace scroll al panel; en desktop (dos columnas visibles) no se mueve el foco y la selección se anuncia con la región `aria-live` `#detail-status`. El enlace profundo `#noticia-<id>` reutiliza ese mismo scroll + foco al cargar.
- Textos alternativos reales cuando se incorporen imágenes: quitar `aria-hidden` de paneles decorativos (`hero__panel`, `detail-hero`, `project-card__media`, `news-thumb`) y dar `alt` descriptivo.
