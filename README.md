
# Documentación de Funciones Utilitarias y Pruebas Unitarias

¡Bienvenido a este proyecto! Este archivo documenta una serie de funciones básicas escritas en JavaScript y sus respectivas pruebas unitarias utilizando Jest. El objetivo de esta documentación es explicar de manera sencilla qué hace cada pieza de código, cómo asegurar que funcione correctamente y qué casos contempla.




## 🛠️ Detalle de Funciones y Pruebas

A continuación se explica cada función en lenguaje sencillo, acompañada de su código, sus pruebas y lo que estas validan.

###1. calcularDescuento

¿Qué hace? Toma el precio de un producto y le aplica un porcentaje de descuento. Si el porcentaje es válido (entre 1 y 100), te devuelve el precio final a pagar. Si no, devuelve un mensaje de error.

Código de la función:

function calcularDescuento(precio, porcentaje){
    if(porcentaje > 0 && porcentaje <= 100 ){
        let descuento = precio * (porcentaje / 100);
        let precioFinal = precio - descuento;
        return precioFinal;
    } else {
        return "Porcentaje inválido";
    }
}

Código de las pruebas:

test("El descuento de 20% a 1000 es 800", () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});
test("El descuento de 10% a 500 es 450", () => {
    expect(funciones.calcularDescuento(500, 10)).toBe(450);
});
test("El descuento de 120% a 300 es Invalido", () => {
    expect(funciones.calcularDescuento(300, 120)).toBe("Porcentaje inválido");
});
test("El descuento de 0% a 420 es Invalido", () => {
    expect(funciones.calcularDescuento(420, 0)).toBe("Porcentaje inválido");
});

-¿Qué valida la prueba? Comprueba que las matemáticas sean correctas cuando hay un descuento válido, y verifica que el sistema se proteja contra valores imposibles (como descontar un 120% o un 0%).

-Resultado esperado: Para 1000 al 20% espera 800. Para valores fuera de rango (120 o 0), espera el texto "Porcentaje inválido".

###2. validarPassword

¿Qué hace? Revisa que una contraseña sea segura basándose en dos reglas simples: debe tener al menos 8 caracteres de largo y debe contener al menos un número.

Código de la función:

function validarPassword(password){
    const regex = /\d/;
    let digito = regex.test(password);
    let caracteres = password.length; 
    if (digito === true && caracteres >= 8){
        return true;
    } else {
        return false;
    }
}

Código de las pruebas:

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

-¿Qué valida la prueba? Valida cuatro escenarios distintos: una contraseña perfecta (letras y números), una solo con letras (falla por falta de número), una solo con números (pasa porque cumple ambas reglas) y una muy corta (falla por longitud).

-Resultado esperado: Devuelve true (verdadero) si es segura, o false (falso) si le falta un número o es muy corta.

###3. celsiusAFarenheit

¿Qué hace? Es un simple convertidor de temperatura. Le das los grados en Celsius y te devuelve su equivalente en grados Fahrenheit usando la fórmula matemática estándar.

Código de la función:

function celsiusAFarenheit(celsius){
    let farenheit = (celsius * 9/5) + 32;
    return farenheit;
}

Código de las pruebas:

test("0 grados celcius son 32 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(0)).toBe(32);
});
test("25 grados celcius son 77 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(25)).toBe(77);
});
test("-10 grados celcius son 14 fahrenheit",() => {
    expect(funciones.celsiusAFarenheit(-10)).toBe(14);
});

-¿Qué valida la prueba? Verifica que la fórmula matemática funcione bien para tres puntos clave: el punto de congelación (0°C), un clima cálido (25°C) y una temperatura negativa (-10°C).

-Resultado esperado: Para 0 devuelve 32, para 25 devuelve 77, y para -10 devuelve 14.

###4. esMayorDeEdad
¿Qué hace? Te dice si una persona es considerada mayor de edad. Simplemente revisa si la edad ingresada es igual o mayor a 18 años.

Código de la función:

function esMayorDeEdad(edad){
    if(edad >= 18){
        return true;
    } else {
        return false;
    }
}

Código de las pruebas:

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

-¿Qué valida la prueba? Confirma el límite exacto de la mayoría de edad (18), un caso claro por encima (25), un caso claro por debajo (16) y un caso de error humano como ingresar una edad negativa (-2).

-Resultado esperado: true para edades >= 18 y false para todo lo demás.

###5. generarNombreCompleto
¿Qué hace? Toma un nombre y un apellido por separado y los une en una sola frase, colocando un espacio en medio.

Código de la función:

function generarNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`;
}

Código de las pruebas:

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

-¿Qué valida la prueba? Asegura que la concatenación funcione para nombres simples, nombres compuestos (con espacios incluidos) y cómo reacciona si el usuario manda un espacio en blanco en lugar de un apellido.

-Resultado esperado: Un texto (String) con las dos palabras unidas por un espacio.
## 📊 Tabla Resumen de Casos de Prueba

| Función | Caso a probar | Entradas (Inputs) | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **calcularDescuento** | Descuento normal (20%) | `1000`, `20` | `800` |
| **calcularDescuento** | Descuento normal (10%) | `500`, `10` | `450` |
| **calcularDescuento** | Porcentaje exagerado (>100) | `300`, `120` | `"Porcentaje inválido"` |
| **calcularDescuento** | Porcentaje cero (0%) | `420`, `0` | `"Porcentaje inválido"` |
| **validarPassword** | Contraseña alfanumérica y larga | `"abc12345"` | `true` |
| **validarPassword** | Contraseña sin números | `"abcdef"` | `false` |
| **validarPassword** | Contraseña solo de números y larga | `"12345678"` | `true` |
| **validarPassword** | Contraseña demasiado corta | `"abc1"` | `false` |
| **celsiusAFarenheit** | Punto de congelación | `0` | `32` |
| **celsiusAFarenheit** | Temperatura ambiente cálida | `25` | `77` |
| **celsiusAFarenheit** | Temperatura bajo cero | `-10` | `14` |
| **esMayorDeEdad** | Límite exacto de mayoría | `18` | `true` |
| **esMayorDeEdad** | Mayor de edad claro | `25` | `true` |
| **esMayorDeEdad** | Menor de edad | `16` | `false` |
| **esMayorDeEdad** | Edad ilógica (negativa) | `-2` | `false` |
| **generarNombre** | Nombres sencillos | `"Ana"`, `"Martínez"` | `"Ana Martínez"` |
| **generarNombre** | Nombres sencillos 2 | `"Luis"`, `"Ramírez"` | `"Luis Ramírez"` |
| **generarNombre** | Nombre compuesto | `"Ana María"`, `"Gómez"` | `"Ana María Gómez"` |
| **generarNombre** | Apellido vacío (espacio) | `"Carlos"`, `" "` | `"Carlos  "` |