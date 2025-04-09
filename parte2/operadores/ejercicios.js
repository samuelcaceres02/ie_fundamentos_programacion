//Sumar dos variables y mostrar el resultado
let num1 = 5
let num2 = 6
console.log(`La suma es igual a: ${num1 + num2}`)

//Calcular el resto entre una div de dos numeros
let numeroUno = 4
let numeroDos = 2
let resto = numeroUno % numeroDos
console.log(`El resto es: ${resto}`)

//Verificar si un numero es mayor que otro
let n1 = 1
let n2 = 2
let esMayorN1 = n1 > n2
let esMayorN2 = n2 > n1

console.log(`Es el primero mayor?: ${esMayorN1}`)
console.log(`Es el segundo mayor?: ${esMayorN2}`)


//Determinar si dos numeros son identicos, usar ===
let number1 = 15
let number2 = 16
let sonIguales = number1 === number2
console.log(`Son identicos?: ${sonIguales}`)


//Crear un programa que declare dos variables numericas y realice las cuatro operaciones aritmeticas. 
//Luego mostrar cada resultado en la consola usando operadores de contatenacion

let numero1Ejercicio1 = 12;
let numero2Ejercicio1 = 4;

let suma = numero1Ejercicio1 + numero2Ejercicio1;
let resta = numero1Ejercicio1 - numero2Ejercicio1;
let multiplicacion = numero1Ejercicio1 * numero2Ejercicio1;
let division = numero1Ejercicio1 / numero2Ejercicio1;
let exponenciacion = numero1Ejercicio1 ** numero2Ejercicio1;

console.log('La suma entre los numeros es igual a: ' + suma)
console.log('La resta entre los numeros es igual a: ' + resta)
console.log('El producto entre los numeros es: ' + multiplicacion)
console.log('La division entre los numeros es igual a: ' + division)
console.log('La exponenciacion entre los numeros es igual a: ' + exponenciacion)


//Crear una variable edad y una variable licencia e imprimir un valor booleano indicando si tiene licencia
let edad = 19;
let esMayor = edad >= 18;

console.log('Es mayor: ' + esMayor)

let licencia = true;
let puedeTransitar = licencia === true && esMayor === true;

console.log('Tiene licencia: ' + licencia)
console.log('Puede transitar: ' + puedeTransitar)