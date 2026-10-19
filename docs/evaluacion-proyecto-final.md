# Proyecto Final - Sitio Web Institucional - Evaluación Corregida

**Nivel:** Trabajo Final de Secundaria  
**Tecnologías:** HTML5, CSS3, Git, GitHub

---

## 1. Conformación de Equipos (CORREGIDO)

### Nuevo Criterio

> **No habrá límite de cantidad de grupos.** La cantidad de equipos se definirá según la matrícula del curso.
> **Cada grupo podrá estar conformado con un máximo de 4 integrantes.** No se permiten grupos de 5 o más personas.

Esta modificación reemplaza el modelo anterior de 6 equipos fijos y permite mayor flexibilidad y participación equitativa.

### Distribución de Trabajo Sugerida

El proyecto cuenta con 7 secciones principales. La distribución se adapta a la cantidad de grupos formados:

* **Secciones base:** Inicio, Institucional, Nosotros (Autoridades y Docentes), Plan de Estudios, Noticias, Experiencias, Contacto.
* Si hay **menos de 7 grupos:** Cada grupo toma responsabilidad de 1 a 2 secciones completas.
* Si hay **7 grupos o más:** Algunos grupos colaborarán en la misma sección pero en funcionalidades diferentes (Ej: en Plan de Estudios, un grupo desarrolla 1°, 2° y 3° año, y otro grupo 4° y 5°).

**Obligatorio:** Registrar la asignación de secciones en el `README.md` del repositorio al inicio del proyecto. Ninguna sección puede quedar sin responsable.

### Equipo Transversal de Calidad (Rotativo)

Se recomienda designar 1 integrante por grupo para conformar una comisión de Calidad, encargada de:

* Revisar que no haya conflictos antes de fusionar a `main`.
* Validar accesibilidad (etiquetas `alt`, contraste, etiquetas semánticas).
* Probar el diseño responsive en celulares.

---

## 2. Estructura Técnica Recomendada

Para evitar desorden al unir el trabajo de todos los grupos:

```text
/
├── index.html
├── institucional.html
├── plan-estudios.html
├── noticias.html
├── experiencias.html
├── contacto.html
├── css/
│   └── styles.css
├── img/
│   └── (fotografías optimizadas y comprimidas)
└── README.md (con integrantes y tareas asignadas)
```

### Buenas Prácticas de Git (GitHub Flow)

1.  Rama `main` protegida: solo se fusiona código probado y aprobado.
2.  Ramas por funcionalidad: `feature/seccion-contacto`, `feature/plan-estudios`, `feature/estilos-globales`.
3.  Pull Requests (PR) obligatorios con revisión cruzada: al menos un compañero de *otro* grupo debe aprobar el PR antes del merge.
4.  Mensajes de commit descriptivos y convencionales:
    * `feat: agrega grilla de profesores`
    * `fix: corrige enlace de contacto roto`
    * `docs: redacta historia del colegio`
    * `style: ajusta colores del footer`

---

## 3. Criterios de Evaluación (CORREGIDO)

### Principio Fundamental

**La calificación es INDIVIDUAL y se basa en el aporte comprobable al desarrollo, no en la nota grupal.**

> Todo aporte solo es válido si está registrado en GitHub con el usuario del alumno (commits, PRs, comentarios de revisión).

### Rúbrica de Calificación Individual por Aporte

| Nota | Nivel Alcanzado | Descripción del Aporte | Evidencia Requerida en GitHub |
| :--- | :--- | :--- | :--- |
| **6 a 7** | **Aporte de Contenido / Redacción** | El aporte es únicamente el de redacción de texto. Recopilación de información, redacción de historia institucional, misión, visión, noticias, experiencias. No modifica código estructural. | Commits que editan contenido textual dentro de etiquetas HTML (`<p>`, `<h2>`, `<li>`). Entrega de borradores en `/docs` o en el cuerpo del PR. |
| **8** | **Aporte y Modificación de Código** | Aporta y modifica código existente. Corrige errores, mejora estilos, optimiza elementos. | Commits `fix:` o `style:`. Ej: corrige contraste, agrega atributos `alt`, ajusta responsive de una sección, corrige enlaces. Visible en `Files changed` del PR. |
| **9** | **Desarrollo de Funcionalidad** | Desarrolla o modifica una función / componente completo y funcional. | Commit `feat:`. Ej: crea desde cero la sección de Plan de Estudios con tablas o tarjetas, implementa formulario de contacto, crea componente reutilizable de tarjeta de noticias, integra iframe de Google Maps. |
| **10** | **Aporte Integral / Destacado** | Realiza dos o más de las actividades previamente nombradas de forma destacada. Es el perfil full-stack del grupo. | Historial que combina al menos dos niveles anteriores. Ej: Redacción + Desarrollo de una función. O Desarrollo de una función + Resolución de conflictos de merge y Code Review para todo el curso. |

#### Ejemplos para alcanzar el 10:

* Redactó la sección "Nosotros" (nivel 6-7) + desarrolló la grilla de docentes con CSS Grid (nivel 9).
* Modificó y mejoró el `style.css` global (nivel 8) + creó el componente de noticias (nivel 9).
* Desarrolló el footer con formulario (nivel 9) + actuó como Git Master resolviendo 3 conflictos de merge y haciendo 2 code reviews (nivel 8/9).

### Evidencias y Control Docente

El docente verificará la nota con:

1.  **GitHub Insights:** `git log`, `git blame`, y gráfico de contribuidores.
2.  **Pull Requests:** Cada alumno debe ser autor de al menos 1 PR.
3.  **Ficha de Autoevaluación (Entregable final):** Cada alumno entrega un párrafo con:
    * Qué hizo.
    * Link a sus 2 commits/PRs más importantes.
    * Qué nota considera que merece según esta rúbrica y por qué.

---

## 4. Criterios de Éxito del Producto Final (Nota Colectiva del Sitio)

Para que el proyecto se considere aprobado como producto, debe cumplir además:

* **HTML5 Semántico:** Uso correcto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
* **Diseño Adaptable (Responsive):** Uso de Flexbox o CSS Grid y al menos una `@media query` para móviles.
* **Optimización:** Imágenes comprimidas (TinyPNG, Squoosh) y peso total del sitio < 5MB.
* **Accesibilidad y Legal:** Contraste AA, imágenes con `alt`, uso de fuentes autorizadas, sin publicación de datos personales sensibles de menores sin autorización.

---

## 5. Entregables Finales

1.  Repositorio en GitHub con todo el historial.
2.  Sitio desplegado en GitHub Pages.
3.  Ficha de autoevaluación individual.

**Proyecto muy bien estructurado para un trabajo final de secundaria: cubre aspectos técnicos, metodológicos y legales/éticos.**
