// formulario.js — validación accesible del formulario de contacto.
// Responsable: Frente Contacto (grupo 16).
//
// Importante: el sitio es estático y no tiene backend.
//   - El formulario NO envía datos por sí mismo.
//   - Si el <form> tiene configurado data-contact-email="correo@dominio", al
//     validar abre el cliente de correo con un mailto:. Mientras ese dato no
//     esté confirmado por la institución (queda vacío), informa que el canal
//     todavía no está habilitado y no envía nada.
//   - Sin JavaScript, el navegador valida con los atributos HTML nativos.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  // Mensajes accesibles: vienen del mock de la pantalla (js/data/contacto.data.js
  // → `ui`). El respaldo genérico solo se usa si el mock no está cargado.
  const UI = (typeof contactoData !== "undefined" && contactoData.ui) || {};
  const t = (clave) => UI[clave] || "Revisá este campo.";

  const status = form.querySelector("#form-status");
  let submitted = false;

  // Mensaje de error por campo. "el" es el control (para checkbox).
  const rules = {
    nombre: (v) => (v.trim().length < 2 ? t("errorNombre") : ""),
    email: (v) => {
      if (v.trim() === "") return t("errorEmailVacio");
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : t("errorEmailInvalido");
    },
    telefono: (v) =>
      v.trim() && !/^[0-9+()\s-]{6,}$/.test(v.trim()) ? t("errorTelefono") : "",
    motivo: (v) => (v === "" ? t("errorMotivo") : ""),
    mensaje: (v) => (v.trim().length < 10 ? t("errorMensaje") : ""),
    consent: (_v, el) => (el.checked ? "" : t("errorConsent")),
  };

  const controls = [...form.querySelectorAll("[name]")];

  const errorFor = (el) => form.querySelector(`#${el.id}-error`);
  const messageFor = (el) => {
    const rule = rules[el.name];
    return rule ? rule(el.value, el) : "";
  };

  function showError(el, message) {
    const error = errorFor(el);
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    if (message) el.setAttribute("aria-invalid", "true");
    else el.removeAttribute("aria-invalid");
  }

  function validateAll() {
    let firstInvalid = null;
    controls.forEach((el) => {
      const message = messageFor(el);
      showError(el, message);
      if (message && !firstInvalid) firstInvalid = el;
    });
    return firstInvalid;
  }

  // Validación en vivo solo después del primer intento de envío.
  controls.forEach((el) => {
    const revalidate = () => {
      if (submitted) showError(el, messageFor(el));
    };
    el.addEventListener("blur", revalidate);
    el.addEventListener("input", revalidate);
    el.addEventListener("change", revalidate);
  });

  // Mejora progresiva: si JS está activo, tomamos el control de la validación.
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitted = true;

    const firstInvalid = validateAll();
    if (firstInvalid) {
      status.dataset.state = "error";
      status.textContent = t("statusErrores");
      firstInvalid.focus();
      return;
    }

    const email = (form.dataset.contactEmail || "").trim();
    if (!email) {
      status.dataset.state = "error";
      status.textContent = t("statusCanalInhabilitado");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const subject = `${UI.asuntoCorreo || "Consulta"} (${data.motivo})`;
    const body = [
      `${UI.etiquetaNombre || "Nombre"}: ${data.nombre}`,
      `${UI.etiquetaCorreo || "Correo"}: ${data.email}`,
      data.telefono ? `${UI.etiquetaTelefono || "Teléfono"}: ${data.telefono}` : "",
      "",
      data.mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    status.dataset.state = "ok";
    status.textContent = t("statusOk");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  });
});
