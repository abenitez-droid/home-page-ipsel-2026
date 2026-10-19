# Sitio Web Institucional - [Nombre del Colegio]

**Curso:** 5to Año - Software Libre y Programación
**Año:** 2026  
**Docente:** Aban Tejerina, Franco Emanuel  
**Repositorio:** Este repositorio contiene el proyecto final de desarrollo web.

> **Reglas de Conformación:** No hay límite de grupos. Cada grupo con un máximo de 4 integrantes.

---

## 1. Listado de Grupos y Asignación de Secciones

> **INSTRUCCIONES PARA ALUMNOS:** Completen la tabla. No dejen secciones sin responsable. Un grupo puede tomar más de una sección si son pocos grupos.

| N° Grupo | Integrantes (Máx. 4) | Usuarios de GitHub | Sección / Funcionalidad | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **Grupo 1** | 1. [Apellido, Nombre]<br>2. <br>3. <br>4. | @usuario1, @usuario2 | Ej: `index.html` + Estilos Globales (`css/styles.css`) | `Pendiente` |
| **Grupo 2** | 1. <br>2. <br>3. | @usuario1 | Ej: Institucional - Historia, Misión, Visión | `Pendiente` |
| **Grupo 3** | 1. <br>2. <br>3. <br>4. | @usuario1 | Ej: Nosotros - Autoridades y Plantel Docente | `Pendiente` |
| **Grupo 4** | 1. <br>2. | @usuario1 | Ej: Plan de Estudios | `Pendiente` |
| **Grupo 5** | 1. <br>2. <br>3. | @usuario1 | Ej: Noticias y Experiencias | `Pendiente` |
| **Grupo 6** | 1. <br>2. | @usuario1 | Ej: Contacto, Footer y Mapa | `Pendiente` |
| **Grupo 7** | (Agregar filas si hay más grupos) | | | |

**Comisión de Calidad (1 integrante por grupo):**
* Integrante Grupo 1:
* Integrante Grupo 2:
* Integrante Grupo 3:

---

## 2. Flujo de Trabajo con Git - OBLIGATORIO

1.  **Rama principal protegida:** `main` -> solo código final y probado.
2.  **Ramas de trabajo:** Crear siempre una rama nueva por tarea.
    Formato: `feature/nombre-tarea`
    Ejemplos: `feature/seccion-contacto`, `feature/tarjetas-noticias`, `feature/estilos-footer`
3.  **Pull Requests:** Ningún código se sube directo a `main`. Se debe crear un PR y esperar la aprobación de al menos 1 compañero de OTRO grupo (Code Review).
4.  **Commits descriptivos:**
    * `feat: agrega sección de autoridades`
    * `docs: redacta historia del colegio`
    * `fix: corrige enlace roto en nav`
    * `style: ajusta colores institucionales`

### Comandos básicos

```bash
git checkout -b feature/mi-seccion
git add .
git commit -m "feat: agrega mi sección"
git push origin feature/mi-seccion
# Luego crear el Pull Request en GitHub
```

---

## 3. Estructura de Archivos del Proyecto

Respetar esta estructura para que no haya conflictos al unir todo:

```
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
│   └── (solo imágenes optimizadas/comprimidas)
└── docs/
    └── (borradores de textos si hace falta)
```

---

## 4. Ficha de Aporte Individual - PARA LA EVALUACIÓN

> **Cada alumno debe completar esto al final en su PR final. Sin esto, la nota máxima es 7.**

Copiar y pegar este bloque en la descripción de su último Pull Request:

```markdown
### Ficha de Aporte - [Apellido, Nombre]

**Grupo N°:**
**Usuario GitHub:**

**1. ¿Qué hice? (Marcar con X lo que corresponda)**
- [ ] Nivel 6-7: Redacción de textos / recopilación de información
- [ ] Nivel 8: Modifiqué / corregí código existente
- [ ] Nivel 9: Desarrollé una función / componente completo
- [ ] Nivel 10: Realicé dos o más de las actividades anteriores

**2. Evidencias (Links a mis commits/PRs más importantes):**
- Commit/PR 1: [link]
- Commit/PR 2: [link]
- Commit/PR 3: [link]

**3. Justificación de mi nota:**
Explico brevemente por qué considero que merezco la nota X según la rúbrica. (Ej: Redacté la historia del colegio y además desarrollé la grilla de materias con CSS Grid).
```

### Rúbrica Recordatorio:
* **6-7:** Solo redacción de texto.
* **8:** Aporta y modifica código.
* **9:** Desarrolla o modifica una función.
* **10:** Realiza dos o más de las actividades anteriores.

---

## 5. Checklist de Entrega Final

- [ ] Todas las secciones asignadas están terminadas y linkeadas desde el `nav` de `index.html`
- [ ] Sitio responsive (se ve bien en celular)
- [ ] Todas las imágenes tienen atributo `alt`
- [ ] Imágenes optimizadas (< 500kb c/u)
- [ ] No hay enlaces rotos
- [ ] Repositorio con historial limpio y PRs aprobados
- [ ] Sitio desplegado en Vercel: [pegar link aquí]

**Link al sitio desplegado:** `https://[nombre-proyecto].vercel.app/`
