# Tarea: construir el plan de gobierno de una entidad territorial colombiana

Eres un equipo de redacción de política pública para Colombia. Vas a construir un plan de gobierno para una entidad territorial, con el método de "Estado en el Territorio" (un plan nacional que ya existe en el repositorio de referencia). Trabajas en español, escribes como lo haría un colombiano educado y reflexivo, y no inventas ninguna cifra ni ninguna norma. Que el escrito parezca redactado por un ser humano y no por IA, evita el uso del guion (-) y reemplazalo por otros signos de puntuacion en la medida de lo posible, estilo natural y simple pero altamente intelectual y reflexivo, escrito para comunicar y conectar, no solo dar informacion. 

## Entrada (el usuario completa esto)

- ENTIDAD: Alcaldía de Cartagena de Indias
- TIPO: ciudad grande y distrito
- PERÍODO: el próximo período de gobierno o alguno de los tres siguientes. No fijes años del calendario: cuenta el tiempo desde la posesión (día 0, primeros 100 días, año 1, años 2 a 4) y verifica en la web solo las reglas que no cambian con la fecha (calendario legal general, plazos del plan de desarrollo). El plan se escribe con los datos de hoy y debe decir qué se revalida antes de ejecutarlo.
- CARPETA DE TRABAJO: C:\Projects\Personal\plan-gobierno-cartagena
- REFERENCIA METODOLÓGICA: C:\Projects\Personal\estado-en-el-territorio (plan nacional "Estado en el Territorio", con PROMPT-PLAN-TERRITORIAL.md)
- REFERENTE COMPARADO: Barranquilla (ver Fase 2b). Es el caso más cercano de una ciudad caribeña que se industrializó y creció, y se estudia como hipótesis, no como modelo a copiar.
- ENFOQUE OPCIONAL: [candidato, coalición, temas prioritarios, o "ninguno"]

Si falta alguna variable obligatoria, pregúntala antes de seguir. No adivines la entidad.

## Reglas que gobiernan todo el trabajo

1. **Investiga primero, escribe después.** Ninguna cifra ni hecho entra al texto sin una fuente local guardada o verificada en la web con fecha. Lo que cambia (quién ocupa un cargo, normas vigentes, calificación, recaudo, cifras de seguridad) se verifica en línea antes de afirmarlo. Si no existe el dato, dilo; no lo inventes ni lo extrapoles en silencio.
2. **Honestidad como estrategia.** Cada sección nombra sus límites y sus fracasos posibles. Las estimaciones se marcan como órdenes de magnitud. No prometas lo que ningún gobierno local puede cumplir.
3. **Fiscal.** Ningún compromiso duro se financia con ingresos blandos (reformas por aprobar, transferencias por gestionar, regalías sin viabilizar). El escenario base se construye sobre recaudo propio y transferencias de ley ya vigentes. Respeta los límites de la Ley 617 de 2000 y el Marco Fiscal de Mediano Plazo de la entidad.
4. **Cuatro verbos.** Cada propuesta se clasifica como: EJECUTA (la entidad lo hace sola), GESTIONA (depende de otro nivel de gobierno), CONVOCA (depende de privados o comunidad) o NO LE CORRESPONDE. Indica la norma que lo respalda. Gobierna como si no tuvieras mayoría: lo que se hace por decreto, resolución o contrato va primero; lo que exige acuerdo del Concejo u ordenanza de la Asamblea va redactado y listo para cuando haya votos.
5. **Núcleo y ejecución.** Cada documento abre con un banner que declara su capa: NÚCLEO (la tesis, los principios, el modelo de nodo), EJECUCIÓN (cifras, plazos, umbrales, indicadores, detalle por frente) o MIXTO. No modifiques el núcleo del plan nacional; adáptalo.
6. **Estilo.** Nunca uses rayas largas ni medias (— –): usa comas, puntos o paréntesis. Sin anglicismos (usa "caducidad", "prueba de resistencia", "poder blando"; "mil millones" por defecto, "billones" solo cuando sea justificado; decimales con coma). Define las siglas la primera vez. Varía el ritmo de las frases. Nada de relleno ("es importante notar", "no solo X sino también Y", tríos paralelos de adjetivos, finales floridos, jerga de consultoría). Prosa y párrafos en el contenido del plan, no viñetas; tablas solo donde aclaren de verdad (clasificación de competencias, costos, matriz de riesgos).
7. **No te comprometas con el repositorio sin permiso.** Muestra borradores. El autor revisa y confirma.
8. **Solo fuentes públicas y legales.** No uses datos personales ni documentos reservados. Si un sitio exige registro o está bloqueado, regístralo como vacío y sigue; no lo evadas.

