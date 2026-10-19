// js/data/institucional.data.js — FUENTE DE INFORMACIÓN de la pantalla Institucional (mock).
// Responsable: Frente Institucional (grupos 4–6). Este archivo no contiene lógica.
//
// Lo consume scripts/build.js (ver el contrato en scripts/render.js):
//   · `textos` → textos fijos. Cada clave corresponde a un data-tx="clave" de
//                institucional.html y define, opcionalmente, su tipografía.
//   · bloques  → contenido repetido (ficha, hitos, misión/visión, valores…).
// Flujo: editar este archivo → `npm run build` → commitear institucional.html y
// css/pages/institucional/tipografia.css.
//
// No publicar identidades ni datos ficticios: completar solo con información
// validada por la institución.
const institucionalData = {
  // Identidad de la pantalla (<title> y <meta name="description">).
  textos: {
    "pantalla-titulo": { titulo: "Institucional | IPSEL" },
    "pantalla-descripcion": { detalle: "Información institucional de demostración para la maqueta de IPSEL." },

    aviso: {
      detalle:
        "Contenido de demostración: los textos de esta página son ejemplos y no describen la historia, organización ni autoridades reales del colegio.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text",
    },

    // Historia e identidad.
    "historia-eyebrow": {
      titulo: "Institucional · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "historia-titulo": {
      titulo: "Conocé nuestra institución",
      tipoFuente: "--font-sans",
      tamano: "--fs-h1",
      color: "--text",
    },
    "historia-lead": {
      detalle:
        "Este espacio presenta la historia y la identidad del colegio. Los textos definitivos se publican cuando la institución los valide y autorice.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },
    "historia-link": {
      titulo: "Ver autoridades",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--accent",
    },

    // Trayectoria.
    "trayectoria-eyebrow": {
      titulo: "Proyecto institucional · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "trayectoria-titulo": {
      titulo: "Nuestra trayectoria",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "trayectoria-lead": {
      detalle: "Hitos de la historia del colegio, pendientes de validación institucional.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Misión y visión.
    "identidad-eyebrow": {
      titulo: "Identidad · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "identidad-titulo": {
      titulo: "Misión y visión",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },

    // Valores.
    "valores-eyebrow": {
      titulo: "Principios · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "valores-titulo": {
      titulo: "Valores de muestra",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },

    // Autoridades.
    "autoridades-eyebrow": {
      titulo: "Organización · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "autoridades-titulo": {
      titulo: "Autoridades",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "autoridades-lead": {
      detalle: "No se publican identidades ficticias. Los nombres se agregan con autorización.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Plantel docente.
    "docentes-eyebrow": {
      titulo: "Equipo · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "docentes-titulo": {
      titulo: "Plantel docente",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "docentes-lead": {
      detalle: "Áreas, nombres y cargos se agregan solo con autorización institucional.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },
    "docentes-link": {
      titulo: "Ir a contacto",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--accent",
    },
  },

  // Ficha rápida (bloque 4). Los tres primeros datos son institucionales y confirmados.
  facts: [
    { titulo: "Nombre", detalle: "Colegio Privado IPSEL" },
    { titulo: "Nivel", detalle: "Secundario · 5 años" },
    { titulo: "Orientación", detalle: "Informática" },
    { titulo: "Fundación", detalle: "[Año pendiente de confirmación]" },
  ],

  // Trayectoria / historia (bloque 4).
  hitos: [
    { fecha: "[Año]", detalle: "[Hito fundacional de la institución, pendiente de confirmación.]" },
    { fecha: "[Año]", detalle: "[Incorporación de la orientación en Informática, pendiente de confirmación.]" },
    { fecha: "[Año]", detalle: "[Hito institucional reciente, pendiente de confirmación.]" },
  ],

  // Misión y visión (bloque 5).
  mision: {
    titulo: "Misión de ejemplo",
    detalle:
      "Acompañar la formación mediante experiencias de aprendizaje, participación y desarrollo de conocimientos. Texto ilustrativo pendiente de validación institucional.",
  },
  vision: {
    titulo: "Visión de ejemplo",
    detalle:
      "Construir una comunidad educativa que promueva el aprendizaje continuo y la colaboración. Texto ilustrativo, no es una declaración oficial.",
  },

  // Valores (bloque 5). "icono" es decorativo (aria-hidden).
  valores: [
    { icono: "✚", titulo: "Respeto", detalle: "Valor de ejemplo pendiente de validación." },
    { icono: "◈", titulo: "Colaboración", detalle: "Valor de ejemplo pendiente de validación." },
    { icono: "✦", titulo: "Curiosidad", detalle: "Valor de ejemplo pendiente de validación." },
  ],

  // Autoridades (bloque 6). No usar nombres ficticios.
  autoridades: [
    { titulo: "[Nombre y apellido]", cargo: "[Cargo directivo]", detalle: "[Breve reseña pendiente de validación institucional.]" },
    { titulo: "[Nombre y apellido]", cargo: "[Cargo directivo]", detalle: "[Breve reseña pendiente de validación institucional.]" },
    { titulo: "[Nombre y apellido]", cargo: "[Cargo directivo]", detalle: "[Breve reseña pendiente de validación institucional.]" },
  ],

  // Áreas docentes (bloque 6).
  areas: [
    { titulo: "[Área]", detalle: "[Referencia pendiente de validación.]" },
    { titulo: "[Área]", detalle: "[Referencia pendiente de validación.]" },
    { titulo: "[Área]", detalle: "[Referencia pendiente de validación.]" },
    { titulo: "[Área]", detalle: "[Referencia pendiente de validación.]" },
  ],
};
