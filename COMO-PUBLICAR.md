# Cómo publicar el sitio

El plan se publica como un sitio web navegable (Docsify, sin compilación) y como dos entregables estáticos que se generan solos: `plan-completo.md` (todo el texto en un archivo, pensado para compartir por enlace o para leerlo con una herramienta automática) y `completo.html` (todo en una sola página, que se puede guardar como PDF desde el navegador).

## Qué hay en el repositorio

| Archivo | Para qué |
| --- | --- |
| `index.html` | El sitio navegable, con barra lateral y buscador. Lee los `.md` directamente en el navegador |
| `_sidebar.md` | El orden de lectura del sitio y, a la vez, el orden del plan consolidado |
| `.nojekyll` | Evita que GitHub Pages procese los archivos con Jekyll, que rompería los enlaces |
| `scripts/build-completo.py` | Genera `plan-completo.md` y `completo.html` desde `docs/` |
| `.github/workflows/pages.yml` | Construye y publica todo en cada cambio a la rama `main` |

El grupo "Colaboración" del `_sidebar.md` aparece en el sitio, pero se excluye del plan consolidado, porque es material de trabajo y no parte del plan.

## Generar los entregables en local

```bash
pip install markdown
python scripts/build-completo.py
```

Los dos archivos que salen están en `.gitignore`: no se versionan, porque el flujo de GitHub los regenera en cada publicación.

## Publicar en GitHub Pages (una sola vez)

1. Crea un repositorio en GitHub y sube este proyecto a la rama `main`. Para que Pages funcione en una cuenta gratuita, el repositorio debe ser público.
2. En el repositorio, entra a **Settings**, luego **Pages**.
3. En **Build and deployment**, en **Source**, elige **GitHub Actions** (no "Deploy from a branch").
4. Haz un cambio cualquiera en `main` (o ejecuta el flujo a mano desde la pestaña **Actions**). Tras uno o dos minutos, el sitio queda en `https://USUARIO.github.io/NOMBRE-DEL-REPO/`.
5. Pega esa dirección en el campo "About" del repositorio.

Opcional: en `index.html`, agrega la línea `repo: 'USUARIO/NOMBRE-DEL-REPO',` dentro de `window.$docsify` para mostrar el enlace "ver en GitHub".

## Antes de publicar

- Revisa que no haya enlaces, datos personales ni listas de voluntarios en el repositorio. Todo lo privado va en `aportes/privado/`, que está en `.gitignore`.
- Los documentos originales de `fuentes/` (PDF, hojas) tampoco se versionan; solo su manifiesto.
- El plan es un borrador y lo dice en el texto: las marcas `[PENDIENTE]` y `[VERIFICAR]` son visibles. Conviene publicar solo cuando el autor lo decida.

## Por qué Docsify

Docsify sirve los `.md` tal cual en el navegador, así que los enlaces internos del plan, que apuntan a archivos `.md`, funcionan sin tocar el contenido.

## Pendientes de publicación

- `presentacion.html`: una página de presentación para compartir. Se hace cuando exista el diagnóstico con datos.
- `docs/resumen-ejecutivo.md`: se escribe al final, después de los frentes, y entra al `_sidebar.md`.
