/*
3 + 2 = 5
El conjunto de elementos '3 + 2' es lo que llamamos EXPRESION
El simbolo que realiza la operacion de sumar es lo que llamamos OPERADOR
Los valores 3 y 2 es lo que llamamos OPERANDOS
*/

//Los operadores sirven para hacer:
/**
 * Calculos matematicos
 * Comparaciones
 * Asignacion de valores
 * Combinacion de condiciones
 * Modificacion de valores
 */


//Expresiones
/**
 * 1. 3+4 ---> 7
 * 2. 'Hola ' + 'Mundo' ---> 'Hola Mundo'
 * 3. 5<10 ---> true
 * 4. a = a + 1
 */


//Combinaciones de expresiones
let suma = 2 + 2

/**
 * + suma
 * - resta
 * * multiplicacion
 * / division
 * % modulo (resto)
 * ** expontente
 */ 


//Crea un programa que dada una variable con un valor pueda mostrar el triple de ese valor por consola
let valor = 20;
let tripleValor = valor * 3
//console.log(`El triple de ${valor} es igual a ${tripleValor}`)


//Crear un programa que dada una variable con un valor, pueda mostrar el cuadrado de ese valor
let valorNumerico = 4;
let cuadradoValorNumerico = valorNumerico ** 2;
//console.log(`El valor cuadrado de ${valorNumerico} es igual a ${cuadradoValorNumerico}`)


//Crear un programa que dada una variable con un valor numerico, 
//pueda mostrar su resto cuando lo dividimos con 2

let numero = 5;
let numeroDivisor = 2;
let resto = numero % numeroDivisor
//console.log(`El resto es igual a ${resto}`)




//Dada una variable con un valor numerico, muestra por pantalla su raiz cubica
let numeroRaiz = 16;
let raizDeNumero = numeroRaiz ** (1 / 3);
let tripleRaizCubica = raizDeNumero * 3;

console.log(`La raiz cubica de ${numeroRaiz} es igual a ${raizDeNumero}`)
console.log(`El triple de la raiz cubica del numero ${numeroRaiz} es igual a ${tripleRaizCubica}`)