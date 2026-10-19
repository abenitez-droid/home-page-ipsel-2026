// js/data/plan-estudios.data.js — FUENTE DE INFORMACIÓN de la pantalla Plan de Estudios (mock).
// Responsable: Frente Plan de Estudios (grupos 7–9). Este archivo no contiene lógica.
//
// Lo consume scripts/build.js (ver el contrato en scripts/render.js) y también el
// navegador: js/pages/plan-estudios/plan-estudios.js lee `materias`, `años` y `ui`.
//   · `textos`  → textos fijos. Cada clave corresponde a un data-tx="clave" de
//                 plan-estudios.html y define, opcionalmente, su tipografía.
//   · `años`    → etiqueta de cada año de cursado (pestañas).
//   · `materias`→ materias por año.
//   · `ui`      → textos que la página escribe en tiempo de ejecución.
// Flujo: editar este archivo → `npm run build` → commitear plan-estudios.html y
// css/pages/plan-estudios/tipografia.css.
//
// Reemplazar por el plan real validado por la institución.
const planEstudiosData = {
  // Identidad de la pantalla (<title> y <meta name="description">).
  textos: {
    "pantalla-titulo": { titulo: "Plan de estudios | IPSEL" },
    "pantalla-descripcion": { detalle: "Plan de estudios de demostración para la maqueta del sitio IPSEL." },

    aviso: {
      detalle:
        "Contenido de demostración: materias, carga horaria y datos académicos de esta página son ilustrativos y no representan el plan oficial.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text",
    },

    // Oferta académica.
    "oferta-eyebrow": {
      titulo: "Oferta académica",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "oferta-titulo": {
      titulo: "Bachiller en Informática",
      tipoFuente: "--font-sans",
      tamano: "--fs-h1",
      color: "--text",
    },
    "oferta-subtitulo": { detalle: "Plan de estudios · 1.er a 5.º año" },
    "oferta-intro": {
      detalle: "Explorá las materias, la carga horaria y los detalles de cada espacio curricular.",
      tipoFuente: "--font-sans",
      tamano: "--fs-base",
      color: "--text-muted",
    },

    // Información de carrera.
    "carrera-titulo": {
      titulo: "Información de carrera",
      tipoFuente: "--font-sans",
      tamano: "--fs-h3",
      color: "--text",
    },
    "carrera-dato-carrera-titulo": { titulo: "Carrera" },
    "carrera-dato-carrera-detalle": { detalle: "Carrera de muestra" },
    "carrera-dato-duracion-titulo": { titulo: "Duración" },
    "carrera-dato-duracion-detalle": { detalle: "5 años" },
    "carrera-dato-modalidad-titulo": { titulo: "Modalidad" },
    "carrera-dato-modalidad-detalle": { detalle: "Presencial" },
    "carrera-dato-titulacion-titulo": { titulo: "Titulación" },
    "carrera-dato-titulacion-detalle": { detalle: "Titulación de ejemplo" },
    "carrera-dato-cupos-titulo": { titulo: "Cupos" },
    "carrera-dato-cupos-detalle": { detalle: "Dato de ejemplo" },
    "objetivo-titulo": { titulo: "Objetivo" },
    "objetivo-item-1": { detalle: "Formar profesionales críticos y reflexivos." },
    "objetivo-item-2": { detalle: "Desarrollar competencias para la docencia e investigación." },
    "descargar-plan": { titulo: "Descargar plan en PDF" },

    // Buscador y filtros.
    "buscador-etiqueta": { detalle: "Buscar materia por nombre o código" },
    "buscador-placeholder": { detalle: "Buscar materia por nombre o código…" },
    "buscador-limpiar": { detalle: "Limpiar búsqueda" },
    "filtro-tipo-etiqueta": { detalle: "Filtrar por tipo de materia" },
    "filtro-tipo-todos": { titulo: "Todos los tipos" },
    "filtro-tipo-obligatoria": { titulo: "Obligatoria" },
    "filtro-tipo-optativa": { titulo: "Optativa" },
    "años-etiqueta": { detalle: "Año de cursado" },

    // Listado y detalle de materias.
    "estudio-eyebrow": {
      titulo: "Plan de estudios",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "estudio-titulo": { titulo: "1.er año — Materias" },
    "materias-count": { titulo: "4 materias" },
    "tabla-codigo": { titulo: "Código" },
    "tabla-materia": { titulo: "Materia" },
    "tabla-horas": { titulo: "Horas" },
    "tabla-tipo": { titulo: "Tipo" },
    "tabla-acciones": { detalle: "Acciones" },
    "materias-lista-etiqueta": { detalle: "Materias" },
    "detalle-eyebrow": {
      titulo: "Detalle de materia seleccionada",
      tipoFuente: "--font-sans",
      tamano: "--fs-xs",
      color: "--accent",
    },
    "detalle-titulo": { titulo: "Matemática I" },
    "detalle-cerrar": { detalle: "Cerrar detalle" },
    "detalle-cerrar-abajo": { titulo: "Cerrar detalle" },
  },

  // Textos que la página escribe al interactuar (js/pages/plan-estudios/plan-estudios.js).
  ui: {
    verDetalle: "+ Ver",
    verDetalleAria: "Ver detalle de {materia}",
    codigoPrefijo: "CÓDIGO: {codigo}",
    horasResumen: "Horas: {semanal} · {tipo}",
    materiaSingular: "materia",
    materiaPlural: "materias",
    sinResultados: "No se encontraron materias con esos criterios.",
    tituloMaterias: "{año} — Materias",
    detalleTitulo: "{materia} ({codigo})",
    totales: "{horas} totales",
    descripcionPrefijo: "Descripción: ",
    correlativasPrefijo: "Correlativas: ",
    pagina: "Página {n}",
  },

  // Etiqueta de cada año de cursado (pestañas). Las genera build.js.
  años: {
    1: "1.er año",
    2: "2.º año",
    3: "3.er año",
    4: "4.º año",
    5: "5.º año",
  },

  // Materias por año.
  materias: {
    1: [
      { codigo: "MAT101", titulo: "Matemática I", horas: "64 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Fundamentos de álgebra, funciones, estadística descriptiva y resolución de problemas.", correlativas: "Sin correlativas" },
      { codigo: "LEN101", titulo: "Lengua", horas: "48 hs", semanal: "3 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Lectura comprensiva, producción escrita y herramientas de comunicación académica.", correlativas: "Sin correlativas" },
      { codigo: "INT101", titulo: "Introducción a las Ciencias de la Educación", horas: "56 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Conceptos introductorios sobre educación, instituciones y prácticas educativas.", correlativas: "Sin correlativas" },
      { codigo: "PSI101", titulo: "Psicología del Desarrollo I", horas: "48 hs", semanal: "3 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Principales enfoques del desarrollo humano y sus implicancias educativas.", correlativas: "Sin correlativas" }
    ],
    2: [
      { codigo: "PED201", titulo: "Pedagogía General", horas: "64 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Anual", detalle: "Principales teorías pedagógicas y su relación con las prácticas de enseñanza.", correlativas: "A confirmar según plan oficial" },
      { codigo: "PSI201", titulo: "Psicología del Desarrollo II", horas: "48 hs", semanal: "3 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Procesos del desarrollo y aprendizaje en distintos contextos.", correlativas: "A confirmar según plan oficial" },
      { codigo: "HIS201", titulo: "Historia de la Educación", horas: "56 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Recorrido histórico de las instituciones y las ideas educativas.", correlativas: "A confirmar según plan oficial" }
    ],
    3: [
      { codigo: "DID301", titulo: "Didáctica General", horas: "64 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Anual", detalle: "Planificación, estrategias de enseñanza, evaluación y diseño didáctico.", correlativas: "A confirmar según plan oficial" },
      { codigo: "INV301", titulo: "Metodología de la Investigación", horas: "56 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Introducción al diseño de investigaciones en el campo educativo.", correlativas: "A confirmar según plan oficial" },
      { codigo: "SOC301", titulo: "Sociología de la Educación", horas: "48 hs", semanal: "3 hs/sem", tipo: "Optativa", periodo: "Cuatrimestral", detalle: "Relaciones entre educación, sociedad, cultura y desigualdad.", correlativas: "A confirmar según plan oficial" }
    ],
    4: [
      { codigo: "GES401", titulo: "Gestión de Instituciones Educativas", horas: "64 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Anual", detalle: "Organización institucional, planificación y gestión de proyectos educativos.", correlativas: "A confirmar según plan oficial" },
      { codigo: "EVA401", titulo: "Evaluación Educativa", horas: "48 hs", semanal: "3 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Enfoques, instrumentos y criterios para evaluar aprendizajes y programas.", correlativas: "A confirmar según plan oficial" },
      { codigo: "INC401", titulo: "Educación Inclusiva", horas: "56 hs", semanal: "4 hs/sem", tipo: "Optativa", periodo: "Cuatrimestral", detalle: "Estrategias para favorecer la participación y el aprendizaje de todos los estudiantes.", correlativas: "A confirmar según plan oficial" }
    ],
    5: [
      { codigo: "PRA501", titulo: "Práctica Profesional", horas: "96 hs", semanal: "6 hs/sem", tipo: "Obligatoria", periodo: "Anual", detalle: "Integración de saberes en experiencias de intervención y práctica profesional.", correlativas: "A confirmar según plan oficial" },
      { codigo: "TES501", titulo: "Seminario de Trabajo Final", horas: "64 hs", semanal: "4 hs/sem", tipo: "Obligatoria", periodo: "Anual", detalle: "Desarrollo y presentación de un proyecto final vinculado al campo educativo.", correlativas: "A confirmar según plan oficial" },
      { codigo: "POL501", titulo: "Política y Legislación Educativa", horas: "48 hs", semanal: "3 hs/sem", tipo: "Obligatoria", periodo: "Cuatrimestral", detalle: "Normativa, políticas públicas y organización del sistema educativo.", correlativas: "A confirmar según plan oficial" }
    ]
  },
};
