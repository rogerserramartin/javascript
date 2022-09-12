const suma = (a, b) => {
    return a + b
}

sumado = suma(2, 13)
console.log(sumado)

// mutabilidad: reasignar/cambiar el valor de una variable
// objeto vacio
const objetoVacio = {}
// los objetos no tiene variables, tienen propiedades/atributos
// un objeto es como un JSON, de ahi el nombre Javascript Object Notataion
// con 3_500_000_000 se lee mejor
// ES BUENA PRAXIS METER COMA EN EL ULTIMO ATRIBUTO!
const personaje = {
    nombre: 'Monkey D Luffy',
    serie: 'One Piece',
    edad: 19,
    recompensa: 3_000_000_000,
    esYonko: true,
}

console.log(personaje.recompensa)
console.log(personaje)

// cabe de todo como el Python
const arreglo = [1, 2, 3, 4, 5, 'hola', true, personaje]
console.log(arreglo[0])
console.log(arreglo[7])
// agregar mas elementos
arreglo.push(10, 0, 'jaja') // agrega uno/varios elemento
console.log(arreglo)
arreglo.pop('jaja')
console.log(arreglo)

let numero1 = 1
let numero2 = 2
comparacion = numero1 === numero2 // por que 3 ===? COMPARACION EXACTA === !==
comparacion = numero1 == numero2 // no es estricto == con 2== !=
comparacion2 = 5 == '5' // con 3 === es FALSE, con 2 == es TRUE. Los strings pueden ser iguales a sus valores numericos !== y != tambien se utilizan en este sentido 
console.log(comparacion)
console.log(comparacion2)