# Lista de fuentes que faltan

Esta es la lista priorizada de lo que necesito para pasar de armazón a diagnóstico. Las direcciones son de los sitios oficiales que conozco y hay que confirmarlas, porque cambian. Si algún enlace ya no sirve, basta con el nombre del documento y la entidad.

## Cómo entregarlas

Guarda cada archivo en la carpeta que se indica y empieza el nombre con el código de la lista, por ejemplo `F07_marco-fiscal-cartagena-2026.pdf`. Si un documento no existe o no se puede bajar, avísame y lo marco como `no existe` o `bloqueado` en el manifiesto (`00-manifiesto.csv`). Yo convierto los PDF a texto, calculo con scripts y registro todo.

Prioridad **P1** es lo mínimo para el diagnóstico (Fase 2). **P2** se necesita para el marco fiscal y competencial (Fase 3). **P3** completa el referente Barranquilla y los frentes.

Si falta más de una cuarta parte de lo P1, me detengo antes de seguir.

## P1. Lo mínimo para el diagnóstico

| Código | Documento | Carpeta | Dónde se consigue |
| --- | --- | --- | --- |
| F01 | Plan de Desarrollo vigente de Cartagena y los dos anteriores, con plan indicativo y plan plurianual de inversiones | `municipio/` | Alcaldía de Cartagena (cartagena.gov.co), Secretaría de Planeación; Concejo |
| F02 | Informes de seguimiento y de rendición de cuentas de los últimos tres años, y el informe de empalme más reciente | `municipio/` | Alcaldía, Secretaría de Planeación |
| F03 | Plan de Ordenamiento Territorial vigente y su estado de revisión | `municipio/` | Alcaldía, Secretaría de Planeación |
| F04 | Marco Fiscal de Mediano Plazo, presupuestos y ejecuciones de ingresos y gastos de los últimos cinco años | `municipio/` | Secretaría de Hacienda; Contaduría General de la Nación (CHIP, FUT) |
| F05 | Estados financieros, deuda, pasivo pensional, contingencias judiciales y categoría de la entidad (Ley 617) | `municipio/` | Secretaría de Hacienda; CHIP; Ministerio de Hacienda (Dirección de Apoyo Fiscal) |
| F06 | Estatuto tributario y acuerdos de rentas vigentes; información catastral y fecha de última actualización | `municipio/` | Secretaría de Hacienda; Concejo de Cartagena; IGAC o catastro propio |
| F07 | Contratación del Distrito en SECOP I y II de los últimos tres a cinco años (exportación completa, en CSV) | `datos/` | Colombia Compra Eficiente (SECOP II) y datos.gov.co, filtrando por la entidad |
| F08 | Informes de la Contraloría Distrital, la Contraloría General, la Personería y la Procuraduría sobre el Distrito (incluido el Índice de Gobierno Abierto) | `municipio/` | Contraloría Distrital de Cartagena; contraloria.gov.co; Procuraduría |
| F09 | Estructura orgánica, planta de personal y entes descentralizados con sus estados financieros | `municipio/` | Alcaldía, Secretaría General y Hacienda |
| F10 | Medición de Desempeño Municipal del DNP para Cartagena, y series de TerriData (indicadores estructurales) | `datos/` | terridata.dnp.gov.co; DNP |
| F11 | Pobreza monetaria y multidimensional, GEIH (empleo, informalidad), PIB departamental, proyecciones de población y Censo 2018 por unidad territorial | `datos/` | DANE (dane.gov.co) |
| F12 | Informes y encuestas de Cartagena Cómo Vamos de los últimos cinco años | `regional/` | Cartagena Cómo Vamos |
| F13 | Estadística delictiva de Cartagena por tipo de delito y barrio (homicidio, hurto, extorsión, violencia intrafamiliar), y el Plan Integral de Seguridad y Convivencia Ciudadana | `datos/` | Policía Nacional; Medicina Legal; Secretaría del Interior del Distrito |
| F14 | Cobertura y calidad de agua, alcantarillado y aseo por barrio; informes del operador y del SUI | `datos/` | Superservicios (SUI); Aguas de Cartagena; Distrito |
| F15 | Estructura territorial: localidades, Unidades Comuneras de Gobierno y barrios, con población | `municipio/` | Alcaldía, Planeación; DANE |

## P2. Marco fiscal, competencial y político

