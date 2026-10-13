> **MIXTO.** El principio (lo duro se financia con lo seguro) es núcleo. Los números de cada escenario son ejecución.

# Cuadro fiscal de dos escenarios

La regla que cierra todo: ningún compromiso duro se financia con una fuente blanda. Un compromiso duro es el que la ciudad se obliga a cumplir aunque las cosas salgan mal. Una fuente blanda es la que depende de otro: una transferencia por gestionar, una regalía sin viabilizar, un acuerdo que el Concejo no ha votado.

## Los dos escenarios

**Escenario base.** Solo lo seguro: el recaudo propio realista, las transferencias de ley ya vigentes, y los ahorros de eficiencia que el Distrito controla. Aquí viven los compromisos duros.

**Escenario ampliado.** Lo que requiere gestión, acuerdo o aprobación: cofinanciación de la Nación, regalías, reformas tributarias locales, alianzas público privadas, endeudamiento adicional. Aquí viven los compromisos blandos, que se anuncian como lo que son, y que se activan solo si llegan.

## De dónde salen los números

Las cifras de esta sección vienen de tres documentos oficiales del Distrito, guardados en `fuentes/municipio/` y registrados en el manifiesto:

- El Marco Fiscal de Mediano Plazo (MFMP) 2026 a 2035, aprobado por el Consejo de Política Fiscal de Cartagena en el acta 069 del 22 de septiembre de 2025.
- El informe de gestión de la Secretaría de Hacienda de 2025, con corte al 31 de diciembre de 2025.
- Los estados financieros de 2024.

Todo va en millones de pesos corrientes. Las cifras derivadas (sumas, restas, porcentajes) se recalculan con `scripts/cuadro-fiscal.sh`, que dice de qué tabla sale cada entrada.

El MFMP proyecta hasta 2035, de modo que cubre cualquiera de los períodos para los que se escribe este plan, aunque con menos certeza mientras más lejos. Una proyección del gobierno saliente no es un dato: es su apuesta. Se usa como punto de partida y se corrige con la ejecución real del año en que se llegue.

## Lo que entra

| Concepto | Valor | Año | Fuente |
| --- | --- | --- | --- |
| Ingresos corrientes recaudados | 3.966.645 | 2025 | Informe de Hacienda, tabla 1 |
| Ingresos tributarios recaudados | 1.281.967 / 1.376.553 / 1.581.100 | 2023 / 2024 / 2025 | Informe de Hacienda, cuadro comparativo. Crecieron 7,4 % y 14,9 % (cálculo propio) |
| Ingresos corrientes de libre destinación (ICLD) recaudados | 1.016.171, el 97,4 % de lo presupuestado | 2025 | Informe de Hacienda, tabla 3 |
| ICLD presupuestados | 1.098.734 | 2026 | MFMP, numeral 5.1.2 |
| Transferencias del Sistema General de Participaciones (SGP) | 1.402.941, recaudadas al 100 % | 2025 | Informe de Hacienda, tabla 2 |
| Recursos de capital recaudados | 688.486, de ellos 458.456 de recursos del balance y 102.462 de crédito desembolsado | 2025 | Informe de Hacienda, tabla 10 |
| Predial recaudado (capital, libre destinación) | 378.747, el 105 % de lo presupuestado; urbano 315.917 y rural 62.830 | 2025 | Informe de Hacienda, tabla 4 |
| Predial presupuestado, con intereses | 458.400 en 2025 y 503.081 en 2026 | 2025 y 2026 | MFMP, plan financiero |
| Industria y comercio (ICA) presupuestado, con complementos | 732.697 en 2025 y 780.851 en 2026 | 2025 y 2026 | MFMP, plan financiero |
| ICA de libre destinación recaudado | 518.039, el 88 % de lo presupuestado | 2025 | Informe de Hacienda, tabla 3 |

Dos lecturas. La primera: los tributos propios crecieron rápido en 2025, y la calificadora Fitch lo reconoce al ratificar la nota AA del Distrito en mayo de 2025. La segunda: el ICA, que es la renta más grande, se quedó corto frente a lo presupuestado mientras el predial lo superó. Un presupuesto que sobrestima el ICA obliga a recortar en el camino, y por eso el escenario base de este plan usa lo recaudado, no lo presupuestado.

Las cifras del predial no se suman entre documentos porque no miden lo mismo: el informe de Hacienda reporta el capital de libre destinación y el MFMP reporta el total con vigencias anteriores e intereses. `[VERIFICAR: con la Secretaría de Hacienda, qué parte del predial tiene destinación específica y por qué el presupuesto de libre destinación de 2025 (360.257) es menor que el capital del MFMP (435.015)]`

## Lo que ya está comprometido

**Funcionamiento y Ley 617 de 2000.** Para un distrito de categoría especial, los gastos de funcionamiento no pueden pasar del 50 % de los ICLD. El MFMP calcula 47,36 % para 2026: 520.335 de funcionamiento sobre 1.098.734 de ICLD. El margen hasta el tope es de unos 29.032. Es estrecho. Cualquier ampliación de planta que proponga este plan tiene que caber ahí o pagarse con ahorros en el mismo funcionamiento.

