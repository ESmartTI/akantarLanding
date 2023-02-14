/**
 * Consulta la maestra de textos y devuelve un arreglo de textos Clave:Valor.
 */
function consultarTextosHome(){
  var libro = SpreadsheetApp.openById("1Pq435PUXoI_JWdzTaYwV1OpZKO6nElWXh8pHc2ub61w");
  var textos = libro.getRange("textos!A1:B").getValues();
  Logger.log(textos[0][1]);
  return textos;
}

/**
 * Función de prueba que consulta los textos de la maestra y los pega en una nueva hoja. Solo válida para probar, no tiene funcionalidad real.
 */
function usarTextos(){
    var libro = SpreadsheetApp.openById("1Pq435PUXoI_JWdzTaYwV1OpZKO6nElWXh8pHc2ub61w");
    var textos = consultarTextosHome();
    var rango = libro.getRange("hojaPruebas!A1:B")
    rango.setValues(textos);
}