let selectedYear = 1;
let selectedSubjectCode = "MAT101";

// Textos que la página escribe en tiempo de ejecución: vienen del mock de la
// pantalla (js/data/plan-estudios.data.js → `ui`). El respaldo evita errores si
// el mock no está cargado.
const UI = (typeof planEstudiosData !== "undefined" && planEstudiosData.ui) || {};
const t = (clave, valores) =>
  String(UI[clave] || "").replace(/\{(\w+)\}/g, (_, k) => (valores && k in valores ? valores[k] : ""));

const body = document.querySelector("#subjects-body");
const cards = document.querySelector("#subject-cards");
const searchInput = document.querySelector("#subject-search");
const typeFilter = document.querySelector("#type-filter");
const detail = document.querySelector("#subject-detail");
const count = document.querySelector("#subject-count");
const message = document.querySelector("#results-message");

function filteredSubjects() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  const type = typeFilter.value;
  return (planEstudiosData.materias[selectedYear] || []).filter(subject => {
    const matchesQuery = `${subject.codigo} ${subject.titulo}`.toLocaleLowerCase("es").includes(query);
    return matchesQuery && (type === "all" || subject.tipo === type);
  });
}

function createActionButton(subject) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn--outline btn--sm";
  button.textContent = UI.verDetalle || "+ Ver";
  button.setAttribute("aria-label", t("verDetalleAria", { materia: subject.titulo }));
  button.addEventListener("click", () => showDetail(subject.codigo));
  return button;
}

function renderSubjects() {
  const subjects = filteredSubjects();
  body.replaceChildren();
  cards.replaceChildren();

  subjects.forEach(subject => {
    const row = document.createElement("tr");
    [subject.codigo, subject.titulo, subject.horas].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    const typeCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "type-badge";
    badge.textContent = subject.tipo;
    typeCell.append(badge);
    row.append(typeCell);
    const actionCell = document.createElement("td");
    actionCell.className = "subject-action";
    actionCell.append(createActionButton(subject));
    row.append(actionCell);
    body.append(row);

    const card = document.createElement("article");
    card.className = "subject-card";
    const info = document.createElement("div");
    info.className = "subject-card__info";
    const code = document.createElement("div");
    code.className = "subject-card__code";
    code.textContent = t("codigoPrefijo", { codigo: subject.codigo });
    const name = document.createElement("div");
    name.className = "subject-card__name";
    name.textContent = subject.titulo;
    const hours = document.createElement("div");
    hours.className = "subject-card__hours";
    hours.textContent = t("horasResumen", { semanal: subject.semanal, tipo: subject.tipo });
    info.append(code, name, hours);
    card.append(info, createActionButton(subject));
    cards.append(card);
  });

  count.textContent = `${subjects.length} ${subjects.length === 1 ? UI.materiaSingular : UI.materiaPlural}`;
  message.textContent = subjects.length ? "" : UI.sinResultados;
  document.querySelector("#study-title").textContent = t("tituloMaterias", { año: planEstudiosData.años[selectedYear] });
  document.querySelectorAll(".year-tab").forEach(tab => {
    const active = Number(tab.dataset.year) === selectedYear;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  if (!subjects.some(subject => subject.codigo === selectedSubjectCode)) {
    detail.hidden = true;
  }
}

function showDetail(code) {
  const subject = (planEstudiosData.materias[selectedYear] || []).find(item => item.codigo === code);
  if (!subject) return;
  selectedSubjectCode = code;
  document.querySelector("#detail-title").textContent = t("detalleTitulo", { materia: subject.titulo, codigo: subject.codigo });
  const meta = document.querySelector("#detail-meta");
  meta.replaceChildren();
  [t("totales", { horas: subject.horas }), subject.periodo, subject.tipo, subject.semanal].forEach(text => {
    const tag = document.createElement("span");
    tag.textContent = text;
    meta.append(tag);
  });
  document.querySelector("#detail-description").textContent = t("descripcionPrefijo") + subject.detalle;
  const prerequisites = document.querySelector("#detail-prerequisites");
  prerequisites.replaceChildren();
  const strong = document.createElement("strong");
  strong.textContent = t("correlativasPrefijo");
  prerequisites.append(strong, document.createTextNode(subject.correlativas));
  detail.hidden = false;
  detail.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
}

function closeDetail() { detail.hidden = true; }

document.querySelectorAll(".year-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    selectedYear = Number(tab.dataset.year);
    selectedSubjectCode = "";
    renderSubjects();
  });
});
searchInput.addEventListener("input", () => {
  document.querySelector("#clear-search").hidden = !searchInput.value;
  renderSubjects();
});
document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  document.querySelector("#clear-search").hidden = true;
  renderSubjects();
  searchInput.focus();
});
typeFilter.addEventListener("change", renderSubjects);
document.querySelector("#close-detail").addEventListener("click", closeDetail);
document.querySelector("#close-detail-bottom").addEventListener("click", closeDetail);

const careerToggle = document.querySelector(".career-panel__toggle");
careerToggle.addEventListener("click", () => {
  const expanded = careerToggle.getAttribute("aria-expanded") === "true";
  careerToggle.setAttribute("aria-expanded", String(!expanded));
  document.querySelector("#career-content").hidden = expanded;
});

document.querySelector("#download-plan").addEventListener("click", () => window.print());

renderSubjects();
showDetail("MAT101");