**Cómo se reparten los ICLD de 2026, según el MFMP.**

| Uso | Millones | Parte de los ICLD |
| --- | --- | --- |
| Funcionamiento | 520.335 | 47,4 % |
| Entes de control | 45.767 | 4,2 % |
| Bonos pensionales | 3.393 | 0,3 % |
| Fondo de contingencia | 500 | 0,0 % |
| Fondo de riesgo | 10.987 | 1,0 % |
| Recurso hídrico | 10.987 | 1,0 % |
| Fondo de desarrollo local | 103.099 | 9,4 % |
| Saldo para inversión | 403.664 | 36,7 % |
| Total | 1.098.734 | 100 % |

El saldo para inversión es la cifra que más importa al plan: es la plata de libre uso que queda cada año después de lo obligatorio, del orden de 400 mil millones en 2026. Todo lo demás que el Distrito invierte (SGP, regalías, crédito, rentas con destino) llega con su destino ya fijado por ley o por contrato.

**La deuda.** El Concejo autorizó en 2024 un cupo de crédito de 1,5 billones (Acuerdos 147 y 160 de 2024), además de otros créditos para vivienda, Transcaribe y el alcantarillado de Bayunca y Pontezuela. Al cierre de 2025 había firmados créditos por 1.534.957, de los que se habían desembolsado 186.636 (12,2 %), y el saldo de la deuda era 154.699. El MFMP prevé que el saldo suba a 975.069 en 2026 y a 1.586.199 en 2027, y que después baje hasta 78.331 en 2035.

| Año | Saldo de la deuda | Intereses | Amortización implícita | Servicio implícito |
| --- | --- | --- | --- | --- |
| 2028 | 1.459.008 | 170.291 | 127.191 | 297.482 |
| 2029 | 1.253.486 | 151.325 | 205.522 | 356.847 |
| 2030 | 1.053.952 | 128.029 | 199.534 | 327.563 |
| 2031 | 856.360 | 106.117 | 197.592 | 303.709 |

Saldo e intereses son del MFMP. La amortización es la caída del saldo de un año a otro, lo que supone que no se toma crédito nuevo, y el servicio es la suma de los dos. Con ese supuesto, el gobierno que empiece en 2028 pagaría del orden de 1,3 billones en cuatro años por deuda contratada antes de llegar. Si empieza más tarde, la carga es menor: el MFMP la lleva casi a cero en 2035.

Los indicadores de ley están holgados. La solvencia (intereses sobre ahorro operacional) sería 9,73 % en 2026, con tope de 60 %, y la sostenibilidad (saldo de la deuda sobre ingresos corrientes menos vigencias futuras) 49,28 %, con tope de 100 %, según la Ley 358 de 1997 modificada por la Ley 2155 de 2021. El pico de sostenibilidad es 76,29 % en 2027. Holgura legal no quiere decir plata libre: lo que se paga en deuda no se invierte.

`[VERIFICAR: con qué rentas se paga el servicio de la deuda del cupo de 1,5 billones. El informe de Hacienda dice que se respalda con ICA, avisos y tableros, contraprestación portuaria, dividendos de Acuacar, de la Sociedad Portuaria y de la Terminal de Transporte, SGP de libre inversión, el impuesto de transporte por oleoductos, tasas aeroportuarias y delineación. Varias de esas son ICLD, así que desde 2027 el saldo para inversión libre de unos 400 mil millones podría bajar en buena parte del servicio de la deuda]`

`[VERIFICAR: el MFMP calcula la sostenibilidad con ingresos corrientes de 2.114.317 para 2026, y el informe de Hacienda con 2.631.607 para el mismo año; por eso sus porcentajes no coinciden. Hay que saber cuál es la base correcta]`

**Vigencias futuras.** El MFMP registra 135.764 en 2026 y 154.163 en 2027, entre ellas las del Programa de Alimentación Escolar (PAE), aprobadas por 384.570 para 2025 a 2027 con el Acuerdo 154 de 2024. Según el MFMP no hay vigencias futuras después de 2027. `[VERIFICAR: que no se aprueben nuevas vigencias futuras que pasen al período siguiente; es lo primero que se revisa en el empalme]`

**Pasivos por fallos y demandas.** Al 30 de junio de 2025 había 191.308 en sentencias y conciliaciones pendientes de pago: el 73 % por acciones de grupo y el 14 % por tribunales de arbitramento. Aparte, la provisión contable por litigios y demandas era 504.274. Estos pasivos llegan cuando el juez decide, no cuando el gobierno quiere, y por eso cuentan como gasto inflexible. El MFMP reporta también una cuenta de orden por litigios de 1.227.695.776.759.910 pesos, cifra que no es creíble como está escrita. `[VERIFICAR: la cifra de la cuenta de orden 9905 en los estados financieros y con la Oficina Asesora Jurídica]`

