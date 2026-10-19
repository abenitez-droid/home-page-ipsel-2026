# Despliegue, repositorio y privacidad

Esta página resume las opciones. **Los planes y las condiciones de las plataformas cambian:** verificarlas en la documentación oficial antes de decidir.

## Opciones

| Opción | Costo | Ventajas | Límites a verificar |
| :--- | :--- | :--- | :--- |
| **A. Repositorio público + GitHub Pages** (recomendada) | Gratis | Simple. Permite protección de `main` y revisión de code owners. | Código, historial y usuarios son visibles. |
| **B. Repositorio privado + GitHub Pages** | Plan pago (Pro en cuenta personal, Team en organización) | Código oculto. | El sitio publicado sigue siendo público. En plan gratuito la protección de ramas puede no estar disponible. |
| **C. Vercel** | Plan Hobby gratuito | Despliegues de vista previa. | Hobby no despliega desde repos privados de una organización de GitHub. Con repo público, solo el dueño de la cuenta Hobby puede disparar despliegues. Revisar si el uso de Hobby alcanza a un colegio privado. |

**Recomendación:** repositorio público con GitHub Pages. Como el sitio final es público, el código también lo es en la práctica, y se mantienen gratis las reglas de ramas y revisión.

## Si el repositorio es público

- **Usuarios y correos:** usar usuarios de GitHub que no revelen datos personales. Activar *Keep my email addresses private* y *Block command line pushes that expose my email*, y configurar el correo `noreply` de GitHub en `git config`.
- **Cero datos personales** de menores en código, commits, issues y PRs: nombres, DNI, teléfonos, fotos sin autorización.
- **Fotos:** solo con autorización firmada de madre/padre/tutor. Sin rostros identificables si no hay autorización.
- **Contenido institucional:** logo, escudo y textos pertenecen al colegio. Subirlos solo con su permiso y definir en el repositorio qué licencia aplica al código y cuál al contenido.
- **Nada de secretos:** claves, tokens ni correos privados. El formulario usa `mailto:` o un servicio autorizado por el docente.
- **Validación antes de publicar:** el contenido institucional se valida antes de fusionarlo a `main`.
- **Comunicar a las familias** que el repositorio es público y qué datos aparecen.

## Pasos para GitHub Pages

1. Repositorio → *Settings* → *Pages*.
2. Origen: rama `main`, carpeta raíz (`/`).
3. Esperar la URL `https://<usuario>.github.io/<repo>/`.
4. Verificar que los enlaces relativos funcionen bajo esa ruta.

## Protección de `main`

*Settings* → *Branches* (o *Rules*): exigir Pull Request, al menos 1 aprobación y revisión de code owners. Confirmar que la opción esté disponible para el plan y la visibilidad elegidos.
