 const funciones = require("./funciones.js")

 //pruebas de descuentos
 test("El descuento de 20% a 1000 es 800",() => {
    expect(funciones.calcularDescuento(1000,20)).toBe(800);
});

 test("El descuento de 10% a 500 es 450",() => {
    expect(funciones.calcularDescuento(500,10)).toBe(450);
});

test("El descuento de 120% a 300 es Invalido",() => {
    expect(funciones.calcularDescuento(300,120)).toBe("Porcentaje inválido");
});

test("El descuento de 0% a 420 es Invalido",() => {
    expect(funciones.calcularDescuento(420,0)).toBe("Porcentaje inválido");
});

//Pruebas de contraseñas 

test("La contraseña abc12345 es correcta ",() => {
    expect(funciones.validarPassword("abc12345")).toBeTruthy();
});

test("La contraseña abcdef es incorrecta ",() => {
    expect(funciones.validarPassword("abcdef")).toBeFalsy();
});

test("La contraseña 12345678 es correcta ",() => {
    expect(funciones.validarPassword("12345678")).toBeTruthy();
});

test("La contraseña abc1 es incorrecta ",() => {
    expect(funciones.validarPassword("abc1")).toBeFalsy();
});

//pruebas de conversion (temperatura)

test("0 grados celcius son 32 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(0)).toBe(32);
});

test("25 grados celcius son 77 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(25)).toBe(77);
});

test("-10 grados celcius son 14 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(-10)).toBe(14);
});

// pruebas de edad
test("La edad 18 cumple con la mayoria",() => {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy();
});

test("La edad 25 cumple con la mayoria",() => {
    expect(funciones.esMayorDeEdad(25)).toBeTruthy();
});

test("La edad 16 cumple no mayoria",() => {
    expect(funciones.esMayorDeEdad(16)).toBeFalsy();
});

test("La edad -2 cumple no mayoria",() => {
    expect(funciones.esMayorDeEdad(-2)).toBeFalsy();
});

// Pruebas generador nombres

test("El nombre completo es Ana Martínez ",() => {
    expect(funciones.generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
});

test("El nombre completo es Luis Ramírez ",() => {
    expect(funciones.generarNombreCompleto("Luis","Ramírez")).toBe("Luis Ramírez");
});

test("El nombre completo es Ana María Gómez ",() => {
    expect(funciones.generarNombreCompleto("Ana María","Gómez")).toBe("Ana María Gómez");
});

test("El nombre completo es Carlos   ",() => {
    expect(funciones.generarNombreCompleto("Carlos"," ")).toBe("Carlos  ");
});