**Pensiones.** Los estados financieros de 2024 dicen que el pasivo pensional es el 53,4 % de las obligaciones con empleados del Distrito, con cálculo actuarial del Ministerio de Hacienda que administra FONPECAR. `[PENDIENTE: valor del cálculo actuarial y cobertura en el Fondo Nacional de Pensiones de las Entidades Territoriales (FONPET), en PASIVOCOL o en la nota 22 de los estados financieros]`

## La cartera del predial

Al cierre de 2024 los estados financieros registraban 1.655.292 en predial por cobrar. De eso, el Distrito ya da por difícil de cobrar 650.513 (39,3 %), y queda una cartera neta de 1.004.779. Equivale a unos dos años y medio de recaudo del predial. La cifra de prensa que usaba el frente de suelo ("más de 900 mil millones") queda reemplazada por esta.

La cartera es la fuente de recaudo nuevo más grande que tiene el Distrito a mano, pero no se presupuesta como segura. El Acuerdo 188 de 2025, con descuentos en intereses y sanciones, recogió 88.900 de cartera de años anteriores en cinco meses, según el informe de Hacienda. Ese es el orden de magnitud de lo que se recupera con un buen esfuerzo de un año, y sirve de techo prudente para el escenario ampliado.

## Estructura del cuadro

| Concepto | Escenario base | Escenario ampliado | Fuente y cálculo |
| --- | --- | --- | --- |
| Ingresos tributarios propios | Lo recaudado en 2025 (1.581.100), proyectado con el crecimiento del MFMP y no con el de 2025 | Más cartera recuperada, plusvalía y cobro a lotes vacíos, cuando se midan | Informe de Hacienda y MFMP. `[PENDIENTE: ejecuciones de cinco años en el CHIP para estimar un crecimiento prudente]` |
| ICLD | 1.098.734 en 2026, ajustado por lo recaudado el año anterior | Igual | MFMP |
| Transferencias de ley (SGP y otras) | 1.402.941 en 2025, con destino fijado | Lo que traiga el Acto Legislativo 03 de 2024 | `[PENDIENTE: calendario de aumento del SGP y nuevas competencias que trae, Ministerio de Hacienda y DNP]` |
| Regalías y cofinanciación de la Nación | Cero | Lo que se viabilice | `[PENDIENTE: asignaciones del Sistema General de Regalías al Distrito]` |
| Gasto inflexible | Funcionamiento (47,4 % de los ICLD), entes de control, fondo de desarrollo local, servicio de la deuda (del orden de 300 mil millones al año entre 2028 y 2031) y fallos | Igual | MFMP, informe de Hacienda y `scripts/cuadro-fiscal.sh` |
| Límite de la Ley 617 de 2000 | 47,36 % en 2026, margen de unos 29.032 hasta el 50 % | Igual | MFMP |
| Límites de endeudamiento | Solvencia 9,73 % y sostenibilidad 49,28 % en 2026 | Crédito nuevo solo para obras que se paguen solas o con renta propia segura | MFMP |
| Espacio fiscal para inversión nueva | Saldo de ICLD para inversión (403.664 en 2026) menos la parte del servicio de la deuda que salga de ICLD | Más recaudo blando, cuando llegue | Fórmula: ICLD menos funcionamiento, entes de control, fondos y servicio de la deuda. `[VERIFICAR: la rebaja por deuda, ver arriba]` |

## Fuentes de ahorro y de recaudo por estudiar

Mejor catastro y fiscalización del predial y del impuesto de industria y comercio, salida de gastos que ya no rinden, reducción de pasivos contingentes, y optimización de la planta sin tocar maestros ni médicos. Lo que se anote aquí se calcula con datos del propio Distrito y se marca como orden de magnitud hasta tener los datos fuertes. Las palancas del predial, la plusvalía y el suelo están en el frente [Hacienda, catastro y suelo](../frentes/hacienda-catastro-suelo.md); su recaudo se trata como ingreso blando hasta que se mida.

## El costo de los nodos

Cada nodo de la Ola 1 se costea de abajo hacia arriba: obras, operación a diez años, planta, mantenimiento y reservas. El cuadro dirá qué fracción del espacio fiscal ocupa y desde qué año se paga solo. `[PENDIENTE: costeo del primer nodo cuando se escoja]`

## Límites

Estas cifras son del presupuesto y de la contabilidad del Distrito, no de una auditoría. No incluyen las empresas en que participa el Distrito (Acuacar, Transcaribe y otras) ni sus pasivos, que pueden terminar en el presupuesto central. Y el MFMP lo hizo el gobierno actual con sus supuestos de crecimiento, que no hemos podido contrastar.

## Nota de honestidad

Con los documentos en mano, el cuadro dice algo concreto y poco cómodo: la plata libre para inversión es del orden de 400 mil millones al año, y una parte puede irse en pagar la deuda que se está contratando ahora. Este plan no puede prometer más de lo que quepa ahí, más lo que se gane con el recaudo cuando se haya ganado. Las cifras que faltan están marcadas, y mientras sigan así el cuadro no está terminado.
