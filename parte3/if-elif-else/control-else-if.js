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
} else if (condicion 2) {
    todo el bloque de codigo de esta condicional
} else if (condicion 3) {
    todo el bloque de codigo de esta condicional
} else {
    todo el bloque de codigo, cuando la condicional anterior no se cumple
}
 */



//Ejemplo 1
// Indicar si una persona es de categoria --Adulto, Adolescente o Niño

let edad = 11

if (edad >= 18){
    console.log('Con ' + edad + ' años, estas en la categoria de ADULTOS.')
} else if (edad >= 12){
    console.log('Con ' + edad + ' años, estas en la categoria de ADOLESCENTES.')
} else {
    console.log('Con ' + edad + ' años, estas en la categoria de NIÑOS.')
}