| Código | Documento | Carpeta | Dónde se consigue |
| --- | --- | --- | --- |
| F20 | Composición actual del Concejo, bancadas, actas recientes y acuerdos clave | `municipio/` | Concejo de Cartagena |
| F21 | Plan de Desarrollo del Departamento de Bolívar vigente y su plan plurianual | `departamento/` | Gobernación de Bolívar |
| F22 | Plan de acción de Cardique y de la autoridad ambiental urbana (EPA Cartagena), con determinantes ambientales | `departamento/` | Cardique; EPA Cartagena |
| F23 | Régimen distrital: Ley 1617 de 2013 y normas que lo modifican; ley de competencias pendiente tras el Acto Legislativo 03 de 2024 | `nacional/` | Secretaría del Senado; Función Pública (Gestor Normativo) |
| F24 | Marco normativo territorial: leyes 136, 152, 388, 617, 715, 819, 1454, 1551, 1801, 2200, Acto Legislativo 05 de 2019 y Ley 2056 de 2020 (regalías), contratación y anticorrupción | `nacional/` | Secretaría del Senado; Función Pública |
| F25 | Plan Nacional de Desarrollo vigente y su plan plurianual; Marco Fiscal de Mediano Plazo de la Nación | `nacional/` | DNP; Ministerio de Hacienda |
| F26 | Documentos CONPES que mencionen a Cartagena, el Caribe o el Canal del Dique | `nacional/` | DNP |
| F27 | Contratos del Distrito con el operador de acueducto y alcantarillado y con el ente gestor del transporte masivo | `municipio/` | Alcaldía; entidades |
| F28 | Mapa de riesgo y de inundación de Cartagena y plan de gestión del riesgo | `municipio/` | Oficina de Gestión del Riesgo; EPA; Cardique |
| F29 | Vivienda: ente distrital de vivienda, déficit habitacional, bienes fiscales | `municipio/` | Alcaldía; DANE |
| F30 | Salud y educación: red pública, matrícula (SIMAT), Saber 11 por colegio, afiliación y cobertura | `datos/` | Secretaría de Educación; ICFES; Minsalud (SISPRO); DADIS |

## P3. Referente Barranquilla y contraste

| Código | Documento | Carpeta | Dónde se consigue |
| --- | --- | --- | --- |
| F40 | Planes de desarrollo de Barranquilla desde 2001 y sus informes de seguimiento | `referente-barranquilla/` | Alcaldía de Barranquilla (barranquilla.gov.co) |
| F41 | Historia fiscal de Barranquilla: acuerdo de reestructuración, recaudo de predial e industria y comercio, calificaciones, deuda | `referente-barranquilla/` | CHIP; Secretaría de Hacienda de Barranquilla; calificadoras |
| F42 | Plan de arroyos, malecón, movilidad y equipamientos con costos y fuentes de financiación | `referente-barranquilla/` | Alcaldía; entes descentralizados; prensa especializada |
| F43 | Puerto, río, aeropuerto y zonas francas: Cormagdalena, canal de acceso, sociedades portuarias y régimen de zonas francas | `referente-barranquilla/` | Cormagdalena; ANI; Supertransporte; Mincomercio |
| F44 | Operadora mixta de acueducto y alcantarillado de Barranquilla y situación de energía | `referente-barranquilla/` | Superservicios (SUI) |
| F45 | Visión de largo plazo promovida por fundaciones, cámara de comercio y universidades, con seguimiento | `referente-barranquilla/` | Cámara de Comercio de Barranquilla; fundaciones |
| F46 | Estudios comparados Cartagena y Barranquilla (Banco de la República en Cartagena, Fedesarrollo, academia, Barranquilla Cómo Vamos) | `regional/` | Banco de la República (CEER Cartagena); Fedesarrollo |
| F47 | Críticas e investigaciones sobre contratación, concentración de poder y seguridad en Barranquilla | `referente-barranquilla/` | Contraloría; Procuraduría; prensa investigativa |
| F48 | Santa Marta (control negativo): planes de desarrollo desde 2001, historia fiscal y de recaudo, estado de servicios públicos, evolución de pobreza y empleo, informes de órganos de control, Santa Marta Cómo Vamos si existe | `referente-santa-marta/` | Alcaldía de Santa Marta; CHIP; DANE; Superservicios; Contraloría; Procuraduría |
| F50 | Medellín (éxito por otra ruta): planes de desarrollo desde 2001, historia fiscal, esquema de empresas públicas (EPM y otras), Medellín Cómo Vamos, evaluaciones independientes y críticas | `referente-medellin/` | Alcaldía de Medellín; CHIP; DANE; Medellín Cómo Vamos; academia |
| F49 | Cuenta documentada de alcaldes de Cartagena en los últimos veinte años: elecciones, suspensiones, destituciones y revocatorias | `municipio/` | Registraduría; Procuraduría; Consejo de Estado; prensa |

## Lo que decidiría si no hay tiempo para todo

Con F01 a F06, F10, F11 y F15 puedo armar un primer diagnóstico (Fase 2) en forma de borrador, aunque falten el resto. El orden de utilidad es: finanzas y plan de desarrollo, luego datos socioeconómicos y de servicios, luego contratación, luego Barranquilla.
