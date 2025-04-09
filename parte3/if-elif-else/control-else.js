/**
 * Pseudocodigo estructural de una condicional
inicio
	Leer edad
	Si edad es mayor o igual que 18
		Imprimir por consola 'Si es'
	Si no
		Imprimir por consola 'No es'
final
 */

/*
Sintaxis de condicional en Javascript
if (condicion) {
    todo el bloque de codigo
} else {
    todo el bloque de codigo, cuando la condicional anterior no se cumple
}
 */


//Ejemplo 1
//Escribe un programa que indique si un numero es menor que 20
let numero = 5;
if (numero < 20){
    //console.log('El numero si es menor que 20')
} else {
    //console.log('El numero no es menor que 20')
}


//Ejemplo 2
//Escribe un programa que indique si una edad cumple o no con la mayoria de edad
let edad = 17;

if (edad >= 18){
    //console.log('Es mayor de edad.')
} else {
    //console.log('Es menor de edad.')
}

//Ejemplo 3
//Escribe un programa que indique si un estudiante pasa la materia con 60 puntos para arriba
let puntaje = 59

if (puntaje <= 100){
    if (puntaje >= 60) {
        //console.log('Aprueba.')
    } else {
        //console.log('No aprueba.')
    }
} else {
    //console.log('Puntaje no valido. Rango excedido.')
}

//Ejemplo 4
//Indica si un numero es par o impar
let miNumero = 5;
let resto = miNumero % 2
//console.log('El resto es: ' + resto)

if (resto === 0){
    console.log('El numero ' + miNumero + ' es par.')
} else {
    console.log('El numero ' + miNumero + ' es impar.')
}