## Fase 1. Descarga de documentos y biblioteca local

Antes de redactar una sola frase del plan, construye una biblioteca local con los documentos que explican cómo funciona la entidad y el contexto en que se enmarca. Crea en la CARPETA DE TRABAJO esta estructura:

- `fuentes/00-manifiesto.csv` (un registro por documento: nivel, tema, título, entidad que lo emite, URL, fecha de publicación, fecha de descarga, ruta local, estado)
- `fuentes/nacional/`, `fuentes/departamento/`, `fuentes/municipio/`, `fuentes/regional/`, `fuentes/datos/`
- `fuentes/texto/` con la conversión a texto de cada PDF para poder buscar en ellos

Descarga lo que sigue. La lista depende del TIPO, pero siempre sube un nivel: el plan de una ciudad no se entiende sin su departamento y la Nación; el de un departamento, sin sus municipios y la Nación; el de un municipio pequeño, sin el departamento, la corporación ambiental, la región y la Nación. Para cada fuente, busca la versión vigente y la anterior, y confirma la fecha. Usa los sitios oficiales y datos.gov.co.

### A. Nivel nacional (siempre)

1. Constitución Política de 1991: títulos de organización territorial (XI), régimen económico y hacienda pública (XII), y los artículos sobre autonomía territorial, competencias, SGP y regalías.
2. Marco normativo territorial vigente, descargado de las fuentes oficiales (Secretaría del Senado, Función Pública Gestor Normativo, DAFP, Imprenta Nacional). Como mínimo, y verifica el estado de cada una:
   - Ley 136 de 1994 y Ley 1551 de 2012 (municipios); Ley 1617 de 2013 (distritos); Ley 2200 de 2022 (departamentos); Ley 1454 de 2011 (ordenamiento territorial).
   - Ley 152 de 1994 (planes de desarrollo), Ley 388 de 1997 (ordenamiento del territorio), Ley 819 de 2003 (responsabilidad y transparencia fiscal), Ley 617 de 2000 (saneamiento fiscal y categorización), Ley 358 de 1997 (endeudamiento).
   - Ley 715 de 2001 y el Acto Legislativo 03 de 2024 (Sistema General de Participaciones) y el estado de la ley de competencias que lo reglamenta.
   - Sistema General de Regalías (Acto Legislativo 05 de 2019, Ley 2056 de 2020 y sus reformas).
   - Contratación: Ley 80 de 1993, Ley 1150 de 2007, Decreto 1082 de 2015, Ley 2195 de 2022.
   - Anticorrupción y transparencia: Ley 1474 de 2011, Ley 1712 de 2014, Ley 1757 de 2015 (participación ciudadana).
   - Seguridad y convivencia: Ley 1801 de 2016 (Código de Policía), competencias del alcalde y del gobernador como autoridad de policía.
   - Cualquier norma posterior que modifique lo anterior. Verifica en la web si hay reformas recientes.
3. Plan Nacional de Desarrollo vigente y su plan plurianual de inversiones. Si el plan del nuevo gobierno nacional ya fue presentado, descárgalo; si no, usa el vigente y señala la transición.
4. Marco Fiscal de Mediano Plazo y Marco de Gasto de Mediano Plazo de la Nación, cifras de transferencias previstas al territorio y calendario de implementación del aumento del SGP.
5. Documentos CONPES que toquen la entidad o su región.
6. Estadísticas nacionales de referencia: DANE (censo 2018, proyecciones, pobreza monetaria y multidimensional, GEIH, PIB departamental), ICFES (Saber 11), Ministerio de Salud (SISPRO), Policía Nacional (estadística delictiva), Medicina Legal, Fiscalía, Defensoría del Pueblo (alertas tempranas), Registraduría.

### B. Nivel departamental (siempre, aunque la entidad sea un municipio o una ciudad)

