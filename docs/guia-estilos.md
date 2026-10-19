# Guía de estilos – Colegio Privado IPSEL

Fuente de los valores: `css/tokens.css`. **No escribir colores, tamaños, radios ni sombras a mano:** usar las variables.

**Estilo:** bordes redondeados y degradados suaves, con stack tipográfico del sistema (sin fuentes externas).

## 1. Superficies por sección

El diseño alterna secciones claras y oscuras. Cada `<section>` o bloque lleva **una** clase de superficie; los componentes se adaptan solos.

| Clase | Fondo | Uso típico |
| :--- | :--- | :--- |
| `surface-light` | blanco | Propuesta, noticias, header |
| `surface-alt` | `slate-50` | Institucional, bloques alternos |
| `surface-dark` | `slate-950` | Hero, experiencias, footer |

Cada superficie redefine `--bg`, `--text`, `--text-muted`, `--accent`, `--card-bg`, `--border` y `--focus`.

## 2. Colores

| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--brand-700` | `#801515` | Bordó institucional: CTAs, acentos **sobre fondos claros** |
| `--brand-800` | `#600F0F` | Hover |
| `--brand-300` | `#F28B8B` | Bordó claro: acentos **sobre fondos oscuros** |
| `--brand-950` | `#2A0A0A` | Fondo profundo de paneles |
| `--slate-*` | Neutros | Texto, bordes y fondos |

**Regla de contraste (AA, mínimo 4,5:1 en texto):** el bordó `#801515` no se usa como color de texto sobre fondos oscuros (da aprox. 2:1). En superficies oscuras el acento es `--brand-300`. Los textos secundarios sobre oscuro usan `--text-muted` (`slate-400`), no `slate-500`. Verificar siempre con una herramienta de contraste.

## 3. Tipografía

Stack del sistema: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`.

| Elemento | Token | Peso |
| :--- | :--- | :--- |
| H1 | `--fs-h1` (2.25rem → 3rem) | 800 |
| H2 | `--fs-h2` (1.5rem → 1.875rem) | 700 |
| H3 | `--fs-h3` (1.125rem → 1.25rem) | 600 |
| Cuerpo | `--fs-base` (1rem), interlineado 1.625 | 400 |
| Texto chico | `--fs-sm` (0.875rem) | 400–600 |
| Caption / etiqueta | `--fs-xs` (0.75rem), mayúsculas, tracking 0.05em | 500 |

**Mínimo 12 px (`--fs-xs`).** No usar tamaños de 10 u 11 px.

## 4. Radios, sombras y degradados

- **Radios:** `--radius-sm` 10 · `md` 12 · `lg` 16 · `xl` 20 · `2xl` 24 · `pill` (botones y chips).
- **Sombras:** `--shadow-card`, `--shadow-card-hover`, `--shadow-brand` (botón primario), `--shadow-panel`.
- **Degradados:** `--gradient-brand` (botones y tarjeta destacada), `--gradient-hero`, `--gradient-glow-dark`, `--gradient-panel-dark`, `--gradient-soft`, `--gradient-soft-brand`.
- Los resplandores se hacen con `radial-gradient`, **no** con `filter: blur()` (pesa en celulares).
- El texto sobre un degradado debe seguir cumpliendo AA.

## 5. Componentes (`css/components.css`)

| Componente | Clases |
| :--- | :--- |
| Header y navegación | `.site-header`, `.brand`, `.nav`, `.nav__link`, `.nav__toggle` |
| Botones | `.btn`, `.btn--primary`, `.btn--ghost` (sobre oscuro), `.btn--outline`, `.btn--sm` |
| Encabezado de sección | `.section`, `.section__head`, `.eyebrow`, `.eyebrow--line`, `.link-arrow` |
| Grillas | `.grid`, `.grid--2`, `.grid--3` |
| Tarjetas | `.card`, `.card--elevated`, `.card--accent`, `.card--brand`, `.icon-tile`, `.check-list` |
| Datos | `.stats`, `.stat__value`, `.stat__label`, `.badge` |
| Noticias | `.news-card` (toda la tarjeta es un enlace accesible) |
| Testimonios | `.testimonial`, `.avatar` |
| Formularios | `.field`, `.field__label`, `.field__control`, `.field__error` |
| Footer | `.site-footer`, `.footer__title`, `.footer__list` |

## 6. Cómo trabaja cada grupo

1. Crear `css/pages/<pagina>/<bloque>.css` solo si el componente compartido no alcanza.
2. Cargarlo **después** de `components.css` en el HTML.
3. Usar solo variables de `tokens.css`.
4. No editar `tokens.css`, `base.css` ni `components.css` sin PR aprobado por el responsable.

## 7. Accesibilidad mínima en cada bloque

- Un solo `<h1>` por página; no saltear niveles de encabezado.
- Imágenes informativas con `alt`; decorativas con `alt=""` o `aria-hidden="true"`.
- Todo lo clickeable es `<a>` o `<button>` (no `div` con `onclick`).
- Se navega y se ve el foco con teclado.
- No hay nada importante que dependa solo del color ni de `hover`.
- Las animaciones respetan `prefers-reduced-motion` (ya resuelto en `base.css`).
