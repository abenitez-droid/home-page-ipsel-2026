#!/usr/bin/env node
/*
 * scripts/build.js — genera las partes compartidas y el contenido de cada pantalla.
 *
 *   1) Header y footer: toma partials/header.html y partials/footer.html y los
 *      inyecta en cada página (reemplaza <header> y <footer>), marcando con
 *      aria-current="page" el enlace de la página actual.
 *   2) Bloques repetidos: lee js/data/*.data.js y rellena los marcadores
 *      <!-- build:clave --> ... <!-- /build:clave --> de cada página con HTML
 *      estático (ver scripts/render.js).
 *   3) Textos fijos: rellena cada elemento con data-tx="clave" (o el atributo
 *      data-tx-attr="nombre") con el texto de la entrada `textos` de la fuente
 *      de esa pantalla, y escribe la tipografía declarada en el mock
 *      (tipoFuente/tamano/color) en css/pages/<pagina>/tipografia.css.
 *
 * Uso:  npm run build
 *
 * Nota: ni el header/footer ni el contenido (bloques y textos) se editan a mano
 * en las páginas; se editan en partials/ y en js/data/<pagina>.data.js, y se
 * regeneran con este script (luego se commitean los HTML y el CSS generado).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { buildBlocks, prepararTextos } = require("./render.js");

const ROOT = path.resolve(__dirname, "..");

/* ------------------------- Una fuente por pantalla -------------------------- */
// Cada pantalla tiene su propio archivo de contenido (mock) en js/data/ y su
// hoja de estilo de tipografía generada en css/pages/<pagina>/tipografia.css.
const PAGES = [
  { page: "index.html", var: "inicioData", file: "js/data/inicio.data.js", css: "css/pages/inicio/tipografia.css" },
  { page: "institucional.html", var: "institucionalData", file: "js/data/institucional.data.js", css: "css/pages/institucional/tipografia.css" },
  { page: "plan-estudios.html", var: "planEstudiosData", file: "js/data/plan-estudios.data.js", css: "css/pages/plan-estudios/tipografia.css" },
  { page: "noticias.html", var: "noticiasData", file: "js/data/noticias.data.js", css: "css/pages/noticias/tipografia.css" },
  { page: "experiencias.html", var: "experienciasData", file: "js/data/experiencias.data.js", css: "css/pages/experiencias/tipografia.css" },
  { page: "contacto.html", var: "contactoData", file: "js/data/contacto.data.js", css: "css/pages/contacto/tipografia.css" },
];
// Plantilla: no tiene fuente de contenido propia.
const TEMPLATES = ["plantilla.html"];

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8").trimEnd();

const HEADER = read("partials/header.html");
const FOOTER = read("partials/footer.html");

/* ------------------------------ Datos (js/data) ----------------------------- */

function loadData(files) {
  const sandbox = {};
  vm.createContext(sandbox);
  for (const rel of files) {
    const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
    vm.runInContext(code, sandbox, { filename: rel });
  }
  // Los `const` de nivel superior viven en el ámbito léxico del contexto:
  // hay que volver a evaluarlos para leerlos desde Node.
  const names = PAGES.map((p) => p.var);
  const data = {};
  for (const name of names) {
    try {
      data[name] = vm.runInContext(name, sandbox);
    } catch {
      data[name] = undefined;
    }
  }
  return data;
}

/* --------------------------------- Inyección -------------------------------- */

// Marca la página actual en el menú (excepto la plantilla, que es genérica).
function markCurrent(html, page) {
  if (page === "plantilla.html") return html;
  const href = page.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`(<a class="nav__link" href="${href}")`), '$1 aria-current="page"');
}

// Reemplaza el primer <tag ...>...</tag> por el contenido dado.
function replaceOnce(html, tag, content, page) {
  const re = new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, "i");
  if (!re.test(html)) throw new Error(`No se encontró la etiqueta <${tag}> en ${page}`);
  return html.replace(re, () => content);
}

// Reemplaza el contenido entre <!-- build:clave --> ... <!-- /build:clave -->.
function injectMarker(html, key, content, page) {
  const re = new RegExp(`([ \\t]*)(<!--\\s*build:${key}\\s*-->)([\\s\\S]*?)(<!--\\s*/build:${key}\\s*-->)`);
  const found = html.match(re);
  if (!found) throw new Error(`Falta el marcador build:${key} en ${page}`);
  const indent = found[1];
  const body = content
    .split("\n")
    .map((line) => (line.trim() ? indent + line : ""))
    .join("\n");
  return html.replace(re, () => `${indent}${found[2]}\n${body}\n${indent}${found[4]}`);
}

/* ------------------------- Textos fijos (data-tx) --------------------------- */

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

// Agrega la clase de tipografía a la etiqueta de apertura (una sola vez).
function addClass(tag, clase) {
  if (!clase) return tag;
  if (new RegExp(`class="[^"]*\\b${clase}\\b`).test(tag)) return tag;
  if (/\sclass="/.test(tag)) return tag.replace(/\sclass="/, ` class="${clase} `);
  return tag.replace(/>$/, ` class="${clase}">`);
}

