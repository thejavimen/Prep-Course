const { clear } = require("@11ty/eleventy/src/TemplateCache");

// No cambies los nombres de las funciones.
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a=array.length;
  return array[a-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var a=array.length;
  for (var n=0;n<a;n++){
    array[n]=array[n]+1;

  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var b=[]; //[1 2 3 4]
  for (var n=0;n<array.length;n++){
    b.push(array[n]);
  }
  array.push(elemento); //[1 2 3 4 5]
  var a=array.length;//a=5
  array[0]=elemento;//[5]
  for(var n=1;n<a;n++){
    array[n]=b[n-1];//[5 1]//[5 1 2]//[5 1 2 3]//[5 1 2 3 4]
  }
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var a='';
  for(var n=0;n<palabras.length;n++){
    if(n==palabras.length-1){
      a=a+palabras[n];
    }else{
      a=a+palabras[n]+' ';
    }
    
  }
  return a;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true;
  }else{
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var a=0;
  for(var n=0;n<numeros.length;n++){
    a=a+numeros[n];
  }
  return a;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var a=0;
  for(var n=0;n<resultadosTest.length;n++){
    a=a+resultadosTest[n];
  }
  a=a/resultadosTest.length;
  return a;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var a=1;
  for(var n=0;n<arguments.length;n++){
    a=a*arguments[n];
  }
  if(arguments.length==0){
    return 0;
  }else{
    return a;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var b=[];
for (var n=0;n<arreglo.length;n++){
  if(arreglo[n]>18){
    b.push(arreglo[n]);
  }
}
return b.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var dias=['Es fin de semana','Es dia Laboral'];
  if(numeroDeDia==1 || numeroDeDia==7){
    return dias[0];
  }else{
    return dias[1];
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var a=1;
  var b=1;
  for(var i=1;i<10;i++){
    a=a*10;
    if(a-n>0 && a-n<=a/10){
      b=2;
      break;
    }
  }
  if(b==1){
    return false;
  }else{
    return true;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var a=arreglo[0];
  var b=1;
  for(var j=0;j<arreglo.length;j++){
    if(arreglo[j]!=a){
      b=2;
      break;
    }
  }  
  if(b==2){
    return false;
  }else{
    return true;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var dias=['Marzo','Noviembre','Enero'];
  var a=1;
  for(var n=0;n<dias.length;n++){
    if(!array.includes(dias[n])){
      a=2;
    }
  }
  if(a==1){
    return dias;
  }else{
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var b=[];
  for(var n=0;n<array.length;n++){
    if(array[n]>100){
      b.push(array[n]);
    }
  }
  return b;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var a=1;
  var b=[];
  for (var n=0;n<=10;n++){
    b.push(numero)
    numero=numero+2;
    if(numero==n){
      a=2;
      break;
    }

  }
  if(a==2){
    return 'Se interrumpió la ejecución';
  }else{
    return b;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