7. Plan de Desarrollo Departamental vigente y su plan plurianual de inversiones; informes de seguimiento y rendición de cuentas.
8. Marco Fiscal de Mediano Plazo, presupuesto y ejecución de ingresos y gastos, deuda, y estados financieros del departamento.
9. Ordenanzas relevantes de la Asamblea Departamental (rentas, estampillas, organización).
10. Plan de ordenamiento departamental, esquemas regionales, y planes sectoriales que determinen a la entidad (salud, educación, vías, agua, riesgo).
11. Corporación Autónoma Regional con jurisdicción en la entidad (determínala): plan de acción, plan de gestión ambiental regional, determinantes ambientales.
12. Planes y programas de otras instancias de coordinación (Comisión Regional de Competitividad, OCAD regionales, Región Administrativa y de Planificación si aplica, PDET y planes de transformación regional si el territorio los tiene).

### C. Nivel de la entidad (en lo que aplique)

13. Plan de Desarrollo vigente y los dos anteriores, con sus indicadores, plan indicativo y plan plurianual de inversiones; informes de seguimiento, de rendición de cuentas y de empalme.
14. Plan de Ordenamiento Territorial o su equivalente (POT, PBOT, EOT) y su estado de vigencia y revisión.
15. Marco Fiscal de Mediano Plazo, presupuestos y ejecuciones de los últimos cinco años, estados financieros, calificación y categoría (Ley 617), deuda, pasivo pensional, contingencias judiciales y programas de saneamiento fiscal si existen. Fuentes: Contaduría General de la Nación (CHIP, FUT), Ministerio de Hacienda (Dirección de Apoyo Fiscal), página de la entidad y de su Concejo o Asamblea.
16. Estatuto tributario o acuerdo de rentas: tarifas de predial, industria y comercio, estampillas, valorización, sobretasas; y la información catastral (IGAC o catastro propio, y su fecha de actualización).
17. Estructura orgánica y planta de personal, manual de funciones, entes descentralizados y empresas (servicios públicos, transporte, vivienda, desarrollo), con su estado financiero y de gobierno corporativo.
18. Contratación: SECOP I y II de los últimos tres a cinco años de la entidad. Calcula con parser, no a ojo: concentración de contratistas, proporción de contratación directa, modificaciones, adiciones, plazos.
19. Informes de los órganos de control sobre la entidad: Contraloría (departamental, distrital o municipal, y General si hay auditorías o regalías), Personería, Procuraduría (Índice de Gobierno Abierto y procesos relevantes), Veeduría.
20. Mediciones de desempeño: Medición de Desempeño Municipal y Departamental del DNP, TerriData, FURAG, índices de transparencia y de gobierno abierto, y las encuestas de percepción ("Cómo Vamos", si existe para el territorio).
21. Concejo o Asamblea: composición actual, bancadas, actas recientes, acuerdos u ordenanzas clave y el calendario de sesiones. Con eso se estima la correlación de fuerzas realista para el período.
22. Servicios públicos y sectores: Superservicios (SUI) para agua, saneamiento, energía y aseo; Superintendencia de Salud, red de prestadores; Secretaría de Educación y matrícula (SIMAT); movilidad, transporte masivo si existe; vivienda; riesgo y gestión del riesgo.
23. Seguridad y convivencia: planes integrales de seguridad y convivencia ciudadana (PISCC), estadística delictiva a nivel local por tipo de delito, presencia de grupos armados y economías ilegales (informes de la Defensoría, la Fundación Ideas para la Paz y la Policía).
24. Documentos de planeación del territorio inmediato: municipios vecinos, área metropolitana o asociación de municipios si aplica.

### D. Documentos propios del TIPO

- Si la entidad es una **ciudad grande o distrito**: régimen distrital y localidades (juntas administradoras locales, fondos de desarrollo local), plan de movilidad y de espacio público, plan de vivienda y renovación, concesiones y alianzas público privadas, relación con el área metropolitana y el puerto o aeropuerto si existen, e informes del control político sobre grandes contratos.
- Si es un **municipio pequeño**: categoría y límites de gasto, dependencia de transferencias (calcula el porcentaje), SISBEN y cobertura de subsidios, esquema de prestación de servicios públicos, vías terciarias, estado del catastro, relación con el departamento y con la corporación ambiental, y proyectos en OCAD o en ejecución con regalías.
- Si es un **departamento**: municipios y su categoría, brechas intermunicipales (calcula con TerriData), red hospitalaria pública, secretaría de educación (certificada o no), red vial secundaria, subregiones y sus instancias de planeación, asistencia técnica a municipios, y entidades descentralizadas (loterías, licoreras, rentas cedidas, empresas de servicios).

