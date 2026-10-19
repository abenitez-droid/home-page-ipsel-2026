#!/usr/bin/env node
/*
 * scripts/check.js — verificaciones de calidad sin dependencias.
 * Ejecuta: npm run check
 *
 *   1) Cada página carga tokens.css, base.css, components.css y js/main.js.
 *   2) Cada pantalla carga su tipografía generada (css/pages/<pagina>/tipografia.css).
 *   3) Cada página tiene exactamente un <h1>.
 *   4) No hay atributos style="" en línea.
 *   5) Todas las imágenes pesan <= 300 KB.
 *   6) Cada página declara el <meta name="viewport"> (responsive).
 *   7) Accesibilidad básica: lang="es", enlace "Saltar al contenido" y <main id="contenido">.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PAGES = [
  "index.html",
  "institucional.html",
  "plan-estudios.html",
  "noticias.html",
  "experiencias.html",
  "contacto.html",
  "plantilla.html",
];
// Hoja de tipografía generada por scripts/build.js desde js/data/<pagina>.data.js.
const GENERATED_CSS = {
  "index.html": "css/pages/inicio/tipografia.css",
  "institucional.html": "css/pages/institucional/tipografia.css",
  "plan-estudios.html": "css/pages/plan-estudios/tipografia.css",
  "noticias.html": "css/pages/noticias/tipografia.css",
  "experiencias.html": "css/pages/experiencias/tipografia.css",
  "contacto.html": "css/pages/contacto/tipografia.css",
};
const MAX_IMAGE = 300 * 1024;

const problems = [];
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

for (const page of PAGES) {
  if (!fs.existsSync(path.join(ROOT, page))) continue;
  const html = read(page);

  for (const asset of ["css/tokens.css", "css/base.css", "css/components.css", "js/main.js"]) {
    if (!html.includes(asset)) problems.push(`${page}: no incluye ${asset}`);
  }

  const generated = GENERATED_CSS[page];
  if (generated) {
    if (!fs.existsSync(path.join(ROOT, generated))) {
      problems.push(`${generated}: no existe (ejecutá npm run build)`);
    }
    if (!html.includes(generated)) problems.push(`${page}: no incluye ${generated}`);
  }

  if (!/<meta[^>]+name="viewport"[^>]*width=device-width/i.test(html)) {
    problems.push(`${page}: falta <meta name="viewport" content="width=device-width…">`);
  }

  if (!/<html[^>]*\blang="es"/i.test(html)) {
    problems.push(`${page}: falta lang="es" en <html>`);
  }

  if (!html.includes('class="skip-link"')) {
    problems.push(`${page}: falta el enlace "Saltar al contenido"`);
  }

  if (!/<main\b[^>]*id="contenido"/i.test(html)) {
    problems.push(`${page}: falta <main id="contenido">`);
  }

  const h1 = (html.match(/<h1\b/gi) || []).length;
  if (h1 !== 1) problems.push(`${page}: tiene ${h1} <h1> (se espera 1)`);

  const inline = (html.match(/\sstyle="/g) || []).length;
  if (inline) problems.push(`${page}: ${inline} estilo(s) en línea (usar CSS de la página)`);
}

function walkImages(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkImages(full);
    } else if (/\.(png|jpe?g|webp|gif|svg)$/i.test(entry.name)) {
      const size = fs.statSync(full).size;
      if (size > MAX_IMAGE) {
        const rel = path.relative(ROOT, full).replace(/\\/g, "/");
        problems.push(`${rel}: ${Math.round(size / 1024)} KB (> 300 KB)`);
      }
    }
  }
}
walkImages(path.join(ROOT, "img"));

if (problems.length) {
  console.error("Se encontraron problemas:\n - " + problems.join("\n - "));
  process.exit(1);
}
console.log("Verificaciones de calidad: OK");
