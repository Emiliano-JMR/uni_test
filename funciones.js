
function calcularDescuento (precio,porcentaje){
    if(porcentaje>0 && porcentaje <= 100 ){
    let descuento= precio*(porcentaje/100);
    let precioFinal= precio-descuento;
    return precioFinal;
    }else{
        return "Porcentaje inválido";
    }
}//calcularDescuento

function validarPassword(password){
    const regex = /\d/;
    let digito = regex.test(password);
    let caracteres = password.length; 
    if (digito === true && caracteres >= 8){
        return true;
    }else{
        return false;
    }

}//validarPassword

function celsiusAFarenheit (celsius){
    farenheit= (celsius * 9/5) +32
    return farenheit;
}//celsiusAFarenheit

function esMayorDeEdad(edad){
if(edad>=18){
    return true;
}else{
    return false;
}

}//esMayorDeEdad

function generarNombreCompleto(nombre,apellido){
    return `${nombre} ${apellido}`;

}//generarNombreCompleto

//se exportan las funciones 
module.exports.calcularDescuento = calcularDescuento ;
module.exports.validarPassword = validarPassword ;
module.exports.celsiusAFarenheit = celsiusAFarenheit ;
module.exports.esMayorDeEdad = esMayorDeEdad ;
module.exports.generarNombreCompleto = generarNombreCompleto;