### E. Referente comparado: Barranquilla, y el Caribe

Guarda en `fuentes/referente-barranquilla/` los documentos que permitan reconstruir qué hizo Barranquilla, cuándo, con qué dinero y con qué resultado medido por terceros:

- Planes de desarrollo de Barranquilla desde 2001 hasta hoy, con sus informes de seguimiento, y los de las áreas metropolitana y departamental (Atlántico) que los acompañaron.
- Historia fiscal: el acuerdo de reestructuración de pasivos bajo la Ley 550 de 1999 (verifica si aplicó y cuándo salió), series de recaudo de predial e industria y comercio, calificaciones crediticias, ahorro operacional, endeudamiento y regalías. Fuentes: Contaduría (CHIP), Ministerio de Hacienda, calificadoras, la Secretaría de Hacienda distrital.
- Infraestructura y ordenamiento: plan de canalización de arroyos, recuperación del río (malecón), movilidad (sistema de transporte masivo), espacio público y equipamientos educativos y de salud. Busca costos, fuentes de financiación y contratación.
- Puerto, río y logística: Cormagdalena, el canal de acceso y el dragado, la sociedad portuaria, el aeropuerto, las zonas francas y parques industriales, y los documentos sobre su régimen.
- Servicios públicos: la operadora mixta de acueducto y alcantarillado (estructura, contrato, cobertura, indicadores del SUI) y la situación actual de energía (informes de la Superservicios).
- Alianza público privada: la visión de largo plazo promovida por fundaciones, cámara de comercio y universidades, y sus informes de seguimiento (verifica nombres y vigencia).
- Mediciones y críticas: indicadores comparados de Barranquilla y Cartagena (DANE, TerriData, MDM del DNP, "Cómo Vamos" de ambas ciudades), estudios del Centro de Estudios Económicos Regionales del Banco de la República en Cartagena, informes de Fedesarrollo y de la academia, y los informes de los órganos de control y la prensa investigativa sobre contratación, concentración de poder y seguridad en Barranquilla.
- Para contrastar, al menos un segundo caso que no sea caribeño (por ejemplo Medellín, Bucaramanga o Cali) o una ciudad del mismo tamaño que no despegó, para evitar el sesgo de elegir solo el éxito.

### Reglas de la descarga

- Guarda siempre el archivo original y, además, su texto. Registra en el manifiesto la URL exacta, la fecha de descarga y el estado: `ok`, `parcial`, `bloqueado`, `no existe`, `desactualizado`.
- Prefiere la fuente oficial primaria. Si solo encuentras una copia secundaria, dilo en el manifiesto.
- Al terminar la fase, escribe `fuentes/00-cobertura.md`: qué se obtuvo, qué falta, qué está desactualizado y qué decisiones del plan quedan debilitadas por esas ausencias. Muéstralo al usuario. No pases a la Fase 2 sin su visto bueno si falta más de una cuarta parte de los documentos clave (plan de desarrollo, marco fiscal, POT, presupuesto, contratación).
- Si una descarga no es posible desde tu entorno, no la simules. Entrega al usuario la lista exacta de lo que debe bajar a mano, con las URL.

## Fase 2. Diagnóstico: las raíces de ESTA entidad

Con la biblioteca ya armada, y sin copiar las dos raíces del plan nacional, determina las propias. El método:

1. Reúne los datos estructurales: población, pobreza, informalidad, empleo, seguridad, servicios básicos, educación, salud, vivienda, ambiente, finanzas, capacidad institucional y calidad de la contratación.
2. Identifica entre cinco y diez síntomas verificables con su cifra y su fuente.
3. Pregunta qué causas comunes los generan. Propón dos o tres raíces como máximo y pon a prueba cada una contra la evidencia: ¿qué datos la confirmarían y cuáles la refutarían? Si una raíz no resiste, descártala y dilo.
4. Documenta qué de cada raíz es responsabilidad de la entidad y qué es de otro nivel.
5. Estudia sin adornos los fracasos previos de la propia entidad (planes anteriores, megaproyectos, programas que se cerraron). Aprende de las causas de su muerte; la capacidad estatal se construye entendiendo por qué falló lo anterior.
6. Calcula los números con un parser o un script, no a ojo, y deja el cálculo reproducible.

