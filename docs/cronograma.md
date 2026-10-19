# Cronograma – 3 sprints

Las fechas las completa el docente. Cada sprint dura aproximadamente [N] semanas.

| Etapa | Objetivo | Inicio | Fin |
| :--- | :--- | :--- | :--- |
| **Sprint 0** (docente) | Plantilla, CSS base, protección de `main`, equipos y permisos, documento de contenido | | |
| **Sprint 1** | Contenido y estructura de cada página | | |
| **Sprint 2** | Componentes y funcionalidad | | |
| **Sprint 3** | Integración, calidad, despliegue y entrega | | |

## Sprint 0 – Preparación (docente / Comisión de Calidad)

- Revisar y subir la plantilla, `tokens.css`, `components.css` y `main.js`.
- Crear el repositorio, activar protección de `main` y revisión de code owners.
- Armar los 6 frentes y asignar grupos (ver README).
- Reunir con la institución el **documento de contenido**: textos validados, escudo, fotos y autorizaciones.

## Sprint 1 – Contenido y estructura

- Cada grupo crea su bloque desde `plantilla.html` con contenido real.
- Redacción: historia, misión, visión, autoridades, plantel docente, plan de estudios, noticias, experiencias.
- **Hito:** la institución valida el contenido antes de pasar al Sprint 2.
- **Rúbrica esperada:** niveles 6–7 y 8.

## Sprint 2 – Componentes y funcionalidad

- Grillas y tarjetas, formulario con validación, acordeón de preguntas frecuentes, mapa, filtros de noticias, plantilla de nota.
- **Rúbrica esperada:** nivel 9, y revisiones de código (nivel 8).

## Sprint 3 – Integración y calidad

- Auditoría de accesibilidad, responsive (360, 768 y 1200 px), peso de imágenes y enlaces rotos.
- Resolución de conflictos y revisión final cruzada.
- Despliegue (ver `docs/despliegue.md`) y ficha de aporte en el PR final.
- **Hito:** validación final de la institución antes de publicar.

## Ritual de cada sprint

1. **Planificación (día 1):** cada grupo carga sus Issues, etiquetados con el nivel de rúbrica (`nivel-6-7`, `nivel-8`, `nivel-9`).
2. **Trabajo:** ramas `feature/<frente>-<grupo>-<tarea>` y PRs chicos.
3. **Revisión (último día):** cada frente muestra el avance.
4. **Retrospectiva:** qué salió bien, qué mejorar.

## Definición de terminado (para cualquier tarea)

- [ ] PR aprobado por un integrante de otro grupo.
- [ ] Pasó el control de Calidad (accesibilidad y responsive).
- [ ] Sin colores ni tamaños escritos a mano.
- [ ] Imágenes ≤ 300 KB, con `alt`.
- [ ] Contenido validado cuando corresponde.
