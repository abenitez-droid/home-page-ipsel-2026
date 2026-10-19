// js/data/noticias.data.js — FUENTE DE INFORMACIÓN de la pantalla Noticias (mock).
// Responsable: Frente Noticias (grupos 10–12). Este archivo no contiene lógica.
//
// Lo consume scripts/build.js (ver el contrato en scripts/render.js) y también el
// navegador: js/pages/noticias/noticias.js lee `noticias` y `ui`.
//   · `textos`   → textos fijos. Cada clave corresponde a un data-tx="clave" de
//                  noticias.html y define, opcionalmente, su tipografía.
//   · `noticias` → registros (título, detalle, fecha, tipo, autor, contenido).
//   · `ui`       → textos que la página escribe en tiempo de ejecución.
// Flujo: editar este archivo → `npm run build` → commitear noticias.html y
// css/pages/noticias/tipografia.css.
//
// Reemplazar por noticias reales validadas por la institución.
const noticiasData = {
  // Identidad de la pantalla (<title> y <meta name="description">).
  textos: {
    "pantalla-titulo": { titulo: "IPSEL | Noticias" },
    "pantalla-descripcion": { detalle: "Noticias de demostración para la maqueta del sitio IPSEL." },

    aviso: {
      detalle:
        "Contenido de demostración: estas noticias, fechas y categorías son ficticias y no describen hechos institucionales.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text",
    },

    // Encabezado de la pantalla.
    "encabezado-eyebrow": {
      titulo: "Actualidad institucional",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "encabezado-titulo": {
      titulo: "Página interna — Noticias",
      tipoFuente: "--font-sans",
      tamano: "--fs-h1",
      color: "--text",
    },
    "encabezado-lead": {
      detalle: "Listado y detalle de noticias de la institución.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Listado.
    "listado-eyebrow": {
      titulo: "Novedades",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "listado-titulo": { titulo: "Listado de noticias" },
    "listado-count": { titulo: "6 noticias" },

    // Filtros.
    "filtros-titulo": { titulo: "Filtros" },
    "filtros-limpiar": { titulo: "Limpiar" },
    "filtro-categoria-label": {
      titulo: "Categoría",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "filtro-categoria-todas": { titulo: "Todas las categorías" },
    "filtro-fecha-label": {
      titulo: "Fecha",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "filtro-fecha-todas": { titulo: "Todas las fechas" },
    "filtro-buscar-label": {
      titulo: "Buscar",
      tipoFuente: "--font-sans",
      tamano: "--fs-sm",
      color: "--text",
    },
    "filtro-buscar-placeholder": { detalle: "Título o palabra clave…" },

    // Paginación.
    "paginacion-etiqueta": { detalle: "Paginación" },
    "pagina-anterior": { titulo: "‹ Anterior" },
    "pagina-siguiente": { titulo: "Siguiente ›" },

    // Detalle.
    "detalle-eyebrow": {
      titulo: "Noticia seleccionada",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "detalle-seccion-titulo": { titulo: "Detalle de noticia" },
    "detalle-hero-aria": { detalle: "Imagen principal de la noticia" },
    "detalle-hero": { detalle: "Imagen principal" },
    "detalle-categoria": { titulo: "Institucional" },
    "detalle-titulo": { titulo: "Título de la noticia seleccionada" },
    "detalle-compartir": { titulo: "Compartir:" },
    "detalle-compartir-facebook": { detalle: "Compartir en Facebook" },
    "detalle-compartir-x": { detalle: "Compartir en X" },
    "detalle-compartir-copiar": { detalle: "Copiar enlace" },
    "detalle-contenido-titulo": { titulo: "Contenido" },

    // Relacionadas.
    "relacionadas-eyebrow": {
      titulo: "Seguí leyendo",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "relacionadas-titulo": { titulo: "Noticias relacionadas" },
  },

  // Textos que la página escribe al interactuar (js/pages/noticias/noticias.js).
  ui: {
    verNoticia: "Ver noticia →",
    noticiaSingular: "noticia",
    noticiaPlural: "noticias",
    sinResultados: "No se encontraron noticias para los filtros seleccionados.",
    sinResultadosAyuda: "Probá cambiar la categoría, la fecha o las palabras de búsqueda.",
    publicado: "Publicado: {fecha}",
    categoria: "Categoría: {tipo}",
    por: "Por: {autor}",
    imagenPrincipal: "Imagen principal",
    imagenIlustrativa: "Imagen ilustrativa de {titulo}",
    sinImagen: "Sin imagen disponible",
    sinResultadosTitulo: "No hay noticias para mostrar",
    sinResultadosCategoria: "Sin resultados",
    enlaceCopiado: "Enlace copiado",
    enlaceManual: "Copiá el enlace desde la barra del navegador",
    seleccionada: "Noticia seleccionada: {titulo}",
    pagina: "Página {n}",
  },

  // Registros de noticias.
  noticias: [
    { id: 1, titulo: "Título de Noticia 1", tipo: "Institucional", fecha: "2024-10-12", autor: "Comunicaciones Institucionales", detalle: "Una actualización institucional con información relevante para toda la comunidad educativa.", contenido: ["La institución comparte novedades y avances de interés para estudiantes, docentes, familias y toda la comunidad educativa.", "Esta publicación reúne la información principal, los objetivos de la iniciativa y las próximas acciones previstas. Se recomienda consultar los canales institucionales para conocer futuras actualizaciones.", "Para más información, comunicarse con el área responsable a través de los canales oficiales."] },
    { id: 2, titulo: "Título de Noticia 2", tipo: "Comunicados", fecha: "2024-10-08", autor: "Secretaría Institucional", detalle: "Información y avisos importantes para estudiantes y familias.", contenido: ["La institución informa a la comunidad sobre novedades administrativas y recordatorios importantes para el período en curso.", "Se solicita revisar los canales oficiales y tener en cuenta las fechas comunicadas por las áreas correspondientes."] },
    { id: 3, titulo: "Título de Noticia 3", tipo: "Eventos", fecha: "2024-10-03", autor: "Equipo de Eventos", detalle: "Conocé las próximas actividades, encuentros y propuestas institucionales.", contenido: ["La comunidad institucional participará de una nueva actividad destinada a promover el encuentro, el aprendizaje y la colaboración.", "Próximamente se publicarán los horarios, la agenda y las indicaciones necesarias para participar."] },
    { id: 4, titulo: "Jornada de participación comunitaria", tipo: "Comunidad", fecha: "2024-09-21", autor: "Comunicaciones Institucionales", detalle: "Una jornada para compartir experiencias y fortalecer los vínculos de la comunidad.", contenido: ["La jornada propone un espacio de participación, intercambio de experiencias y trabajo conjunto entre los integrantes de la comunidad.", "La información sobre las actividades y los horarios se actualizará en los canales institucionales."] },
    { id: 5, titulo: "Actualización de información académica", tipo: "Institucional", fecha: "2024-09-10", autor: "Secretaría Académica", detalle: "Consultá las novedades relacionadas con la información académica institucional.", contenido: ["Se encuentra disponible una actualización de la información académica para facilitar el acceso a los contenidos institucionales.", "Ante cualquier consulta, se recomienda contactar a la secretaría correspondiente."] },
    { id: 6, titulo: "Encuentro de proyectos educativos", tipo: "Eventos", fecha: "2024-08-28", autor: "Equipo de Eventos", detalle: "Presentación de proyectos, ideas y experiencias desarrolladas en la institución.", contenido: ["El encuentro busca visibilizar los proyectos educativos y generar oportunidades de intercambio entre participantes.", "La institución agradece el compromiso de todas las personas que colaboran con estas iniciativas."] }
  ],
};
