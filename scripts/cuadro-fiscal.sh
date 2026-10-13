#!/usr/bin/env bash
# Recalcula las cifras derivadas de docs/transversal/cuadro-fiscal.md.
# Las entradas se copian a mano de los documentos oficiales (millones de pesos)
# y cada bloque dice de dónde salen. Uso: bash scripts/cuadro-fiscal.sh
set -euo pipefail

awk 'BEGIN {
  # Informe de gestión de Hacienda 2025 (F04), cuadro comparativo de ingresos
  trib23 = 1281966.860958; trib24 = 1376552.778830; trib25 = 1581100.260506
  printf "Ingresos tributarios: 2023-2024 %+.1f %%, 2024-2025 %+.1f %%\n", (trib24/trib23-1)*100, (trib25/trib24-1)*100

  # Informe de Hacienda 2025, tablas 3 y 17: ICLD recaudados y gasto financiado con ICLD
  icld25 = 1016171.336414; func_icld25 = 459358.612663; inv_icld25 = 527181.884143
  printf "ICLD 2025: funcionamiento ejecutado / ICLD recaudado = %.1f %% (aproximación propia, no es el indicador oficial de la Ley 617)\n", func_icld25/icld25*100
  printf "ICLD 2025: inversión ejecutada con ICLD / ICLD recaudado = %.1f %%\n", inv_icld25/icld25*100

  # MFMP 2026-2035 (F04), distribución de los ICLD 2026
  icld26 = 1098733.851904
  split("520335.407927 45766.804458 3393.463293 500 10987.338519 10987.338519 103099.237041 403664.262147", d, " ")
  split("Funcionamiento|Entes de control|Bonos pensionales|Fondo de contingencia|Fondo de riesgo|Recurso hídrico|Fondo de desarrollo local|Saldo para inversión", n, "|")
  s = 0
  for (i = 1; i <= 8; i++) { s += d[i]; printf "ICLD 2026 %-26s %12.0f  %5.1f %%\n", n[i], d[i], d[i]/icld26*100 }
  printf "ICLD 2026 suma de usos %.0f frente a total %.0f (diferencia %.0f)\n", s, icld26, s - icld26
  printf "Ley 617 en 2026: indicador %.2f %%, margen hasta el 50 %% = %.0f\n", d[1]/icld26*100, icld26*0.5 - d[1]

  # MFMP 2026-2035, tabla de solvencia y sostenibilidad: saldo e intereses de la deuda
  split("975069 1586199 1459008 1253486 1053952 856360 658768 463336 268336 78331", saldo, " ")
  split("111926 178823 170291 151325 128029 106117 84318 62630 41177 19802", inter, " ")
  tot = 0
  for (i = 3; i <= 6; i++) {
    anio = 2025 + i; amort = saldo[i-1] - saldo[i]; serv = amort + inter[i]; tot += serv
    printf "Deuda %d: amortización implícita %7.0f + intereses %7.0f = servicio %7.0f\n", anio, amort, inter[i], serv
  }
  printf "Servicio de la deuda 2028-2031 (implícito, sin crédito nuevo): %.0f\n", tot

  # Informe de Hacienda 2025, tabla 36: créditos firmados (contratado y desembolsado)
  split("63439.884999 20734.679472 60000 279749 15097.1904 198000 89446 103239 170251 330000 60000 70000 75000", c, " ")
  split("63439.884999 20734.679472 0 35523.955195 0 29548.812791 0 35000 0 0 2389.044957 0 0", e, " ")
  tc = 0; te = 0
  for (i = 1; i <= 13; i++) { tc += c[i]; te += e[i] }
  printf "Créditos firmados: contratado %.0f, desembolsado %.0f (%.1f %%), por desembolsar %.0f\n", tc, te, te/tc*100, tc - te

  # Estados financieros 2024 (F05), nota de cuentas por cobrar: cartera del predial
  bruta = 1655291.684127; det = 650512.879088
  printf "Cartera del predial 2024: bruta %.0f, deterioro %.0f (%.1f %%), neta %.0f\n", bruta, det, det/bruta*100, bruta - det
}'
