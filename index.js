console.log('hola')


// 1. Variables
const nombre = document.getElementById("capturar-nombre")

const btnSaludar = document.getElementById("btn-saludar")

const areaSaludo = document.getElementById("area-saludo")

// 2. Funciones
const saludar = (name) => {
    const saludo = `Hola ${name}!!!`
    return areaSaludo.innerHTML = saludo
    
}

// 3. Eventos
btnSaludar.addEventListener("click", () => {
    const nameValue = nombre.value
    
    saludar(nameValue)
}) 