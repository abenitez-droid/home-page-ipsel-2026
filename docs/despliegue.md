# Despliegue en Vercel, repositorio y privacidad

El sitio se despliega en **Vercel**. **Los planes y las condiciones de la plataforma cambian:** verificarlos en la documentación oficial antes de publicar.

## Si el repositorio es público

- **Usuarios y correos:** usar usuarios de GitHub que no revelen datos personales. Activar *Keep my email addresses private* y *Block command line pushes that expose my email*, y configurar el correo `noreply` de GitHub en `git config`.
- **Cero datos personales** en código, commits, issues y PRs: nombres, DNI, teléfonos, fotos.
- **Fotos:** solo con autorización firmada de madre/padre/tutor. Sin rostros identificables si no hay autorización.
- **Contenido institucional:** logo, escudo y textos pertenecen al colegio. Subirlos solo con su permiso y definir en el repositorio qué licencia aplica al código y cuál al contenido.
- **Nada de secretos:** claves, tokens ni correos privados. El formulario usa `mailto:` o un servicio autorizado por el docente.
- **Validación antes de publicar:** el contenido institucional se valida antes de fusionarlo a `main`.
- **Comunicar a las familias** que el repositorio es público y qué datos aparecen.

## Configurar el despliegue en Vercel

El sitio es estático: `npm run build` actualiza los archivos HTML y CSS en la raíz del repositorio; no genera una carpeta `dist/`. La configuración de [`vercel.json`](../vercel.json) ejecuta ese build y publica la raíz.

1. Importar el repositorio en [Vercel](https://vercel.com/new) y conectar la cuenta de GitHub.
2. Confirmar que **Root Directory** sea `.` (la raíz del repositorio).
3. Usar el preset **Other** si Vercel solicita un framework. El comando de build y la carpeta de salida ya están definidos en `vercel.json`.
4. Desplegar. Vercel generará una URL de producción y, con la integración Git, vistas previas para los cambios en ramas y Pull Requests.
5. Verificar las seis páginas, estilos, imágenes, navegación y enlaces internos en la URL publicada.

No se necesitan variables de entorno ni un backend para la maqueta actual. Aplican las mismas pautas de privacidad y validación del contenido indicadas arriba.

## Protección de `main`

*Settings* → *Branches* (o *Rules*): exigir Pull Request, al menos 1 aprobación y revisión de code owners. Confirmar que la opción esté disponible para el plan y la visibilidad elegidos.
