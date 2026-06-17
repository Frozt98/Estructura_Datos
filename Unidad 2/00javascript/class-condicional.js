//if
let edad = 20
if(edad >= 20){
    console.log("Eres mayor de edad")
}

//if else 
let nombre = 'Juan'
if(nombre = 'Juan'){
    console.log('Bienvenido Juan')
}else{
    console.log('No es un usuario')
}

//else if
let nota = 7
if(nota = 7){
    console.log('Aprobado')
}else if(nota > 7 && nota <= 10){
    console.log('Excelente')
}else{
    console.log('Reprobado')
}

//switch
let dia = 3

switch(dia){
    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    case 3:
        console.log('Miercoles');
        break;

    default:
        console.log('Dia no valido');
}

// ternario
let miedad = 20
let mensaje = miedad >= 18 ? "Mayor de edad": "Menor de edad"
console.log(mensaje)