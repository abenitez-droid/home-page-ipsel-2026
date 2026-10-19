// js/data/contacto.data.js — FUENTE DE INFORMACIÓN de la pantalla Contacto (mock).
// Responsable: Frente Contacto (grupos 16–18). Este archivo no contiene lógica.
//
// Lo consume scripts/build.js (ver el contrato en scripts/render.js) y también el
// navegador: js/pages/contacto/formulario.js lee `ui` para sus mensajes.
//   · `textos` → textos fijos. Cada clave corresponde a un data-tx="clave" de
//                contacto.html y define, opcionalmente, su tipografía.
//   · `ui`     → textos que el formulario escribe en tiempo de ejecución.
//   · bloques  → contenido repetido (datos de contacto y preguntas frecuentes).
// Flujo: editar este archivo → `npm run build` → commitear contacto.html y
// css/pages/contacto/tipografia.css.
//
// IMPORTANTE: para habilitar el envío del formulario (mailto:), completar el
// atributo data-contact-email="" del <form id="contact-form"> en contacto.html
// con un correo validado por la institución. Hasta entonces el formulario avisa
// que el canal no está habilitado y no envía nada.
const contactoData = {
  // Identidad de la pantalla (<title> y <meta name="description">).
  textos: {
    "pantalla-titulo": { titulo: "Contacto e inscripciones | IPSEL" },
    "pantalla-descripcion": { detalle: "Información de contacto de demostración para la maqueta del sitio IPSEL." },

    aviso: {
      detalle:
        "Contenido de demostración: los datos de contacto, el mapa y el formulario son ilustrativos. El formulario no envía información.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text",
    },

    // Encabezado de la pantalla.
    "page-eyebrow": {
      titulo: "Contacto · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "page-titulo": {
      titulo: "Estamos para orientarte",
      tipoFuente: "--font-sans",
      tamano: "--fs-h1",
      color: "--text",
    },
    "page-lead": {
      detalle:
        "Esta página muestra dónde aparecerá la información de contacto una vez que la institución la confirme.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Datos de contacto.
    "contactos-eyebrow": {
      titulo: "Canales · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "contactos-titulo": {
      titulo: "Datos de contacto",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "contactos-lead": {
      detalle: "Los datos definitivos se publican cuando la institución los valide.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },
    "datos-titulo": {
      titulo: "Datos institucionales",
      tipoFuente: "--font-sans",
      tamano: "--fs-h3",
      color: "--text",
    },
    "ubicacion-titulo": {
      titulo: "Ubicación",
      tipoFuente: "--font-sans",
      tamano: "--fs-h3",
      color: "--text",
    },
    "ubicacion-mapa-aria": {
      detalle: "Mapa de ubicación pendiente de confirmación institucional",
    },
    "ubicacion-mapa": {
      detalle: "Mapa pendiente de confirmación",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text-muted",
    },

    // Formulario.
    "form-eyebrow": {
      titulo: "Consulta · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "form-titulo": {
      titulo: "Formulario de contacto",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "form-nota": {
      detalle: "Formulario de demostración: no envía información. No ingreses datos personales.",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },

    "cf-nombre-label": {
      titulo: "Nombre y apellido",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-email-label": {
      titulo: "Correo electrónico",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-telefono-label": {
      titulo: "Teléfono (opcional)",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-motivo-label": {
      titulo: "Motivo",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-motivo-opcion": { titulo: "Seleccioná una opción" },
    "cf-motivo-consulta": { titulo: "Consulta general" },
    "cf-motivo-inscripciones": { titulo: "Inscripciones" },
    "cf-motivo-otro": { titulo: "Otro" },
    "cf-mensaje-label": {
      titulo: "Mensaje",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-consent-label": {
      titulo: "Autorizo el uso de mis datos únicamente para responder esta consulta.",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "cf-enviar": { titulo: "Enviar consulta" },

    // Inscripciones.
    "inscripciones-eyebrow": {
      titulo: "Inscripciones · ejemplo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "inscripciones-titulo": {
      titulo: "Información para aspirantes",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
    "inscripciones-lead": {
      detalle:
        "Requisitos, fechas, cupos y canal de consulta pendientes de confirmación. No se debe interpretar este bloque como una convocatoria abierta.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },
    "inscripciones-etiqueta": { titulo: "Próximamente" },
    "inscripciones-card-titulo": { titulo: "[Datos de inscripción]" },
    "inscripciones-card-detalle": { detalle: "Se publicarán cuando la institución los confirme." },

    // Preguntas frecuentes.
    "faq-eyebrow": {
      titulo: "Ayuda",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "faq-titulo": {
      titulo: "Preguntas frecuentes de muestra",
      tipoFuente: "--font-sans",
      tamano: "--fs-h2",
      color: "--text",
    },
  },

  // Textos que el formulario escribe al validar (js/pages/contacto/formulario.js).
  ui: {
    errorNombre: "Ingresá tu nombre y apellido.",
    errorEmailVacio: "Ingresá tu correo electrónico.",
    errorEmailInvalido: "Ingresá un correo electrónico válido.",
    errorTelefono: "Ingresá un teléfono válido o deja el campo vacío.",
    errorMotivo: "Seleccioná un motivo.",
    errorMensaje: "Escribí un mensaje de al menos 10 caracteres.",
    errorConsent: "Debés autorizar el uso de tus datos para continuar.",
    statusErrores: "Revisá los campos marcados para poder continuar.",
    statusCanalInhabilitado:
      "El canal de contacto todavía no está habilitado (dato pendiente de la institución). No se envió ningún dato.",
    statusOk: "Se abrirá tu programa de correo para enviar la consulta.",
    asuntoCorreo: "Consulta desde el sitio",
    etiquetaNombre: "Nombre",
    etiquetaCorreo: "Correo",
    etiquetaTelefono: "Teléfono",
  },

  // Datos de contacto (bloque 16). Completar solo con datos confirmados.
  datos: [
    { titulo: "Dirección", detalle: "[Dato pendiente de confirmación institucional]" },
    { titulo: "Horarios de atención", detalle: "[Dato pendiente de confirmación institucional]" },
    { titulo: "Teléfono", detalle: "[Dato pendiente de confirmación institucional]" },
    { titulo: "Correo electrónico", detalle: "[Dato pendiente de confirmación institucional]" },
  ],

  // Preguntas frecuentes (bloque 18).
  faq: [
    {
      titulo: "¿Cómo consulto los requisitos de inscripción?",
      detalle: "La información se agregará cuando estén confirmados los requisitos y el canal oficial de consulta.",
    },
    {
      titulo: "¿El formulario de esta página envía mis datos?",
      detalle: "No. Esta página es una demostración y no recopila ni transmite datos personales.",
    },
    {
      titulo: "¿Cuándo estarán disponibles los datos de contacto?",
      detalle: "Cuando la institución confirme la dirección, los horarios, el teléfono y el correo electrónico.",
    },
  ],
};
