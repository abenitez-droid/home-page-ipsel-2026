// js/data/inicio.data.js — FUENTE DE INFORMACIÓN de la pantalla Inicio (mock).
// Responsable: Frente Inicio (grupos 1–3). Este archivo no contiene lógica.
//
// Lo consume scripts/build.js (ver el contrato en scripts/render.js):
//   · `textos`   → textos fijos. Cada clave corresponde a un data-tx="clave" de
//                  index.html y define, opcionalmente, su tipografía.
//   · bloques    → contenido repetido (stats, propuesta, pilares, testimonios).
// Flujo: editar este archivo → `npm run build` → commitear index.html y
// css/pages/inicio/tipografia.css.
//
// Campos de cada texto:
//   titulo | detalle | fecha   → contenido (se escapa y se escribe en el elemento)
//   html                       → marcado interno (se inserta tal cual)
//   tipoFuente                 → familia tipográfica (ej. "--font-sans")
//   tamano                     → tamaño (ej. "--fs-h1")
//   color                      → color (opcional)
// Los valores que empiezan con "--" se resuelven como variables de tokens.css.
//
// No inventar cifras ni datos institucionales: completar solo con información
// real validada por el colegio.
const inicioData = {
  // Identidad de la pantalla (<title> y <meta name="description">).
  textos: {
    "pantalla-titulo": { titulo: "Inicio – Colegio Privado IPSEL" },
    "pantalla-descripcion": {
      detalle:
        "Colegio Privado IPSEL – Instituto Privado Secundario Latinoamericano. Secundario de 5 años con orientación en Informática.",
    },

    // Aviso de maqueta (arriba del main).
    aviso: {
      detalle:
        "Contenido de demostración: todos los textos y datos son ilustrativos y no representan información institucional confirmada.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text",
    },

    // Bloque 1 · Hero.
    "hero-badge": {
      detalle: "[Inscripciones abiertas: confirmar con la institución]",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--text-muted",
    },
    "hero-titulo": {
      html:
        '<span class="hero__title-light">Instituto Privado</span><br>\nSecundario <span class="hero__title-accent">Latinoamericano</span>',
      tipoFuente: "--font-sans",
      tamano: "--fs-h1",
      color: "--text",
    },
    "hero-lead": {
      detalle:
        "Secundario de 5 años con orientación en Informática. [Texto de presentación validado por la institución.]",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },
    "hero-cta-inscripciones": { titulo: "Inscripciones" },
    "hero-cta-plan": { titulo: "Ver plan de estudios" },

    // Bloque 2 · Propuesta.
    "propuesta-eyebrow": {
      titulo: "Nuestra propuesta",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "propuesta-titulo": {
      titulo: "Un secundario con orientación en Informática",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "propuesta-lead": {
      detalle: "[Resumen de la propuesta educativa, validado por la institución.]",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Bloque 2 · Pilares.
    "pilares-eyebrow": {
      titulo: "Institucional",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "pilares-titulo": {
      titulo: "[Pilares según el proyecto institucional]",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "pilares-link": {
      titulo: "Conocer más",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--accent",
    },

    // Bloque 3 · Adelanto de Experiencias.
    "experiencias-eyebrow": {
      titulo: "Experiencias",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "experiencias-titulo": {
      titulo: "La comunidad IPSEL",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "experiencias-link": {
      titulo: "Ver más",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--accent",
    },

    // Bloque 3 · Adelanto de Noticias.
    "noticias-eyebrow": {
      titulo: "Noticias",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "noticias-titulo": {
      titulo: "Novedades del colegio",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "noticias-link": {
      titulo: "Ver todas",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--accent",
    },
  },

  // Estadísticas del hero (bloque 1). Solo datos confirmados; no inventar cifras.
  stats: [
    { titulo: "5", detalle: "Años de cursado" },
    { titulo: "Informática", detalle: "Orientación" },
  ],

  // Bloque 2 · Propuesta educativa.
  propuesta: [
    {
      titulo: "Nivel secundario",
      detalle: "5 años de cursado.",
      enlace: { texto: "Ver plan de estudios", href: "plan-estudios.html" },
    },
    {
      titulo: "Orientación en Informática",
      detalle: "[Descripción real de la orientación.]",
    },
    {
      destacada: true,
      etiqueta: "Turnos e inscripciones",
      titulo: "[Dato real]",
      detalle: "[Completar con información de la institución.]",
    },
  ],

  // Bloque 2 · Pilares institucionales.
  pilares: [
    { titulo: "[Pilar 1]", detalle: "[Descripción]" },
    { titulo: "[Pilar 2]", detalle: "[Descripción]" },
    { titulo: "[Pilar 3]", detalle: "[Descripción]" },
  ],

  // Bloque 3 · Adelanto de Experiencias.
  // Solo testimonios con autorización firmada; sin datos personales de menores.
  testimonios: [
    {
      detalle: "[Testimonio autorizado]",
      autor: "[Nombre autorizado o “Comunidad IPSEL”]",
      iniciales: "[IN]",
    },
  ],

  // Bloque 3 · Adelanto de Noticias: cantidad de noticias más recientes a mostrar.
  noticiasRecientes: 3,
};