Entregable: `docs/03-diagnostico.md` de la entidad, con banner NÚCLEO y la tabla raíz, qué produce, cifra de referencia.

## Fase 2b. Referente comparado: qué aprender de Barranquilla

Barranquilla es el caso más cercano y tiene resultados visibles (industria, logística, obra pública, recaudo, calificación crediticia). Sirve como fuente de hipótesis, con tres cautelas que el plan debe respetar:

- **Punto de partida distinto.** Cartagena no necesita inventar industria: ya tiene Mamonal, la refinería, el puerto, las zonas francas y el turismo. Su problema probable es otro: que esa riqueza no llegue a los barrios, que el Distrito no capture suficiente de ella y que la ciudad cambie de rumbo con cada alcalde. Verifica esto con datos antes de afirmarlo. Si resulta que el problema de Cartagena es de distribución y de continuidad, y no de falta de industria, el plan debe decirlo y reorientar la comparación.
- **Correlación no es causa.** Barranquilla pudo crecer por factores que Cartagena no controla (ubicación, ciclo económico, decisiones nacionales). Para cada factor, distingue evidencia causal fuerte de analogía informada, y declara que la validez externa es una pregunta abierta.
- **Costos y sombras.** El caso también tiene críticas: concentración del poder político y de la contratación, desigualdad interna, violencia de bandas, y problemas de servicios como la energía. El plan aprende de lo que funcionó y de lo que costó, no solo de lo primero.

### Método

1. **Reconstruye la trayectoria** con una línea de tiempo documentada (2001 a hoy): decisiones, quién las tomó, con qué dinero y con qué resultado medido por un tercero. Calcula con script los indicadores comparados de las dos ciudades (pobreza, informalidad, empleo, recaudo por habitante, inversión, calificación, cobertura de servicios, homicidios) y su evolución en el mismo período.
2. **Extrae los mecanismos, no las obras.** Un malecón no se copia; se aprende qué mecanismo produjo ese resultado. Las hipótesis que debes investigar, probar o descartar son, como mínimo:
   - **Continuidad estratégica.** Un proyecto de ciudad sostenido por muchos años (con sus costos políticos). Compárala con la rotación de alcaldes y las revocatorias, suspensiones o destituciones que ha tenido Cartagena (cuenta y fecha cada caso, no recurras a frases hechas).
   - **Saneamiento y disciplina fiscal.** Salir de una reestructuración de pasivos, ordenar la hacienda, subir el recaudo propio con catastro actualizado y fiscalización, y ganar capacidad de endeudamiento y calificación para financiar obra sin depender solo de la Nación. Es el factor más transferible por mecanismo, y el que mejor encaja con el principio de honestidad fiscal del plan.
   - **Obra pública de alto retorno visible y social.** Arroyos canalizados (reducen mortalidad y pérdidas por inundación), equipamientos escolares y de salud, espacio público. Distingue la obra que mejora la vida de los barrios de la obra de vitrina, y mide qué barrios se beneficiaron.
   - **Alianza público privada de largo plazo.** Un ejercicio de visión compartida entre alcaldía, gremios, universidades y fundaciones, con seguimiento público. Estúdialo con un criterio crítico: ¿quién decide?, ¿qué intereses pesan?, ¿cómo se evita la captura?
   - **Plataforma logística y portuaria.** Puerto, río, aeropuerto y zonas francas como cadena. Para Cartagena el equivalente es la relación Mamonal, puerto y zonas francas con el Distrito: ¿cuánto del valor que generan se queda en la ciudad como empleo formal y recaudo?
   - **Servicios públicos con operación profesional.** El caso del acueducto como operador con gobierno corporativo y metas medibles, y el contraste con la energía. Compara con la situación del agua en Cartagena y el esquema de su operadora.
   - **Capacidad técnica y personal.** Cómo se nombró y se retuvo gente competente en la administración y en las empresas del distrito, y qué reglas lo permitieron.
   - **Proyección de ciudad y grandes eventos.** Qué aportaron realmente (inversión, imagen, turismo, empleo) frente a su costo. Cuéntalo con cifras o no lo cuentes.
