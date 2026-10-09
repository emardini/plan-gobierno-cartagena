/**
 * Crea el espacio de colaboración del plan de Cartagena en Google Drive.
 *
 * Qué crea (carpetas, hojas y tablero se reutilizan si ya existen; el formulario se rehace desde cero):
 *   - Carpeta "Plan Cartagena" con tres subcarpetas: "1 Para leer", "2 Entregas", "3 Tablero".
 *   - Carpeta aparte "Plan Cartagena PRIVADO (solo cuidadores)", fuera de la principal.
 *   - Formulario de aportes (en "2 Entregas") y la hoja que recibe sus respuestas.
 *   - Hoja "Tablero de tareas" (en "3 Tablero") con las tareas iniciales y el estado como lista.
 *
 * Cómo usarlo:
 *   1. Entra a script.google.com con tu cuenta PERSONAL de Google.
 *   2. Nuevo proyecto, borra el contenido y pega este archivo.
 *   3. Escoge la función crearEspacioCartagena y pulsa Ejecutar.
 *   4. Autoriza el acceso cuando lo pida (Advanced, Go to ... (unsafe), Allow).
 *   5. Abre el registro de ejecución para ver los enlaces.
 *
 * Si Google se demora y sale "Service timed out", vuelve a pulsar Ejecutar: el script retoma
 * desde donde quedó y reutiliza carpetas y hojas. Solo el formulario se rehace: si ya existe uno con el mismo
 * nombre y sin respuestas, lo manda a la papelera (recuperable 30 días) y crea uno nuevo.
 *
 * Límite conocido: Apps Script no puede crear preguntas de "Carga de archivos".
 * Esa pregunta se agrega a mano en el formulario.
 */

// Pon false si el servicio de Formularios de Google sigue fallando: el script crea todo lo demás
// y el formulario lo armas a mano con las preguntas de colaboracion/plantillas.md.
var CREAR_FORMULARIO = true;

var NOMBRE_RAIZ = 'Plan Cartagena';
var NOMBRE_PRIVADA = 'Plan Cartagena PRIVADO (solo cuidadores)';
var TITULO_FORM = 'Enviar un aporte al plan de Cartagena';
var TITULO_RESPUESTAS = 'Aportes recibidos (respuestas del formulario)';
var TITULO_TABLERO = 'Tablero de tareas';

