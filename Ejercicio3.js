/*
Ejercicio 3
Escribir una función createGame que retorne una nueva función que reciba un número y 
permita adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto 
la función retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”. 
Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”

const guess = createGame() // numero secreto: 5
guess(8) // "Muy alto!"
guess(4) // "Muy bajo!"
guess(5) // "Lo adivinaste, felicitaciones!"
Bonus: crear una aplicación de consola para poder jugar el juego
*/
// const mensaje = parseInt(prompt("Ingresa un número del 1 al 100:"))

function createGame() {
    const numeroSecreto = 5
   
    return function (num) {
        if (numeroSecreto < num) {
            return "Muy alto"
        } else {
            if (numeroSecreto > num) {
                return "Muy bajo"
            } else {
                return "Lo adivinaste, felicitaciones!"
            }
        }
    }

}

//Bonus

console.log('ADIVINE EL NUMERO SECRETO');
process.stdout.write('Ingrese un numero: ')
process.stdin.on('data', function (data) {
    const guess = createGame()
    const mensaje = guess(parseInt(data.toString()))
    console.log(mensaje)
    if (mensaje === "Lo adivinaste, felicitaciones!") {
        process.exit()
    }
})

