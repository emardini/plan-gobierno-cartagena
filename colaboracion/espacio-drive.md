# El espacio de trabajo en Google Drive

El plan vive en este repositorio, y el trabajo con voluntarios ocurre en Google Drive, porque casi todos en Colombia ya usan Google y WhatsApp y no hay nada nuevo que aprender. El repositorio sigue siendo la fuente de verdad: los voluntarios no tocan los documentos del plan, entregan aportes y comentan, y el cuidador decide qué se incorpora.

## Estructura

Se crea con el script `colaboracion/crear-espacio.gs` (se ejecuta una sola vez, en Google Apps Script, con una cuenta personal de Google, no una del trabajo).

| Pieza | Para qué sirve | Quién la ve |
| --- | --- | --- |
| Carpeta `Plan Cartagena` | Raíz del espacio | Cuidadores |
| `1 Para leer` | Copias de lectura de las secciones del plan | Cualquiera con el enlace (solo lectura), si así se decide |
| `2 Entregas` | Aportes, archivos y la hoja con las respuestas del formulario | Cuidadores y quienes ayuden a gestionarla |
| `3 Tablero` | Hoja "Tablero de tareas" con las tareas, su dueño y su estado | Cuidadores y quienes tomen tareas |
| `Plan Cartagena PRIVADO (solo cuidadores)` | Contactos, conversaciones y lista de voluntarios. Está **fuera** de la carpeta principal para que no se comparta por error | Solo cuidadores |
| Formulario "Enviar un aporte al plan de Cartagena" | Puerta de entrada de los aportes. Cada respuesta cae en la hoja "Aportes recibidos" | Cualquiera con el enlace de respuesta |
| WhatsApp (grupo del equipo) | Solo conversación. No se entregan aportes ni se guardan decisiones ahí | Quienes participan |

## Reglas de uso

- **Quien aporta no necesita acceso a ninguna carpeta.** Basta con el enlace del formulario. Las carpetas se comparten únicamente con quien ayude a gestionar el espacio.
- **Permisos por carpeta.** Los voluntarios entran como Comentador o Lector. Se da Editor solo a quien deba subir archivos o marcar tareas.
- **Lo privado nunca se mezcla.** Los contactos, las conversaciones y las listas de voluntarios no se guardan fuera de la carpeta privada, y nunca se pegan en el repositorio.
- **Enlaces en privado.** Los enlaces de edición y de las carpetas se guardan aparte del repositorio. El único enlace que se reparte es el del formulario.
- **Las preguntas del formulario no se cambian cuando ya hay respuestas.** Si se borra o cambia una pregunta, desaparece su columna en la hoja. Se agrega una nueva, o se crea otra versión.
- **Un segundo cuidador desde el principio**, para que el acceso no dependa de una sola persona.

## Cómo se pasa un aporte al plan

1. Llega por el formulario (o por mensaje o correo, y el cuidador lo registra).
2. El cuidador lo revisa, verifica las cifras contra su fuente, y lo marca en el tablero.
3. Si se incorpora, lo pasa al repositorio (el documento que corresponda, o `aportes/`), con la ficha y su fuente.
4. Responde a quien aportó: qué se hizo con su aporte y dónde quedó, o por qué se descartó.
5. Si la persona lo permitió, su nombre entra en los agradecimientos.

Lo que contenga datos personales de terceros se queda en la carpeta privada de Drive y en `aportes/privado/`, que no se versiona.

## Si hay que crearlo de nuevo

El script se puede ejecutar otra vez sin duplicar nada: reutiliza las carpetas y hojas que ya existen, y rehace el formulario solo si no tiene respuestas (el anterior va a la papelera de Drive y se recupera durante 30 días). Si el servicio de Formularios de Google falla, el script tiene un interruptor al inicio para omitir el formulario y crearlo a mano con las preguntas de `plantillas.md`.

Una limitación conocida: Apps Script no puede crear preguntas de carga de archivos, así que esa pregunta se agrega a mano después de ejecutar el script.
