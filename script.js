//Aplicacion web interactiva: Entradas para el Cine

let peli1 = "El Secreto de sus Ojos"
let peli2 = "Titanic"
let peli3 = "Manhattan"
alert("Hola Bienvenido/a a cinemark!, a continuación te mostramos la cartelera del día de hoy")
let opcion = Number(prompt("1 - El Secreto de sus Ojos\n2 - Titanic\n3 - Manhattan\n4 - Salir"))   
// let opcion = Number(prompt("1 - El Secreto de sus Ojos\n2 - Titanic\n3 - Manhattan\n4 - Salir"))


while (opcion !== 4) {
    if (opcion === 1){
        let horario = prompt("Existen 2 horarios para esta funcion:\n1 - 15:50 horas\n2 - 17:10 horas")
        break
    } else if (opcion === 2){
        let horario = prompt("Existen 2 horarios para esta funcion:\n1 - 14:30 horas\n2 - 17:50 horas")
        break
    } else if (opcion === 3){
        let horario = prompt("Existen 2 horarios para esta funcion:\n1 - 16:40 horas\n2 - 21:00 horas")
        break
    } else {
        alert("Opcion ingresada incorrecta, porfavor intentelo de nuevo")
        break
    }        
}


function precioTotal(cantidadEntradas, precio){
    if (opcion === 1){
        return cantidadEntradas*precioEntrada1 
       
    } else if (opcion === 2){
        return cantidadEntradas*precioEntrada2
    } else if (opcion === 3){
        return cantidadEntradas*precioEntrada3
    } else {
        alert("Opcion ingresada incorrecta, porfavor intentelo de nuevo")   
    }
}


let precioEntrada1 = 10.90
let precioEntrada2 = 9.90
let precioEntrada3 = 11.90

let cantidad = Number(prompt("¿Cuántas entradas desea comprar?"))
let costoTotal = precioTotal(cantidad, precioEntrada1)
console.log(costoTotal)
alert("El costo total de sus entradas es de " + costoTotal + " dolares")
alert("Lo esperamos en la funcion, bienvenido/a!")




    

