# Evaluación – Proyecto Final: Sitio Web Institucional

**Única versión vigente de la rúbrica.** Otros documentos deben enlazar a este archivo, no copiarlo.

## 1. Principios

1. La calificación es **individual**, no grupal.
2. Solo cuenta lo **registrado en GitHub con el usuario del alumno** (commits, PRs, revisiones, comentarios, issues).
3. **Generar un aporte comprobable es condición de aprobación.**
4. **La no participación equivale a desaprobación.**
5. El trabajo en pareja se acredita con `Co-authored-by:` en el commit.

## 2. Rúbrica de calificación individual

| Nota | Nivel | Descripción del aporte | Evidencia en GitHub |
| :--- | :--- | :--- | :--- |
| **Desaprobado** | Sin aporte comprobable | No hay commits, PRs ni revisiones registradas a su nombre, o el aporte no es verificable. | Ninguna o insuficiente. |
| **6** | Redacción básica | Aporta texto o información que cumple lo mínimo: contenido correcto pero parcial, o que requirió correcciones importantes de otros. | Commits `docs:` que editan texto en HTML o borradores en `docs/borradores/`. |
| **7** | Redacción completa | Redacta contenido completo, con buena ortografía y coherencia, integrado en el HTML y entregado por PR sin correcciones mayores. | Commits `docs:` y PR con contenido final en `<p>`, `<h2>`, `<li>`. |
| **8** | Modificación de código | Corrige o mejora código existente: errores, estilos, accesibilidad, responsive, enlaces. | Commits `fix:` / `style:` visibles en *Files changed*. |
| **9** | Desarrollo de funcionalidad | Desarrolla un **componente o función completa y funcional**: bloque HTML+CSS reutilizable (tarjeta, grilla, tabla, formulario, mapa) o interacción con JS mínimo. | Commit `feat:` de la funcionalidad. |
| **10** | Aporte integral | Dos o más tipos de aporte de forma destacada (ej.: redacción + componente, o componente + revisión de código para el curso). | Historial que combina al menos dos niveles anteriores. |

### Actividades reconocidas como aporte (nivel 8 o 9 según alcance)

- **Revisión de código (Code Review):** revisiones de PRs de otros grupos con comentarios útiles.
- **Resolución de conflictos de merge.**
- **Comisión de Calidad:** auditorías de accesibilidad, responsive y enlaces con informe en un issue o PR.

### Ejemplos de nivel 10

- Redactó "Nosotros" (6–7) + desarrolló la grilla de docentes con CSS Grid (9).
- Mejoró estilos de su sección (8) + creó el componente de noticias (9).
- Desarrolló el formulario con validación JS (9) + resolvió conflictos y revisó PRs (8/9).

## 3. Reglas de tope

| Situación | Consecuencia |
| :--- | :--- |
| No entrega la ficha de aporte en su PR final | Nota máxima **7** |
| No es autor de ningún PR | No cumple el requisito mínimo de aporte |
| Evidencia no verificable en GitHub | No se computa ese aporte |

## 4. Control docente

1. **GitHub Insights:** `git log`, `git blame`, gráfico de contribuidores.
2. **Pull Requests:** cada alumno es autor de al menos 1 PR.
3. **Ficha de aporte:** va en la descripción del PR final (plantilla en `.github/pull_request_template.md`), con al menos 2 evidencias.

### Seguimiento por sprint

El proyecto se desarrolla en 3 sprints (ver `docs/cronograma.md`). Cada tarea es un Issue etiquetado con su nivel de rúbrica, lo que deja registrado quién hizo qué y cuándo. El docente puede ver la evolución de cada alumno en los tres sprints.

## 5. Criterios de éxito del producto

El sitio es condición de aprobación del producto, **no una segunda nota**. Si no cumple, el curso tiene una instancia de corrección antes de cerrar las notas individuales.

- **HTML5 semántico.**
- **Responsive:** Flexbox o Grid y al menos una `@media` para móviles.
- **Optimización:** imágenes comprimidas (TinyPNG, Squoosh), ≤ 300 KB cada una, sitio < 5 MB.
- **Accesibilidad:** contraste AA, `alt` en imágenes, navegación por teclado.
- **Legal y ética:** fuentes y recursos autorizados; sin datos personales de menores en el sitio ni en el repositorio; fotos con autorización firmada; contenido institucional validado por el colegio (ver `docs/despliegue.md`).
- **JavaScript:** solo el permitido (mínimo, sin dependencias no autorizadas) y con el sitio usable si falla.

## 6. Entregables finales

1. Repositorio con todo el historial.
2. Sitio desplegado en Vercel (ver `docs/despliegue.md`).
3. Ficha de aporte individual en el PR final.
