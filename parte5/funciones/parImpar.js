//Crea una funcion que indique si un numero es par
function esPar(numero){
    esPar = numero % 2 == 0
    return esPar
}



if (esPar(5)){
    console.log('Es par este numero.')
} else {
    console.log('Es impar.')
}