# Ejercicios Básicos de Pruebas Unitarias con Jest

## Objetivo

Desarrollar pruebas unitarias básicas utilizando Jest para comprender:

* La importancia de validar el comportamiento de las funciones.
* Cómo estructurar pruebas unitarias sencillas.
* Cómo identificar escenarios de prueba.
* Cómo documentar pruebas técnicas de manera profesional.

---

# Tecnologías y recursos

## Framework de pruebas

* Jest 30.4

## Documentación oficial

* [Documentación oficial de Jest](https://jestjs.io/docs/getting-started?utm_source=chatgpt.com)


---

# Requisitos generales

## Estructura básica sugerida

```plaintext
proyecto/
│
├── funciones.js
├── funciones.test.js
├── package.json
├── README.md
└── .gitignore
```

---

# Configuración de `.gitignore`

El proyecto debe incluir un archivo `.gitignore`.

## Archivos y carpetas recomendadas

```plaintext
node_modules/
coverage/
.env
```

## Ejemplo

```gitignore
node_modules/
coverage/
.env
```

---

# Parte 1 — Desarrollo de funciones

Implementa las siguientes funciones en un archivo llamado `funciones.js`.

---

# Ejercicio 1 — Calculadora de descuento

## Función

```js
calcularDescuento(precio, porcentaje)
```

## Reglas

* Debe devolver el precio final con descuento aplicado.
* Si el porcentaje es menor a 0 o mayor a 100, devolver:

```js
"Porcentaje inválido"
```

## Ejemplos esperados

```js
calcularDescuento(1000, 20); // 800
calcularDescuento(500, 10); // 450
calcularDescuento(300, 120); // "Porcentaje inválido"
```

---

# Ejercicio 2 — Validación de contraseña

## Función

```js
validarPassword(password)
```

## Reglas

La contraseña será válida si:

* Tiene mínimo 8 caracteres.
* Contiene al menos un número.

La función debe devolver:

* `true` si cumple las condiciones.
* `false` en caso contrario.

## Ejemplos esperados

```js
validarPassword("abc12345"); // true
validarPassword("abcdef"); // false
validarPassword("12345678"); // true
```

---

# Ejercicio 3 — Conversor de temperatura

## Función

```js
celsiusAFahrenheit(celsius)
```

## Fórmula

```plaintext
°F = (°C × 9/5) + 32
```

## Ejemplos esperados

```js
celsiusAFahrenheit(0); // 32
celsiusAFahrenheit(25); // 77
celsiusAFahrenheit(-10); // 14
```

---

# Ejercicio 4 — Verificador de mayoría de edad

## Función

```js
esMayorDeEdad(edad)
```

## Reglas

* Debe devolver `true` si la edad es 18 o mayor.
* Debe devolver `false` si es menor de 18.

## Ejemplos esperados

```js
esMayorDeEdad(18); // true
esMayorDeEdad(25); // true
esMayorDeEdad(16); // false
```

---

# Ejercicio 5 — Generador de nombre completo

## Función

```js
generarNombreCompleto(nombre, apellido)
```

## Reglas

* Debe devolver un string concatenando nombre y apellido.
* El resultado debe tener un espacio entre ambos valores.

## Ejemplos esperados

```js
generarNombreCompleto("Ana", "Martínez");
// "Ana Martínez"

generarNombreCompleto("Luis", "Ramírez");
// "Luis Ramírez"
```

---

# Parte 2 — Desarrollo manual de pruebas unitarias

En esta sección debes crear manualmente las pruebas unitarias utilizando Jest.

Las pruebas deben desarrollarse en un archivo:

```plaintext
funciones.test.js
```

---

# Importante

No debes utilizar IA para generar automáticamente el código completo de las pruebas.

Sí puedes utilizar IA para:

* Proponer ideas de escenarios de prueba.
* Identificar casos límite.
* Pensar en posibles errores.
* Verificar resultados esperados.
* Comprender mejor la documentación de Jest.

La implementación final de las pruebas debe ser escrita manualmente.

---

# Tipos de pruebas sugeridas

Para cada función intenta crear pruebas como:

* Casos correctos.
* Casos inválidos.
* Valores límite.
* Diferentes combinaciones de entrada.

---

# Ejemplos de escenarios conceptuales

## Para `calcularDescuento()`

* Descuento válido.
* Descuento de 0%.
* Descuento de 100%.
* Porcentaje inválido mayor a 100.

---

## Para `validarPassword()`

* Contraseña válida.
* Contraseña sin números.
* Contraseña demasiado corta.

---

# Parte 3 — Documentación automática con IA

Crea un archivo llamado:

```plaintext
README.md
```

El archivo debe explicar:

* Qué hace cada función.
* Qué valida cada prueba.
* Casos de prueba utilizados.
* Resultados esperados.
* Problemas encontrados durante el desarrollo.

---

# Uso recomendado de IA para documentación

La IA sí puede utilizarse para acelerar la documentación técnica.

---

# Mini guía para usar IA correctamente

## 1. Explica claramente el contexto

Ejemplo:

```plaintext
Estoy desarrollando pruebas unitarias básicas con Jest para funciones de JavaScript.
Necesito documentación técnica simple y clara para estudiantes principiantes.
```

---

## 2. Proporciona las funciones y pruebas

Comparte:

* El código de la función.
* El código de la prueba.
* El resultado esperado.

---

## 3. Solicita explicaciones específicas

Ejemplos:

```plaintext
Explica qué valida esta prueba unitaria.
```

```plaintext
Genera una tabla con casos de prueba y resultados esperados.
```

```plaintext
Resume el propósito de esta función en lenguaje sencillo.
```

---

## 4. Verifica siempre el contenido generado

La IA puede:

* Inventar información.
* Explicar incorrectamente una prueba.
* Omitir escenarios importantes.

Es responsabilidad del desarrollador validar la documentación final.

---

# Recomendaciones finales

* Ejecuta las pruebas constantemente mientras desarrollas.
* Usa nombres descriptivos para cada test.
* Mantén funciones pequeñas y fáciles de probar.
* Consulta la documentación oficial cuando tengas dudas.
* Piensa primero qué comportamiento quieres validar antes de escribir el test.

---

# Resultado esperado

Al finalizar deberías tener:

* Funciones implementadas correctamente.
* Pruebas unitarias funcionando.
* Documentación técnica básica del proyecto.
* Comprensión inicial del flujo de trabajo de testing en proyectos JavaScript.
