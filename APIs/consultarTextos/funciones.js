Prueba

function consultarTextosHome(){
  var libro = SpreadsheetApp.openById("1Pq435PUXoI_JWdzTaYwV1OpZKO6nElWXh8pHc2ub61w");
  var textos = libro.getRange("textos!A1:B").getValues();
  Logger.log(textos[0][1]);
  return textos;
}

function usarTextos(){
    var libro = SpreadsheetApp.openById("1Pq435PUXoI_JWdzTaYwV1OpZKO6nElWXh8pHc2ub61w");
    var textos = consultarTextosHome();
    var rango = libro.getRange("hojaPruebas!A1:B")
    rango.setValues(textos);
}