# CLAUDE.md

Guía para trabajar en este repositorio.

## Qué es este repositorio

No es una aplicación. Es un plan de gobierno para la Alcaldía de Cartagena de Indias, período 2028 a 2031, escrito en español y versionado como Markdown. El contenido es el producto. El método viene del plan nacional "Estado en el Territorio" (carpeta hermana `C:\Projects\Personal\estado-en-el-territorio`) y del prompt `PROMPT-PLAN-CARTAGENA.md`, que es la instrucción de trabajo y se obedece al pie de la letra.

Todo el contenido, los mensajes de commit y los comentarios van en español.

## Estado

Borrador estructural. Mientras no existan las fuentes en `fuentes/`, ninguna cifra es firme. Toda cifra, norma vigente o dato cambiante que aún no esté verificado se escribe como `[PENDIENTE: qué falta y dónde conseguirlo]`. Esa marca es literal y se puede buscar con grep. Un documento con marcas PENDIENTE no está terminado, y nunca se entrega como si lo estuviera.

## Fuentes

- Los documentos originales viven en `fuentes/` y se describen en `fuentes/00-manifiesto.csv` (URL, fecha de descarga, estado).
- Desde este entorno la red está restringida por una política de seguridad. Las fuentes las entrega el autor o se leen por herramientas de búsqueda web; no se esquiva ese control.
- `fuentes/LISTA-DE-FUENTES.md` es la lista priorizada de lo que falta.
- Nada se afirma sin fuente guardada o verificada con fecha. Si el dato no existe, se dice.

## Capas: núcleo y ejecución

Cada archivo de `docs/` abre con un banner que declara su capa.

- **NÚCLEO**: la tesis, los principios y el modelo de nodo. No se reescribe por propuesta. Se adapta del plan nacional con cuidado.
- **EJECUCIÓN**: cifras, plazos, umbrales, indicadores, costos y detalle de cada frente. Se corrige con evidencia.
- **MIXTO**: el principio es núcleo y los parámetros son ejecución.

## Orden del plan

`_sidebar.md` define el orden de lectura. Una sección nueva se agrega ahí, se enlaza desde las secciones relacionadas con el punto específico que conecta, y sus fuentes entran a `docs/transversal/fundamentos-investigacion.md`.

## Estilo de escritura

El plan se escribe como lo haría una persona educada y reflexiva de la costa, no como un informe de consultoría ni como un texto generado por máquina. Debe comunicar y conectar, no solo informar.

- Nunca rayas largas ni medias. Tampoco el guion como recurso de puntuación: se usan comas, puntos, dos puntos o paréntesis. El guion queda para lo que lo exige (nombres propios, siglas, rangos en tablas).
- Sin anglicismos. "Mil millones" por defecto, decimales con coma, "caducidad" y no "sunset", "prueba de resistencia" y no "stress test".
- Siglas definidas la primera vez que aparecen.
- Ritmo variado: frases largas y cortas. Un tono sencillo, pero con pensamiento detrás.
- Sin relleno: nada de "es importante notar", "no solo X sino también Y", tríos de adjetivos, cierres floridos ni jerga.
- Prosa y párrafos. Tablas solo donde aclaren (competencias, costos, riesgos). Viñetas solo en material de referencia como este archivo.
- Cada sección nombra sus límites y cierra con una nota de honestidad. Las estimaciones se marcan como órdenes de magnitud.

## Reglas de contenido

- Ningún compromiso duro se financia con ingresos blandos.
- Cada propuesta se clasifica con uno de cuatro verbos: EJECUTA, GESTIONA, CONVOCA o NO LE CORRESPONDE, con la norma que la respalda.
- Se gobierna como si no hubiera mayoría en el Concejo: lo que se hace por decreto, resolución o contrato va primero; lo que exige acuerdo queda redactado y listo.
- La carga nunca recae primero sobre los más pobres.
- Contrapesos antes que confianza en cualquier actor, incluida la propia administración.
- Una cifra no puede decir cosas distintas en dos documentos. Todo número se recalcula con script, no a ojo.

## Metodología

1. Investigar primero, escribir después.
2. Mostrar borradores. El autor revisa y decide qué se confirma. No se hace commit sin que el autor lo pida.
3. Preguntar antes de decidir lo que cambie el sentido político del plan (prioridades, a quién se le pide el sacrificio, alianzas). En lo técnico, proponer y avanzar.
4. Cuando haya dos caminos, recomendar uno con su razón.

## Verificación antes de entregar

Barrido de estilo (rayas, anglicismos, relleno), cifras reconciliadas, normas vigentes con fecha, enlaces internos que resuelvan, ningún compromiso duro sobre fuente blanda, y cada lección tomada de Barranquilla con su evidencia, su costo y su límite.
