/*
for (inicializacion; condicion; intervalo o actualizacion) {
    bloque de codigo a repetir
}
*/

let numero = 1

for (numero; numero<=5; numero++){
    //console.log(numero)
}


//Ejemplo 1
//Programa que cuenta desde 10 hasta 30 de 1 en 1

let miNumero = 10
for(numero; miNumero<=30; miNumero++){
    //console.log(miNumero)
}

//Modifica el codigo anterior pero solo muestra los numeros
//pares desde 10 hasta 30

let myNumber = 10;
for (myNumber; myNumber<=30; myNumber++){
    if(myNumber%2==0){
        //console.log(myNumber)
    }
}

//Modifica el codigo anterior para mostrar solo impartes
let miNum = 10;
for (miNum; miNum<=30; miNum++){
    if (miNum%2!=0){
        console.log(miNum)
    }
}