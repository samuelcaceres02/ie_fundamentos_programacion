let frutas = ['Banana', 'Piña', 'Pera', 'Mandarina']
//console.log(frutas[2])

//Funcion para agregar un elemento al final del array
frutas.push('Manzana')
console.log('Luego del push: ', frutas)

//Funcion para eliminar el ultimo elemento del array
let eliminarUltimaFruta = frutas.pop();
console.log('Luego del pop: ', frutas)

//Funcion para agregar algo al inicio
frutas.unshift('Frutilla')
console.log('Luego del unshift', frutas)

//Funcion para eliminar algo del inicio
frutas.shift()
console.log('Luego del shift', frutas)