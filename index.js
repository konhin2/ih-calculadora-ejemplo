import operaciones from './operaciones.js'
// Selectores
// query selector es un método que permite seleccionar ids o clases 

// 1. Variables
const nombre = document.getElementById("capturar-nombre")

const btnSaludar = document.getElementById("btn-saludar")

const areaSaludo = document.getElementById("area-saludo")

// Suma
const valorA = document.getElementById("valor-a")
const valorB = document.getElementById("valor-b")
const btnSumar = document.getElementById("btn-sumar")
const areaSuma = document.getElementById("area-suma")

// Resta
const valorC = document.getElementById("valor-c")
const valorD = document.getElementById("valor-d")
const btnRestar = document.getElementById("btn-restar")
const areaResta = document.getElementById("area-resta")


/**
 * Dentro de la programación orientada a objetos, existe un concepto llamado pureza
 * La pureza de las funciones dice que debe ser lo mas independientes posibles. Sus únicos accesos están dentro de la misma función y a traves de su parámetros, no más.
 */

// 3. Eventos
// Saludo
btnSaludar.addEventListener("click", () => {
    const nameValue = nombre.value

    const resultado = operaciones.saludar(nameValue)

    areaSaludo.innerHTML = resultado
}) 
// Suma
btnSumar.addEventListener("click", () => {
    const inputValorA = Number(valorA.value)
    const inputValorB = Number(valorB.value)
    const resultado = operaciones.sumar(inputValorA, inputValorB)

    areaSuma.innerHTML = resultado
})
// Resta
btnRestar.addEventListener("click", () => {
    const inputValorA = Number(valorC.value)
    const inputValorB = Number(valorD.value)
    const resultado = operaciones.restar(inputValorA, inputValorB)

    areaResta.innerHTML = resultado
})