// Reemplaza (o agrega) el valor de un atributo en la etiqueta de apertura.
// El valor llega ya escapado para atributos (prepararTextos → textoAttr).
function setAttr(tag, name, value) {
  const re = new RegExp(`\\s${name}="[^"]*"`, "i");
  if (re.test(tag)) return tag.replace(re, ` ${name}="${value}"`);
  return tag.replace(/>$/, ` ${name}="${value}">`);
}

// Aplica el mock de textos a los elementos con data-tx="clave".
//   <h2 class="..." data-tx="clave">…</h2>            → reemplaza el contenido
//   <meta ... data-tx="clave" data-tx-attr="content"> → reemplaza el atributo
function applyTextos(html, textos, page, file) {
  const openRe = /<([a-zA-Z][a-zA-Z0-9-]*)([^<>]*?\bdata-tx="[^"]+"[^<>]*?)>/g;
  let out = "";
  let last = 0;
  let match;
  const usadas = new Set();

  while ((match = openRe.exec(html))) {
    const tag = match[1].toLowerCase();
    const startTag = match[0];
    const start = match.index;
    const key = startTag.match(/\bdata-tx="([^"]+)"/)[1];
    const entry = textos[key];
    if (!entry) {
      throw new Error(`${file}: falta la entrada "${key}" en \`textos\` (la usa ${page})`);
    }
    usadas.add(key);

    const attr = (startTag.match(/\bdata-tx-attr="([^"]+)"/) || [])[1];
    out += html.slice(last, start);

    if (attr) {
      // El texto va al atributo; el contenido del elemento no se toca.
      out += setAttr(startTag, attr, entry.textoAttr);
      last = start + startTag.length;
      continue;
    }

    if (VOID_TAGS.has(tag)) {
      throw new Error(`${page}: data-tx="${key}" está en <${tag}>, que no tiene contenido; usá data-tx-attr`);
    }

    // Busca la etiqueta de cierre, contemplando anidamiento del mismo tag.
    const tokenRe = new RegExp(`<${tag}\\b|</${tag}\\s*>`, "gi");
    tokenRe.lastIndex = start + startTag.length;
    let depth = 0;
    let closeStart = -1;
    let closeLength = 0;
    let token;
    while ((token = tokenRe.exec(html))) {
      if (token[0].startsWith("</")) {
        if (depth === 0) {
          closeStart = token.index;
          closeLength = token[0].length;
          break;
        }
        depth -= 1;
      } else {
        depth += 1;
      }
    }
    if (closeStart === -1) throw new Error(`${page}: no se encontró </${tag}> para data-tx="${key}"`);

    out += addClass(startTag, entry.clase);
    out += entry.texto;
    out += html.slice(closeStart, closeStart + closeLength);
    last = closeStart + closeLength;
    openRe.lastIndex = last;
  }

  out += html.slice(last);

  const sinUsar = Object.keys(textos).filter((key) => !usadas.has(key));
  if (sinUsar.length) {
    throw new Error(`${file}: entradas de \`textos\` sin data-tx en ${page}: ${sinUsar.join(", ")}`);
  }
  return out;
}

/* --------------------------- CSS de tipografía ------------------------------ */

const cssHeader = (file) =>
  [
    "/* =========================================================",
    "   tipografia.css — GENERADO por scripts/build.js.",
    `   Origen: ${file} · campo \`textos\`.`,
    "   No editar a mano: se sobrescribe en el próximo `npm run build`.",
    "   Cada clase .tx-<clave> es la tipografía de un texto de la pantalla.",
    "   ========================================================= */",
  ].join("\n");

function writeCss(page, lines) {
  const target = path.join(ROOT, page.css);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const body = lines.length ? "\n\n" + lines.join("\n") + "\n" : "\n";
  fs.writeFileSync(target, cssHeader(page.file) + body);
  console.log(`  ✓ ${page.css} (${lines.length} clases)`);
}

/* ---------------------------------- Build ----------------------------------- */

const data = loadData(PAGES.map((p) => p.file));
const blocks = buildBlocks(data);

let count = 0;
for (const page of PAGES) {
  const file = path.join(ROOT, page.page);
  let html = fs.readFileSync(file, "utf8");

  for (const [key, content] of Object.entries(blocks[page.page] || {})) {
    html = injectMarker(html, key, content, page.page);
  }

  const fuente = data[page.var] || {};
  const textos = prepararTextos(fuente.textos);
  html = applyTextos(html, textos.textos, page.page, page.file);

  html = replaceOnce(html, "header", markCurrent(HEADER, page.page), page.page);
  html = replaceOnce(html, "footer", FOOTER, page.page);

  fs.writeFileSync(file, html);
  writeCss(page, textos.css);
  count += 1;
  console.log(`  ✓ ${page.page}`);
}

for (const page of TEMPLATES) {
  const file = path.join(ROOT, page);
  let html = fs.readFileSync(file, "utf8");
  html = replaceOnce(html, "header", markCurrent(HEADER, page), page);
  html = replaceOnce(html, "footer", FOOTER, page);
  fs.writeFileSync(file, html);
  count += 1;
  console.log(`  ✓ ${page}`);
}

console.log(`\n${count} páginas actualizadas (partials + js/data + textos).`);
