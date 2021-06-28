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

const question = document.getElementById("question")
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
question.style.color = "blue"

let mice = document.getElementsByClassName("mouse")

for(let i=0; i<mice.length; i++){
    mice[i].style.color = "green"
}

mice[0].addEventListener("mouseover", () => {
    console.log(mice)
    mice[0].style.fontSize = "50px"
})

let divs = document.getElementsByTagName("div")
console.log("divs:", divs)
mice[0].className = "mouse whiteMouse"

console.log(btnSaludar.id)

let parrafo = document.getElementById("info-parrafo")
console.log(parrafo)
// Edit tags
parrafo.setAttribute('class', 'subrayado')
valorA.setAttribute('placeholder', 'Escribe el primer número')

parrafo.removeAttribute('class')


// Create tag
let h2Tag = document.createElement("h2")

let parent = document.getElementById('main')
h2Tag.innerHTML = 'Soy la etiqueta creada'

parent.appendChild(h2Tag)

// Remove
const deleteP =  document.getElementById('delete-p')
parent.removeChild(deleteP)