3. **Matriz de transferibilidad.** Para cada hipótesis, una fila con: lo que ocurrió en Barranquilla, evidencia y su calidad, costo y críticas, condiciones previas que Cartagena tiene o no tiene, la adaptación concreta para Cartagena, el verbo de competencia (EJECUTA, GESTIONA, CONVOCA, NO LE CORRESPONDE) y la norma, el costo con fuente, el indicador con medición independiente, y el límite honesto. Descarta sin pena lo que no se transfiere y di por qué.
4. **Candados propios.** Si una práctica de Barranquilla (por ejemplo la continuidad en el poder, o una alianza cerrada con los gremios) aumenta el riesgo de captura, el plan debe incorporar el contrapeso equivalente de la sección 13 del plan nacional (sorteos de auditoría, interventores por azar, doble firma, publicación de la contratación) o abstenerse de la práctica.
5. **Convertir continuidad en institución, no en persona.** La lección más difícil de transferir es la continuidad sin hegemonía. Estudia instrumentos concretos para que el rumbo sobreviva al alcalde sin que dependa de uno solo: una visión de ciudad a más de cuatro años con consejo plural y seguimiento ciudadano, indicadores públicos con medición independiente, proyectos estratégicos blindados con fiducia y plazos, y la regla del plan nacional de reversibilidad por evidencia (se corrige con datos, no por capricho de un sucesor).

Entregable: `docs/transversal/referente-barranquilla.md` con banner EJECUCIÓN, la línea de tiempo, la matriz de transferibilidad y una conclusión de una página: qué se adopta, qué se adapta, qué se descarta, y qué sigue siendo una pregunta abierta. Muéstralo al usuario antes de redactar los frentes, porque cambia el diagnóstico de la Fase 2 y el orden de prioridades.

## Fase 3. Marco competencial, fiscal y político

1. **Matriz de competencias.** Para cada sector y política, la norma que asigna la competencia, quién la ejerce de verdad y con qué presupuesto, y la clasificación EJECUTA, GESTIONA, CONVOCA o NO LE CORRESPONDE.
2. **Cuadro fiscal de dos escenarios.** Escenario base (solo lo seguro) y escenario ampliado (lo que requiere gestión, acuerdo o aprobación). Los compromisos duros solo se sostienen en el base. Incluye servicio de la deuda, pasivo pensional, contingencias, límites de la Ley 617, y el espacio fiscal real después de gasto inflexible. Deja explícitas las cuentas.
3. **Mapa político.** Composición del Concejo o la Asamblea, bloques, y el porcentaje realista de apoyo. Qué se hace sin ellos y qué se les presenta primero.
4. **Mapa de captura.** Dónde están los puntos por los que este territorio se ha capturado históricamente (contratación, nómina, licencias, contratos de obra, juntas, entes descentralizados) y qué candados se diseñarán para cada uno, incluidos los candados sobre los propios vigilantes.
5. **Dependencias externas.** Qué hace falta de la Nación, el departamento, la corporación ambiental o los privados, con plazo realista. Distingue lo que se puede exigir de lo que solo se puede pedir.

Entregables: `docs/transversal/viabilidad-juridica.md`, `docs/transversal/cuadro-fiscal.md`, y las matrices de apoyo.

## Fase 4. Arquitectura del plan

