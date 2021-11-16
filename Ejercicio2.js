/*
Escribir una función crearContador que retorne una nueva función 
que incremente un número y lo retorne cada vez que es invocada:

const contar = createContador()
contar() // 1
contar() // 2
contar() // 3
Recuerda de hacer uso de closures para evitar el uso de variables globales.
*/

function crearContador() {
    let contar= 0
    return function () {
        contar = contar + 1
        console.log(contar)
    }
}

const contar1 = crearContador()
contar1()
contar1()
contar1()