function crearEspacioCartagena() {
  // 1. Carpetas (se reutilizan si ya existen)
  var raiz = obtenerOCrearCarpeta_(DriveApp.getRootFolder(), NOMBRE_RAIZ);
  var paraLeer = obtenerOCrearCarpeta_(raiz, '1 Para leer');
  var entregas = obtenerOCrearCarpeta_(raiz, '2 Entregas');
  var tableroCarpeta = obtenerOCrearCarpeta_(raiz, '3 Tablero');
  var privada = obtenerOCrearCarpeta_(DriveApp.getRootFolder(), NOMBRE_PRIVADA);

  try {
    paraLeer.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (e) {
    Logger.log('No se pudo abrir "1 Para leer" al público: ' + e.message);
  }
  Logger.log('Carpetas listas.');

  // 2 y 3. Formulario y hoja de respuestas (se omiten si CREAR_FORMULARIO es false)
  var form = null;
  var respuestas = null;
  if (CREAR_FORMULARIO) {
    form = obtenerOCrearFormulario_();
    Logger.log('Formulario listo.');

    respuestas = obtenerOCrearHoja_(TITULO_RESPUESTAS, entregas);
    var tieneDestino = false;
    try {
      tieneDestino = !!form.getDestinationId();
    } catch (e) {
      tieneDestino = false;
    }
    if (!tieneDestino) {
      reintentar_(function () {
        form.setDestination(FormApp.DestinationType.SPREADSHEET, respuestas.getId());
      });
    }
    DriveApp.getFileById(form.getId()).moveTo(entregas);
    Logger.log('Hoja de respuestas lista.');
  } else {
    Logger.log('Se omitió el formulario (CREAR_FORMULARIO = false). Créalo a mano y vincúlalo a una hoja.');
  }

  // 4. Tablero
  var tablero = obtenerOCrearHoja_(TITULO_TABLERO, tableroCarpeta);
  llenarTablero_(tablero);
  Logger.log('Tablero listo.');

  // 5. Resumen
  Logger.log('LISTO. Guarda estos enlaces:');
  Logger.log('Carpeta principal: ' + raiz.getUrl());
  Logger.log('Carpeta de lectura: ' + paraLeer.getUrl());
  Logger.log('Carpeta de entregas: ' + entregas.getUrl());
  Logger.log('Carpeta PRIVADA (no la compartas): ' + privada.getUrl());
  if (form) {
    Logger.log('Formulario (para editar): ' + form.getEditUrl());
    Logger.log('Formulario (para enviar a los voluntarios): ' + form.getPublishedUrl());
    Logger.log('Hoja de respuestas: ' + respuestas.getUrl());
    Logger.log('PENDIENTE A MANO: en el formulario agrega la pregunta "Si tienes archivos, súbelos aquí" con el tipo "File upload".');
  }
  Logger.log('Tablero de tareas: ' + tablero.getUrl());
}

/* ---------- Ayudas ---------- */

// Reintenta si Google responde con "Service timed out" u otro fallo pasajero.
function reintentar_(funcion) {
  var ultimo;
  for (var i = 0; i < 4; i++) {
    try {
      return funcion();
    } catch (e) {
      ultimo = e;
      Logger.log('Intento ' + (i + 1) + ' falló: ' + e.message);
      Utilities.sleep(3000 * (i + 1));
    }
  }
  throw ultimo;
}

function obtenerOCrearCarpeta_(padre, nombre) {
  var it = padre.getFoldersByName(nombre);
  if (it.hasNext()) {
    return it.next();
  }
  return padre.createFolder(nombre);
}

// Busca una hoja de cálculo por nombre en la carpeta; si no existe, la crea y la mueve allí.
function obtenerOCrearHoja_(titulo, carpeta) {
  var it = carpeta.getFilesByName(titulo);
  if (it.hasNext()) {
    return SpreadsheetApp.openById(it.next().getId());
  }
  var hoja = reintentar_(function () { return SpreadsheetApp.create(titulo); });
  DriveApp.getFileById(hoja.getId()).moveTo(carpeta);
  return hoja;
}

// Empieza siempre de cero con el formulario. Si ya hay uno con ese nombre (a mano, roto o vacío de un
// intento anterior), lo manda a la PAPELERA (se recupera durante 30 días) y crea uno nuevo.
// Protección: si ese formulario ya tiene respuestas, no lo toca y se detiene.
function obtenerOCrearFormulario_() {
  var yo = Session.getEffectiveUser().getEmail();
  var it = DriveApp.getFilesByName(TITULO_FORM);
  var aTirar = [];
  while (it.hasNext()) {
    var archivo = it.next();
    if (archivo.getMimeType() !== MimeType.GOOGLE_FORMS || archivo.isTrashed()) {
      continue;
    }
    var esMio = false;
    try {
      esMio = archivo.getOwner().getEmail() === yo;
    } catch (e) {
      esMio = false;
    }
    if (!esMio) {
      continue;
    }
    var respuestas = 0;
    try {
      var abierto = reintentar_(function () { return FormApp.openById(archivo.getId()); });
      respuestas = reintentar_(function () { return abierto.getResponses().length; });
    } catch (e) {
      // Quedó a medias de un intento anterior y Google no lo puede abrir: no tiene respuestas que perder.
      Logger.log('Formulario que no se pudo abrir (roto): ' + archivo.getUrl());
      respuestas = 0;
    }
    if (respuestas > 0) {
      throw new Error('El formulario ' + archivo.getUrl() + ' ya tiene ' + respuestas + ' respuesta(s). No se borra. Renómbralo o bórralo tú si de verdad quieres empezar de nuevo.');
    }
    aTirar.push(archivo);
  }
  aTirar.forEach(function (archivo) {
    Logger.log('A la papelera, formulario anterior: ' + archivo.getUrl());
    archivo.setTrashed(true);
  });

  var form = reintentar_(function () { return FormApp.create(TITULO_FORM); });
  configurarFormulario_(form);
  return form;
}

function configurarFormulario_(form) {
  form.setDescription(
    'Gracias por ayudar. Este formulario recibe lo que hiciste en una tarea del plan, sea grande o pequeño. ' +
    'Te respondemos siempre, en menos de una semana, y te contamos qué pasó con tu aporte. ' +
    'No se publican datos personales de nadie sin su permiso.'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage('Gracias. Recibimos tu aporte y te respondemos en menos de una semana.');

  form.addTextItem()
    .setTitle('Tu nombre (o escribe "prefiero no aparecer")')
    .setRequired(true);

  form.addTextItem()
    .setTitle('¿Cómo prefieres que te contactemos? (correo o celular)')
    .setRequired(false);

  form.addListItem()
    .setTitle('¿En qué tarea estás?')
    .setChoiceValues([
      'T01 Conseguir un documento',
      'T02 Verificar una cifra',
      'T03 Leer una sección',
      'T04 Recorrer un barrio',
      'T05 Conversar con una persona',
      'T06 Mapear quién decide',
      'T07 Reconstruir una historia',
      'T08 Caso de otra ciudad',
      'T09 Revisar con la mirada de un grupo',
      'T10 Pasar una tabla a hoja de cálculo',
      'T11 Contactos de especialistas',
      'T12 Explicar una sección en una página',
      'T13 Preguntas de la gente',
      'T14 Conversación vecinal',
      'Otra, por iniciativa propia'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿Qué hiciste? Cuéntalo en dos o tres frases')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿De dónde salió la información? (dirección de internet, nombre del documento, persona, observación propia)')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué tan seguro estás de que es correcto?')
    .setChoiceValues(['Muy seguro', 'Medio', 'No sé'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿Hubo algo que no pudiste hacer, o que te llamó la atención?')
    .setRequired(false);

  var interes = form.addMultipleChoiceItem();
  interes.setTitle('¿Tienes algún interés personal en este tema?')
    .setChoiceValues([
      'No',
      'Sí, trabajo para el Distrito',
      'Sí, tengo contratos o negocios que dependen de él',
      'Sí, vivo o trabajo en el barrio del que hablo'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Quieres aparecer en los agradecimientos?')
    .setChoiceValues(['Sí, con mi nombre', 'No, prefiero que sea anónimo'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Entiendo que mi aporte se usará en un plan público y abierto, y que la información de otras personas solo se incluye con su permiso')
    .setChoiceValues(['Entiendo y acepto'])
    .setRequired(true);
}

// Escribe las tareas solo si la hoja está vacía, para no pisar nada que ya se haya cargado.
function llenarTablero_(tablero) {
  var hoja = tablero.getSheets()[0];
  if (hoja.getLastRow() > 1) {
    Logger.log('El tablero ya tiene contenido; no se toca.');
    return;
  }
  hoja.setName('Tareas');

  var encabezados = ['Tarea', 'Qué', 'Quién', 'Estado', 'Entrega', 'Notas'];
  var filas = [
    ['T01', 'Conseguir F01: bases del Plan de Desarrollo 2024 a 2027 y su seguimiento', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F04: ejecuciones presupuestales y Marco Fiscal de Mediano Plazo', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F05: estados financieros con saldos', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F12: informe de Calidad de Vida 2024 y 2025 completos', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F10: ficha TerriData 13001 y MDM', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F13: PISCC y estadística delictiva por barrio', '', 'libre', '', 'Prioridad 1'],
    ['T01', 'Conseguir F08: auditorías a Aguas de Cartagena y FONPECAR', '', 'libre', '', ''],
    ['T02', 'Verificar las cifras de agua de la primera recopilación contra el informe del operador', '', 'libre', '', ''],
    ['T02', 'Verificar las cifras de extorsión y de población de la primera recopilación', '', 'libre', '', ''],
    ['T03', 'Lectura de lenguaje claro de la sección Diagnóstico', '', 'libre', '', 'Buena tarea de arranque'],
    ['T03', 'Lectura de lenguaje claro de la sección Columna vertebral', '', 'libre', '', ''],
    ['T07', 'Cuenta documentada de alcaldes de Cartagena (F49)', '', 'libre', '', ''],
    ['T11', 'Lista de especialistas dispuestos a revisar (fiscal, jurídico, agua y drenaje, seguridad)', '', 'libre', '', 'Va a la carpeta privada']
  ];

  hoja.getRange(1, 1, 1, encabezados.length).setValues([encabezados]).setFontWeight('bold');
  hoja.getRange(2, 1, filas.length, encabezados.length).setValues(filas);
  hoja.setFrozenRows(1);
  hoja.setColumnWidth(2, 480);
  hoja.setColumnWidth(6, 220);

  var regla = SpreadsheetApp.newDataValidation()
    .requireValueInList(['libre', 'tomada', 'en revisión', 'hecha', 'descartada'], true)
    .setAllowInvalid(false)
    .build();
  hoja.getRange(2, 4, 200, 1).setDataValidation(regla);
}