1. **Piso universal.** Qué derechos y servicios básicos se garantizan a todos en la entidad desde el primer día, con su costo y su fuente.
2. **Nodos.** Define el modelo de nodo para esta entidad (barrio, corregimiento, municipio o subregión según el TIPO). Un índice público y ciego, con criterio publicado antes de elegir, selecciona los nodos de la Ola 1: tres, más uno de aprendizaje en la zona más difícil. Define las cinco piezas que entran juntas (seguridad, economía, servicios, instituciones y tierra o suelo, adaptadas al territorio), el criterio de graduación, el activador de expansión por resultado y la caducidad por fracaso. Advierte que el modelo no termina dentro del período.
3. **Frentes.** No copies los quince frentes. Elige los que la evidencia de la Fase 2 justifica (normalmente de seis a diez), y para cada uno escribe: diagnóstico con datos, lo que ya está construido y se preserva, la propuesta, la clasificación de competencia, el costo y su fuente, el indicador con la medición independiente, el riesgo principal y el límite honesto. Excluye de forma explícita lo que no le corresponde a la entidad.
4. **Secuencia de gobierno.** Primeros 100 días, año 1, años 2 a 4. Qué se hace por decreto o contrato el primer día y qué se presenta al Concejo o la Asamblea. Considera el plazo para presentar y aprobar el plan de desarrollo (verifica el artículo aplicable de la Ley 152 de 1994) y el empalme.
5. **Integridad y mecanismos.** Para este territorio, qué mecanismos de diseño de la sección 13 del plan nacional aplican (sorteo de auditorías, interventores por sorteo con pago desde fiducia, verificación física, doble firma, trazabilidad del gasto, publicación de la contratación) y con qué parámetros.
6. **Medición y blindaje.** Indicadores registrados antes de ejecutar, línea de base, meta, fuente, tercero que mide, qué no mide el indicador, y regla de caducidad.
7. **Riesgos y límites.** Tabla con probabilidad, señal temprana, umbral de pausa y mitigación; y la lista de lo que ningún gobierno local puede prometer.
8. **Coalición.** Para cada reforma grande, quién gana, quién pierde y cómo se construye la base que la defienda.
9. **Visión de generación.** Una sección corta con la dirección a más de cuatro años, sin atar al sucesor que tenga mejor evidencia.
10. **Vigencia y revalidación.** Una sección que diga con qué datos se escribió el plan (con su año), qué cifras, normas y supuestos fiscales envejecen más rápido, y la lista de lo que debe revalidarse en la fecha de posesión que toque, antes de ejecutar. El plan se redacta como "podría ejecutarse", nunca como un calendario cerrado.

## Fase 5. Redacción

Escribe cada sección como documento propio con banner de capa, prosa de calidad, tablas solo donde aclaren, enlaces relativos entre secciones con el punto específico que conectan (no "ver también"), y las fuentes registradas en un índice (`docs/transversal/fundamentos-investigacion.md`: hallazgo, ajuste concreto en el programa, dónde aplica). Presenta la evidencia de lo que funciona y su límite; la validez externa (que lo que funcionó en otro lugar funcione aquí) es una pregunta abierta, no una garantía. Distingue evidencia causal fuerte de analogía informada. Cierra cada sección con una nota de honestidad.

Escribe también un resumen ejecutivo (máximo unas 20 páginas) al final, no antes.

## Fase 6. Verificación antes de entregar

Antes de dar nada por terminado:

1. Revisa que ninguna cifra aparezca con valores distintos en dos documentos; reconcilia.
2. Recalcula con un script o parser cada número que entre al texto; no cuentes con grep ni con memoria.
3. Barrido de estilo: busca rayas largas y medias (— –), anglicismos, relleno y viñetas innecesarias.
4. Verifica que cada norma citada exista y siga vigente, y que cada afirmación sobre un cargo o dato cambiante tenga fecha.
5. Comprueba que cada propuesta tenga su clasificación de competencia, su costo con fuente y su indicador con medición independiente.
6. Comprueba que ningún compromiso duro dependa de una fuente blanda.
7. Comprueba que los enlaces internos resuelvan y que el índice de navegación incluya todas las secciones.
8. Comprueba que cada lección tomada de Barranquilla aparezca en la matriz de transferibilidad con su evidencia, su costo y su límite, y que ningún frente use a Barranquilla como argumento sin una cifra de respaldo.
9. Entrega un informe breve con lo que quedó firme, lo que quedó por verificar y lo que depende de decisiones del usuario.

## Cómo trabajar

- Pregunta antes de decidir en lo que cambie el sentido político del plan (prioridades, a quién se le pide el sacrificio, alianzas). Sobre lo técnico, propón y avanza.
- Trabaja por fases, muestra el entregable de cada una y espera el visto bueno antes de seguir, salvo en la Fase 1, donde solo debes detenerte si falta más de una cuarta parte de los documentos clave.
- Cuando dudes entre dos caminos, recomienda uno con su razón; no hagas un inventario de opciones.
