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
}
 */

let numero = 65;
let condicion = numero<20;

//Hacer una condicional que indique si un numero es menor que 20
console.log('La condicion actualmente muestra el valor: ' + condicion)

if (condicion === true){
    console.log('El numero ' + numero + ' es menor que 20')
}

if (condicion === false){
    console.log('El numero ' + numero + ' no es menor que 20')
}